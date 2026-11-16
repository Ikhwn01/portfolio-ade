const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Helper to safely read JSON files
const readJsonFile = (filePath, fallback = {}) => {
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
  }
  return fallback;
};

// Data paths
const profilePath = path.join(__dirname, '..', 'server', 'data', 'profile.json');
const projectsPath = path.join(__dirname, '..', 'server', 'data', 'projects.json');
const inquiriesPath = path.join(__dirname, '..', 'server', 'data', 'inquiries.json');

// Health Check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'Ade Portfolio API Service (Vercel Serverless)',
    version: '1.0.0'
  });
});

// Profile Data
app.get('/api/profile', (req, res) => {
  const profile = readJsonFile(profilePath, {
    name: 'Ade Sufyansah, S.Kom',
    title: 'Lulusan S1 Teknik Informatika'
  });
  res.status(200).json({ success: true, data: profile });
});

// Projects List
app.get('/api/projects', (req, res) => {
  const projects = readJsonFile(projectsPath, []);
  const { category } = req.query;

  if (category && category !== 'All') {
    const filtered = projects.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
    return res.status(200).json({ success: true, data: filtered });
  }

  res.status(200).json({ success: true, data: projects });
});

// Single Project Detail
app.get('/api/projects/:id', (req, res) => {
  const projects = readJsonFile(projectsPath, []);
  const project = projects.find((p) => p.id === req.params.id);

  if (!project) {
    return res.status(404).json({ success: false, message: 'Proyek tidak ditemukan.' });
  }

  res.status(200).json({ success: true, data: project });
});

// Contact Form Handler
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  const errors = [];

  if (!name || name.trim().length < 2) {
    errors.push('Nama harus diisi minimal 2 karakter.');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email.trim())) {
    errors.push('Format email tidak valid.');
  }

  if (!message || message.trim().length < 10) {
    errors.push('Pesan minimal berisi 10 karakter agar maksud pesan tersampaikan jelas.');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validasi form gagal.',
      errors
    });
  }

  const newInquiry = {
    id: 'inq-' + Date.now(),
    name: name.trim(),
    email: email.trim(),
    subject: (subject || 'Kontak Portofolio').trim(),
    message: message.trim(),
    createdAt: new Date().toISOString(),
    status: 'received'
  };

  try {
    const inquiries = readJsonFile(inquiriesPath, []);
    inquiries.push(newInquiry);
    fs.writeFileSync(inquiriesPath, JSON.stringify(inquiries, null, 2), 'utf-8');
  } catch (err) {
    console.log('[Inquiry Received in Serverless]:', newInquiry);
  }

  return res.status(201).json({
    success: true,
    message: 'Terima kasih, pesan Anda telah berhasil dikirim! Saya akan segera merespons ke email Anda.',
    data: {
      id: newInquiry.id,
      createdAt: newInquiry.createdAt
    }
  });
});

// Resume Metadata / Download endpoint
app.get('/api/resume', (req, res) => {
  res.redirect('/CV_Ade_Sufyansah.pdf');
});

// Thesis Document Metadata / Download endpoint
app.get('/api/thesis', (req, res) => {
  res.redirect('/TUGAS_AKHIR_ADE_SUFYANSAH.pdf');
});

module.exports = app;
