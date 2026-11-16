# Website Portofolio Ade Sufyansah, S.Kom (Executive Professional)

Website portofolio profesional fullstack modern berbasis **React** (Frontend) dan **Node.js Express** (Backend / Serverless), dirancang khusus dengan gaya **Executive Professional** bertema putih bersih, berwibawa, dan responsif.

---

## 👤 Profil Singkat
* **Nama**: Ade Sufyansah, S.Kom
* **Pendidikan**: S1 Teknik Informatika, Universitas Indraprasta PGRI (UNINDRA)
* **Keahlian Utama**: Logistik & Operasional, Dasar TI & Microsoft Office, Karakter Kerja Disiplin & Tanggung Jawab
* **Studi Kasus Skripsi**: Sistem Klasifikasi Kualitas Tahu Menggunakan Algoritma K-Nearest Neighbors (KNN) - Akurasi 98.33% (Studi Kasus Pabrik Tahu PU Kota Bekasi)

---

## 🏗️ Arsitektur Proyek

```text
portopolio ade/
├── client/                     # Frontend (React + Vite + Tailwind CSS)
│   ├── src/
│   │   ├── components/         # Navbar, Hero, Projects, Skills, Experience, Education, Contact, Footer
│   │   ├── data/               # Metadata profil, studi kasus, riwayat kerja, dan pendidikan
│   │   ├── App.jsx             # Komponen root aplikasi
│   │   └── index.css           # Konfigurasi Tailwind CSS
│   ├── public/                 # File statis (CV, Dokumen Skripsi PDF, Foto Profil)
│   └── package.json
│
├── server/                     # Backend API Lokal (Node.js + Express REST API)
│   ├── data/                   # Data JSON (profile.json, projects.json, inquiries.json)
│   ├── public/                 # Aset berkas publik server
│   ├── server.js               # Express server port 5000
│   └── package.json
│
├── api/                        # Vercel Serverless Function (Express Handler)
│   └── index.js                # Menangani seluruh rute /api/* di cloud hosting Vercel
│
├── vercel.json                 # Konfigurasi build dan rewrites untuk deploy di Vercel
├── .gitignore                  # Berkas pengecualian git
└── package.json                # Root package launcher
```

---

## 🚀 Cara Menjalankan Secara Lokal

### 1. Menjalankan Frontend dan Backend Sekaligus
Dari direktori root:
```bash
npm run dev
```
* **Frontend**: `http://localhost:5173`
* **Backend API**: `http://localhost:5000`

### 2. Menjalankan Secara Terpisah
**Backend:**
```bash
cd server
npm run dev
```

**Frontend:**
```bash
cd client
npm run dev
```

---

## 📡 Endpoint API Backend

| Metode | Endpoint | Deskripsi |
|---|---|---|
| `GET` | `/api/health` | Status kesehatan server API |
| `GET` | `/api/profile` | Data profil Ade Sufyansah, S.Kom |
| `GET` | `/api/projects` | Detail studi kasus & skripsi KNN |
| `POST` | `/api/contact` | Menerima pesan form kontak |
| `GET` | `/api/resume` | Unduh berkas Curriculum Vitae (PDF) |
| `GET` | `/api/thesis` | Unduh naskah lengkap Skripsi / Tugas Akhir (PDF) |

---

## ☁️ Deployment ke Vercel

Proyek ini telah dikonfigurasi sepenuhnya untuk Vercel:
1. Hubungkan repository GitHub ke akun Vercel.
2. Vercel akan secara otomatis mendeteksi framework Vite pada folder `client/` dan fungsi serverless pada folder `api/`.
3. Aplikasi akan aktif di domain `*.vercel.app`.
