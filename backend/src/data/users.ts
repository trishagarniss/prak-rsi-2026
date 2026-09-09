// src/data/users.ts
// Data in-memory (menyimpan di memori, bukan database)
// Nanti di pertemuan 3 akan diganti ke SQL Server + Drizzle ORM

import { User } from "../types";

// Array of User sebagai "database" sementara
const users: User[] = [
  { id: 1, name: "Budi Santoso", email: "budi@mail.com" },
  { id: 2, name: "Sari Dewi", email: "sari@mail.com" },
  { id: 3, name: "Andi Pratama", email: "andi@mail.com" },
];

export default users;
