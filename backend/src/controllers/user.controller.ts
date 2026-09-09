// src/controllers/user.controller.ts
// Controller berisi logika bisnis untuk setiap endpoint
// Fungsi-fungsi ini dipanggil oleh route

import { Request, Response } from "express";
import users from "../data/users";

// GET /api/users
// Mengembalikan semua data users
export const getAllUsers = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: users,
  });
};

// GET /api/users/:id
// Mengembalikan 1 user berdasarkan id
export const getUserById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  // Cari user dengan id yang sesuai
  const user = users.find((u) => u.id === id);

  // Jika user tidak ditemukan
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User tidak ditemukan",
    });
  }

  res.status(200).json({
    success: true,
    data: user,
  });
};

// POST /api/users
// Membuat user baru
export const createUser = (req: Request, res: Response) => {
  const { name, email } = req.body;

  // Validasi input sederhana
  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: "Name dan email wajib diisi",
    });
  }

  // Buat user baru dengan id otomatis
  const newUser = {
    id: users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1,
    name,
    email,
  };

  // Tambahkan ke array
  users.push(newUser);

  res.status(201).json({
    success: true,
    message: "User berhasil dibuat",
    data: newUser,
  });
};

// PUT /api/users/:id
// Mengupdate seluruh data user
export const updateUser = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;

  // Cari index user
  const index = users.findIndex((u) => u.id === id);

  // Jika user tidak ditemukan
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "User tidak ditemukan",
    });
  }

  // Validasi input
  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: "Name dan email wajib diisi",
    });
  }

  // Update data user (pertahankan id lama)
  users[index] = { id, name, email };

  res.status(200).json({
    success: true,
    message: "User berhasil diupdate",
    data: users[index],
  });
};

// DELETE /api/users/:id
// Menghapus user
export const deleteUser = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  // Cari index user
  const index = users.findIndex((u) => u.id === id);

  // Jika user tidak ditemukan
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "User tidak ditemukan",
    });
  }

  // Hapus dari array
  const deletedUser = users.splice(index, 1)[0];

  res.status(200).json({
    success: true,
    message: "User berhasil dihapus",
    data: deletedUser,
  });
};
