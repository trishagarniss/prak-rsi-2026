// src/routes/user.routes.ts
// File ini mendefinisikan endpoint-endpoints yang tersedia
// Route menghubungkan URL + HTTP method ke controller yang sesuai

import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller";

// Buat router instance
const router = Router();

// ┌─────────┬─────────────────┬──────────────────────────────┐
// │ Method  │ Endpoint        │ Fungsi                       │
// ├─────────┼─────────────────┼──────────────────────────────┤
// │ GET     │ /api/users      │ Ambil semua users            │
// │ GET     │ /api/users/:id  │ Ambil 1 user by id           │
// │ POST    │ /api/users      │ Buat user baru               │
// │ PUT     │ /api/users/:id  │ Update user (seluruh field)  │
// │ DELETE  │ /api/users/:id  │ Hapus user                   │
// └─────────┴─────────────────┴──────────────────────────────┘

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
