# Praktikum RSI 2026

Repository praktikum Rekayasa Sistem Informasi 2026.

## Daftar Branch

| Branch  | Keterangan                          |
| ------- | ----------------------------------- |
| `main`  | Branch utama                        |
| `p1`    | Pertemuan 1 - Git Version Control   |
| `p2`    | Pertemuan 2 - REST API & CRUD Dasar |
| `p3`    | Pertemuan 3 - Database & ORM        |
| `p4`    | Pertemuan 4 - API Security & Docs   |
| `p5`    | Pertemuan 5 - Auth & Middleware     |
| `p6`    | Pertemuan 6 - React & Tailwind      |
| `p7`    | Pertemuan 7 - Integrasi FE & BE     |
| `p8`    | Pertemuan 8 - Validasi & Error      |
| `p9`    | Pertemuan 9 - Audit Log System      |
| `p10`   | Pertemuan 10 - Testing & Deployment |

## Kurikulum Praktikum

### Pertemuan 1: Pengantar Web Application & Git Version Control

**Pertanyaan Arsitektural:**
- Bagaimana komponen web application saling berkomunikasi?
- Bagaimana mengelola code base saat project berkembang dan perlu kolaborasi?

**Cakupan:**
- Peran frontend, backend, database
- Client-server architecture
- HTTP request-response cycle
- Git dasar: init, add, commit, branch, merge, dll
- Kolaborasi dengan remote repo (fetch, push/pull, conflict, pull request)

> Tugas: Kelompok (git & github saja)

---

### Pertemuan 2: Pengantar Backend & Implementasi REST API dengan CRUD Dasar

**Pertanyaan Arsitektural:**
- Bagaimana backend menerima, memproses, dan mengembalikan response terhadap request dari client?

**Cakupan:**
- Dasar Express
- Routing
- CRUD Dasar (GET/POST/PUT/DELETE)
- Controller & request handling
- Response format (JSON, status code)

---

### Pertemuan 3: Recall Desain Database, ORM, dan Integrasi dengan Backend

**Pertanyaan Arsitektural:**
- Bagaimana backend menyimpan dan mengambil data secara persisten dari database untuk memenuhi request pengguna?

**Cakupan:**
- Recall desain database (ERD) di SQL Server
- Koneksi backend ke SQL Server (connection string, driver)
- Parameterized query
- CRUD lanjutan: filtering, pagination, join antar tabel

> Tugas: Individu

---

### Pertemuan 4: API Security dan Dokumentasi

**Pertanyaan Arsitektural:**
- Bagaimana API melindungi data dan membatasi input yang tidak dapat dipercaya?
- Bagaimana kontrak API dikomunikasikan kepada pihak yang menggunakannya?

**Cakupan:**
- Input validation dasar
- Sanitization dasar
- Error handling terstruktur
- Dokumentasi API dengan Swagger/OpenAPI

---

### Pertemuan 5: Auth dan Middleware

**Pertanyaan Arsitektural:**
- Bagaimana backend mengetahui identitas pengguna, mengontrol alur pemrosesan request, dan mengelola ketergantungan antar-komponen?

**Cakupan:**
- Autentikasi: login, identitas user
- Token/session concept (session & JWT, implementasi JWT)
- Middleware dasar
- Parameterized middleware untuk proteksi endpoint per-role
- Protected routes

> Tugas: Individu

---

### Pertemuan 6: Pengantar Frontend dan Dasar React + Tailwind

**Pertanyaan Arsitektural:**
- Bagaimana frontend menyusun antarmuka menjadi komponen yang dapat digunakan kembali?

**Cakupan:**
- Component-based architecture
- JSX/TSX & props
- Struktur project React dasar
- Styling dengan Tailwind

---

### Pertemuan 7: Integrasi Backend & Frontend

**Pertanyaan Arsitektural:**
- Bagaimana frontend dan backend bertukar data serta menjaga alur request-response tetap terhubung sebagai satu aplikasi?

**Cakupan:**
- Fetch/axios ke REST API
- Menampilkan data backend di frontend
- Mengirim data form ke backend
- Auth flow di sisi frontend (simpan & kirim token)

> Tugas: Individu

---

### Pertemuan 8: Validasi & Error Handling

**Pertanyaan Arsitektural:**
- Bagaimana sistem memastikan data yang masuk valid dan menangani kegagalan secara konsisten di seluruh alur aplikasi?

**Cakupan:**
- Validasi input di frontend dan backend
- Konsistensi format pesan error
- Error handling menyeluruh lintas layer
- Menampilkan error ke user

---

### Pertemuan 9: Audit Log System

**Pertanyaan Arsitektural:**
- Bagaimana sistem mencatat aktivitas penting pengguna sehingga perubahan dalam sistem dapat ditelusuri?

**Cakupan:**
- Desain tabel log (aktor, aksi, waktu, target data)
- Mencatat aktivitas CRUD penting (create/update/delete)
- Menampilkan riwayat log

> Tugas: Individu

---

### Pertemuan 10: Testing & Deployment Sederhana

**Pertanyaan Arsitektural:**
- Bagaimana memastikan aplikasi bekerja sesuai kebutuhan dan dapat dijalankan dengan konfigurasi yang tepat di luar development environment?

**Cakupan:**
- Testing manual API (Postman/Thunder Client)
- Environment configuration & .env
- Menjalankan aplikasi untuk akses eksternal
- Tunnel-based exposure
- Troubleshooting dasar

> Tugas: Individu

---

## Cara Clone

```bash
# Clone repo (default branch: main)
git clone https://github.com/trishagarniss/prak-rsi-2026.git

# Clone dan langsung checkout ke branch tertentu
git clone -b p1 https://github.com/trishagarniss/prak-rsi-2026.git
```

## Setup

```bash
# Install semua dependencies (frontend + backend)
npm run install:all

# Jalankan backend & frontend sekaligus
npm run dev

# Atau jalankan terpisah
npm run dev:backend
npm run dev:frontend
```

## Struktur Repository

```
prak-rsi-2026/
├── README.md
├── package.json
├── .gitignore
├── LICENSE
├── backend/
└── frontend/
```
