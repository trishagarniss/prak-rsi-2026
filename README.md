# Pertemuan 2: Pengantar Backend & Implementasi REST API dengan CRUD Dasar

## Pertanyaan Arsitektural

- Bagaimana backend menerima, memproses, dan mengembalikan response terhadap request dari client?

## Cakupan Materi

- Dasar Express
- Routing
- CRUD Dasar (GET/POST/PUT/DELETE)
- Controller & request handling
- Response format (JSON, status code)

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

```
backend/
├── package.json             # Dependencies & scripts
├── tsconfig.json            # Konfigurasi TypeScript
├── nodemon.json             # Konfigurasi nodemon (auto-restart)
└── src/
    ├── server.ts            # Entry point - menjalankan server
    ├── routes/
    │   └── user.routes.ts   # Definisi endpoints (URL + method)
    ├── controllers/
    │   └── user.controller.ts # Logika bisnis tiap endpoint
    ├── data/
    │   └── users.ts         # Data in-memory (array, bukan database)
    └── types/
        └── index.ts         # Interface/type definitions
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
  "data": { "id": 1, "name": "Budi", "email": "budi@mail.com" }
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
  -d '{"name": "Rina", "email": "rina@mail.com"}'

# PUT update user
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Budi Updated", "email": "budi_new@mail.com"}'

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
