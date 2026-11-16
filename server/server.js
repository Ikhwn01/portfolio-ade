const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets from public folder
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
app.use('/public', express.static(publicDir));

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
const profilePath = path.join(__dirname, 'data', 'profile.json');
const projectsPath = path.join(__dirname, 'data', 'projects.json');
const inquiriesPath = path.join(__dirname, 'data', 'inquiries.json');

// --- Routes ---

// Health Check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'Ade Portfolio API Service',
    version: '1.0.0'
  });
});

// Profile Data
app.get('/api/profile', (req, res) => {
  const profile = readJsonFile(profilePath, {
    name: 'Ade Pratama',
    title: 'Fullstack Software Engineer'
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

  // Validation
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

  // Create inquiry record
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

    console.log(`[API Contact] Pesan baru dari ${newInquiry.name} (${newInquiry.email})`);

    return res.status(201).json({
      success: true,
      message: 'Terima kasih, pesan Anda telah berhasil dikirim! Saya akan segera merespons ke email Anda.',
      data: {
        id: newInquiry.id,
        createdAt: newInquiry.createdAt
      }
    });
  } catch (err) {
    console.error('Gagal menyimpan pesan kontak:', err.message);
    return res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server saat memproses pesan Anda. Silakan coba kembali.'
    });
  }
});

// Resume Metadata / Download endpoint
app.get('/api/resume', (req, res) => {
  const resumeFilePath = path.join(publicDir, 'CV_Ade_Sufyansah.pdf');
  
  // Return metadata if requested or stream file
  if (req.query.download === 'true' && fs.existsSync(resumeFilePath)) {
    return res.download(resumeFilePath, 'CV_Ade_Sufyansah.pdf');
  }

  res.status(200).json({
    success: true,
    data: {
      fileName: 'CV_Ade_Sufyansah.pdf',
      lastUpdated: 'November 2026',
      title: 'Ade Sufyansah - Curriculum Vitae',
      availableFormat: 'PDF',
      fileUrl: '/public/CV_Ade_Sufyansah.pdf'
    }
  });
});

// Thesis Document Metadata / Download endpoint
app.get('/api/thesis', (req, res) => {
  const thesisFilePath = path.join(publicDir, 'TUGAS_AKHIR_ADE_SUFYANSAH.pdf');
  
  if (req.query.download === 'true' && fs.existsSync(thesisFilePath)) {
    return res.download(thesisFilePath, 'TUGAS_AKHIR_ADE_SUFYANSAH.pdf');
  }

  res.status(200).json({
    success: true,
    data: {
      fileName: 'TUGAS_AKHIR_ADE_SUFYANSAH.pdf',
      title: 'Klasifikasi Kualitas Tahu Menggunakan Algoritma K-Nearest Neighbors (KNN)',
      author: 'Ade Sufyansah (NPM: 202243501529)',
      institution: 'Universitas Indraprasta PGRI',
      accuracy: '98.33%',
      fileUrl: '/public/TUGAS_AKHIR_ADE_SUFYANSAH.pdf'
    }
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`🚀 Ade Portfolio API Server running on port ${PORT}`);
  console.log(`📡 URL: http://localhost:${PORT}`);
  console.log(`🩺 Health: http://localhost:${PORT}/api/health`);
  console.log(`===============================================`);
});

