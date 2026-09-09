// src/server.ts
// Entry point - file utama yang menjalankan server Express

import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes";

// Buat aplikasi Express
const app = express();

// Port server (bisa diganti lewat environment variable)
const PORT = process.env.PORT || 3000;

// ─── Middleware ────────────────────────────────────────────
// Middleware = fungsi yang dijalankan SEBELUM request sampai ke route

// parse JSON body dari request
// contoh: client kirim { "name": "Budi" } → bisa diakses lewat req.body
app.use(express.json());

// parse URL-encoded body (form submission)
app.use(express.urlencoded({ extended: true }));

// aktifkan CORS agar frontend bisa akses API dari origin berbeda
// tanpa ini, browser akan blokir request dari localhost:5173 ke localhost:3000
app.use(cors());

// ─── Routes ───────────────────────────────────────────────
// Semplekan route user ke path /api/users
// Artinya semua request ke /api/users/* akan ditangani oleh userRoutes

app.use("/api/users", userRoutes);

// Route default untuk cek server hidup
app.get("/", (req, res) => {
  res.json({
    message: "API Server Berjalan",
    endpoints: {
      users: "/api/users",
    },
  });
});

// ─── Start Server ─────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
  console.log(`Users API: http://localhost:${PORT}/api/users`);
});
