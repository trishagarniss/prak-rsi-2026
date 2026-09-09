// src/data/users.ts
// Data in-memory (menyimpan di memori, bukan database)
// Nanti di pertemuan 3 akan diganti ke SQL Server + Drizzle ORM

import { User } from "../types";

// Array of User sebagai "database" sementara
const users: User[] = [
  { id: 1, name: "Muhammad Lintang", email: "lintang@mail.com" },
  { id: 2, name: "Raihan Banu", email: "raihan@mail.com" },
  { id: 3, name: "Kunto Rossindu", email: "kunto@mail.com" },
  { id: 4, name: "Dapina Karamoy", email: "dapina@mail.com" },
  { id: 5, name: "Ayunina Kanina", email: "ayunina@mail.com" },
];

export default users;
