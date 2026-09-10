# Pertemuan 2: Pengantar Backend & Implementasi REST API dengan CRUD Dasar

## Pertanyaan Arsitektural

- Bagaimana backend menerima, memproses, dan mengembalikan response terhadap request dari client?

## Cakupan Materi
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
>>>>>>> 7ecffd501bf9d7c2c47b8ca7332088a4b947cd1e

- Dasar Express
- Routing
- CRUD Dasar (GET/POST/PUT/DELETE)
- Controller & request handling
- Response format (JSON, status code)

<<<<<<< HEAD
---

## Tech Stack

| Komponen | Teknologi |
| -------- | --------- |
| Runtime | Node.js |
| Framework | Express.js |
| Bahasa | TypeScript |
| Auto-restart | Nodemon |

---

## Struktur Folder

=======
```bash
# Clone repo (default branch: main)
git clone https://github.com/trishagarniss/prak-rsi-2026.git

# Clone dan langsung checkout ke branch tertentu
git clone -b p1 https://github.com/trishagarniss/prak-rsi-2026.git
>>>>>>> 7ecffd501bf9d7c2c47b8ca7332088a4b947cd1e
```
backend/
├── nodemon.json             # Konfigurasi nodemon (auto-restart)
├── package.json             # Dependencies & scripts
├── tsconfig.json            # Konfigurasi TypeScript
└── src/
    ├── controllers/
    │   └── user.controller.ts # Logika bisnis tiap endpoint
    ├── data/
    │   └── users.ts         # Data in-memory (array, bukan database)
    ├── routes/
    │   └── user.routes.ts   # Definisi endpoints (URL + method)
    ├── types/
    │   └── index.ts         # Interface/type definitions
    └── server.ts            # Entry point - menjalankan server
```

### Flow Request

```
Client (Browser/Postman)
  │
  │  HTTP Request (GET /api/users)
  ▼
server.ts              ← Menerima request, parse body
  │
  │  Route matching
  ▼
user.routes.ts         ← Cocokkan method + URL ke handler
  │
  │  Panggil controller
  ▼
user.controller.ts     ← Jalankan logika, akses data
  │
  │  Baca/tulis data
  ▼
users.ts               ← Data in-memory (array of objects)
  │
  │  Return response
  ▼
Client                 ← Terima JSON response
```

---

## Setup

```bash
# Masuk ke folder backend
cd backend

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Server berjalan di http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint | Fungsi | Request Body |
| ------ | -------- | ------ | ------------ |
| `GET` | `/api/users` | Ambil semua users | - |
| `GET` | `/api/users/:id` | Ambil 1 user by ID | - |
| `POST` | `/api/users` | Buat user baru | `{ "name": "...", "email": "..." }` |
| `PUT` | `/api/users/:id` | Update user | `{ "name": "...", "email": "..." }` |
| `DELETE` | `/api/users/:id` | Hapus user | - |

### Response Format

**Sukses:**
```json
{
  "success": true,
  "data": { "id": 1, "name": "Muhammad Lintang", "email": "lintang@mail.com" }
}
```

**Error:**
```json
{
  "success": false,
  "message": "User tidak ditemukan"
}
```

---

## Testing dengan cURL

```bash
# GET semua users
curl http://localhost:3000/api/users

# GET user by ID
curl http://localhost:3000/api/users/1

# POST user baru
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Dapina Karamoy", "email": "dapina@mail.com"}'

# PUT update user
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Lintang Updated", "email": "lintang_new@mail.com"}'

# DELETE user
curl -X DELETE http://localhost:3000/api/users/1
```

---

## Penjelasan File

### `server.ts` - Entry Point
- Membuat aplikasi Express
- Setup middleware (JSON parser, CORS)
- Menyematkan routes ke path tertentu
- Menjalankan server di port tertentu

### `routes/user.routes.ts` - Routing
- Mendefinisikan URL endpoint dan HTTP method
- Menghubungkan setiap route ke controller yang sesuai
- Contoh: `router.get("/", getAllUsers)` → GET `/` panggil `getAllUsers`

### `controllers/user.controller.ts` - Controller
- Berisi logika bisnis untuk setiap endpoint
- Menerima request, proses data, kirim response
- Contoh: cari user di array, cek ada/tidak, return JSON

### `data/users.ts` - Data Layer
- Data disimpan di array (in-memory)
- Bukan database, data hilang jika server restart
- Di pertemuan 3 akan diganti ke SQL Server + Drizzle ORM

### `types/index.ts` - Type Definitions
- Mendefinisikan interface `User`
- Memastikan konsistensi tipe data di seluruh aplikasi

---

## Konsep Dasar

### Express Middleware
```typescript
// Middleware dijalankan SEBELUM request sampai ke route
app.use(express.json());     // Parse JSON body
app.use(cors());             // Aktifkan CORS
```

### Route Handler
```typescript
// req = request (data dari client)
// res = response (data yang dikirim ke client)
router.get("/", (req, res) => {
  res.json({ data: users });  // Kirim JSON response
});
```

### Status Code yang Dipakai

| Code | Keterangan | Kapan Dipakai |
| ---- | ---------- | ------------- |
| `200` | OK | GET berhasil, UPDATE berhasil, DELETE berhasil |
| `201` | Created | POST berhasil (data baru dibuat) |
| `400` | Bad Request | Input tidak valid (field kosong) |
| `404` | Not Found | Data tidak ditemukan |

---

## Selanjutnya

Di **Pertemuan 3**, data di `users.ts` akan diganti ke **SQL Server** menggunakan **Drizzle ORM** sebagai ORM. Controller dan routes tetap, hanya data layer yang berubah.
