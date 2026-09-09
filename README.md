# Pertemuan 1: Pengantar Web Application & Git Version Control

## Pertanyaan Arsitektural

- Bagaimana komponen web application saling berkomunikasi?
- Bagaimana mengelola code base saat project berkembang dan perlu kolaborasi?

## Cakupan Materi

- Peran frontend, backend, database
- Client-server architecture
- HTTP request-response cycle
- Git dasar: init, add, commit, branch, merge, dll
- Kolaborasi dengan remote repo (fetch, push/pull, conflict, pull request)

---

## 1. Arsitektur Web Application

### Komponen Utama

| Komponen | Fungsi | Teknologi Contoh |
| -------- | ------ | ---------------- |
| **Frontend** | Antarmuka yang dilihat user di browser | HTML, CSS, JS, React |
| **Backend** | Logika bisnis, memproses request, mengelola data | Express, Django, Laravel |
| **Database** | Menyimpan data secara persisten | PostgreSQL, MySQL, MongoDB |

### Client-Server Architecture

```
┌──────────┐       HTTP Request       ┌──────────┐       Query       ┌──────────┐
│  Client  │ ───────────────────────► │ Backend  │ ────────────────► │ Database │
│ (Browser)│ ◄─────────────────────── │  (API)   │ ◄──────────────── │  (SQL)   │
└──────────┘       HTTP Response      └──────────┘      Result       └──────────┘
```

1. **Client** mengirim HTTP request ke server
2. **Backend** menerima request, memproses logika, berinteraksi dengan database
3. **Backend** mengembalikan HTTP response (JSON/HTML) ke client
4. **Client** merender response menjadi UI yang terlihat user

### HTTP Request-Response Cycle

```
Client                          Server
  │                               │
  │──── GET /api/users ──────────►│  (1) Request
  │                               │     - Method: GET
  │                               │     - URL: /api/users
  │                               │     - Headers: {Authorization, Content-Type}
  │                               │
  │                               │  (2) Proses di backend
  │                               │     - Query database
  │                               │     - Format response
  │                               │
  │◄──── 200 OK + JSON data ──────│  (3) Response
  │                               │     - Status: 200
  │                               │     - Body: [{id: 1, name: "Budi"}, ...]
```

### HTTP Methods

| Method | Fungsi | Contoh |
| ------ | ------ | ------ |
| `GET` | Mengambil data | `GET /api/users` |
| `POST` | Membuat data baru | `POST /api/users` |
| `PUT` | Mengupdate data (seluruh) | `PUT /api/users/1` |
| `PATCH` | Mengupdate data (sebagian) | `PATCH /api/users/1` |
| `DELETE` | Menghapus data | `DELETE /api/users/1` |

### HTTP Status Codes

| Code | Keterangan | Kategori |
| ---- | ---------- | -------- |
| `200` | OK - Request berhasil | Sukses |
| `201` | Created - Data berhasil dibuat | Sukses |
| `400` | Bad Request - Request tidak valid | Client Error |
| `401` | Unauthorized - Belum login | Client Error |
| `403` | Forbidden - Tidak punya akses | Client Error |
| `404` | Not Found - Resource tidak ditemukan | Client Error |
| `500` | Internal Server Error | Server Error |

---

## 2. Git Version Control

### Apa itu Git?

Git adalah **distributed version control system** yang merekam setiap perubahan dalam source code. Setiap developer memiliki copy lengkap dari repository, termasuk seluruh history.

### Instalasi

```bash
# Windows
# Download dari https://git-scm.com/download/win

# Cek versi
git --version
```

### Konfigurasi Awal

```bash
# Set nama (wajib sebelum commit)
git config --global user.name "Nama Kamu"

# Set email (wajib sebelum commit)
git config --global user.email "email@domain.com"

# Cek konfigurasi
git config --list
```

### Inisialisasi Repository

```bash
# Buat folder baru
mkdir project-baru
cd project-baru

# Inisialisasi git
git init
# Output: Initialized empty Git repository in D:/project-baru/.git/

# Struktur .git/
# .git/
# ├── HEAD          ← pointer ke branch aktif
# ├── config        ← konfigurasi repo
# ├── objects/      ← semua data (file, commit, tree)
# └── refs/         ← pointer ke commit (branches, tags)
```

###Lifecycle File di Git

```
                    git add
Working Directory ──────────► Staging Area ──────────► Repository
   (untracked/modified)        (staged)                 (committed)
        ◄────────────────────────────────────────────────────
                          git checkout / git restore
```

| Status | Keterangan |
| ------ | ---------- |
| **Untracked** | File baru, belum dikenali Git |
| **Modified** | File sudah ada tapi belum di-stage |
| **Staged** | File sudah ditandai untuk di-commit |
| **Committed** | Perubahan sudah tersimpan di repository |

### Perintah Dasar Git

#### Status & Log

```bash
# Cek status file
git status

# Lihat history commit
git log

# Log lebih ringkas
git log --oneline

# Log dengan grafik branch
git log --oneline --all --graph

# Lihat perubahan yang belum di-stage
git diff

# Lihat perubahan yang sudah di-stage
git diff --staged
```

#### Add & Commit

```bash
# Tambah 1 file ke staging
git add filename.txt

# Tambah semua file ke staging
git add .

# Tambah semua perubahan ke staging (termasuk yang sudah tracked)
git add -a

# Commit dengan pesan
git commit -m "feat: tambah fitur login"

# Commit tanpa staging (hanya file yang sudah tracked)
git commit -am "fix: perbaiki bug form"
```

#### Commit Message Convention

```
<type>: <deskripsi singkat>

feat:     fitur baru
fix:      perbaikan bug
docs:     dokumentasi
style:    format (bukan logika)
refactor: refactor kode
test:     menambahkan test
chore:    maintenance
```

Contoh:
```
feat: tambah halaman register user
fix: perbaiki response 500 saat login
docs: update README cara install
```

#### Branching

```bash
# Lihat semua branch (* = branch aktif)
git branch

# Buat branch baru
git branch p1

# Pindah branch
git checkout p1

# Atau buat + pindah sekaligus
git checkout -b p1

# Rename branch
git branch -m old-name new-name

# Hapus branch
git branch -d p1
git branch -D p1    # force delete
```

#### Merge

```bash
# Pindah ke branch tujuan
git checkout main

# Gabungkan branch p1 ke main
git merge p1

# Jika terjadi conflict:
# 1. Buka file yang conflict
# 2. Pilih versi yang benar (hapus marker conflict)
# 3. git add .
# 4. git commit -m "merge: resolve conflict"
```

Conflict marker:
```
<<<<<<< HEAD
code dari branch main
=======
code dari branch p1
>>>>>>> p1
```

#### Stash (Sementara)

```bash
# Simpan perubahan sementara
git stash

# Lihat daftar stash
git stash list

# Kembalikan stash terakhir
git stash pop

# Kembalikan stash tertentu
git stash apply stash@{0}

# Hapus stash
git stash drop stash@{0}
```

#### Undo & Reset

```bash
# Batalkan perubahan file (sebelum di-add)
git checkout -- filename.txt
git restore filename.txt

# Unstage file
git reset HEAD filename.txt
git restore --staged filename.txt

# Reset ke commit tertentu
git reset --soft HEAD~1    # undo commit, tetap staged
git reset --mixed HEAD~1   # undo commit, unstage
git reset --hard HEAD~1    # undo commit + hapus perubahan

# Amending commit terakhir
git commit --amend -m "pesan baru"
```

---

## 3. GitHub (Remote Repository)

### Apa itu GitHub?

GitHub adalah platform hosting remote repository berbasis Git. Memungkinkan kolaborasi antar developer, code review, dan pengelolaan project.

### Konfigurasi SSH Key (Opsional, lebih aman)

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "email@domain.com"

# Copy public key
clip < ~/.ssh/id_ed25519.pub

# Paste di GitHub → Settings → SSH and GPG keys → New SSH key

# Test koneksi
ssh -T git@github.com
```

### Remote Repository

```bash
# Tambah remote (jika repo sudah ada di GitHub)
git remote add origin https://github.com/username/repo.git

# Lihat remote
git remote -v

# Rename remote
git remote rename origin upstream

# Hapus remote
git remote remove origin
```

### Push & Pull

```bash
# Push branch ke remote (pertama kali)
git push -u origin main

# Push branch lain
git push origin p1

# Push semua branch
git push --all origin

# Pull (fetch + merge)
git pull origin main

# Fetch (download tapi belum merge)
git fetch origin
```

### Clone

```bash
# Clone via HTTPS
git clone https://github.com/username/repo.git

# Clone via SSH
git clone git@github.com:username/repo.git

# Clone branch tertentu
git clone -b p1 https://github.com/username/repo.git

# Clone ke folder tertentu
git clone https://github.com/username/repo.git nama-folder
```

### Pull Request (Merge di GitHub)

Alur kerja Pull Request:

```
1. Buat branch baru dari main
   git checkout -b feature/fitur-baru

2. Kerja di branch tersebut
   git add . && git commit -m "feat: tambah fitur"

3. Push ke remote
   git push origin feature/fitur-baru

4. Buka GitHub → New Pull Request
   - Pilih base: main
   - Pilih compare: feature/fitur-baru
   - Isi judul dan deskripsi

5. Review & approve
   - Dicek oleh reviewer
   - Bisa diskusi perubahan

6. Merge Pull Request
   - Setelah approved, klik "Merge pull request"
   - Branch bisa dihapus
```

### Branch Protection

Di GitHub bisa diatur branch protection rules:
- **Require pull request reviews** - Harus ada review sebelum merge
- **Require status checks** - Harus lolos CI/CD
- **Require signed commits** - Commit harus ditandatangani
- **Restrict who can push** - Batasi siapa yang bisa push

### Resolve Conflict di Remote

```bash
# 1. Fetch branch terbaru
git fetch origin

# 2. Checkout branch yang mau di-merge
git checkout main

# 3. Merge dari remote
git merge origin/main

# 4. Jika conflict, resolve di local lalu push
git add .
git commit -m "merge: resolve conflict"
git push origin main
```

---

## 4. Branching Strategy

### Git Flow (untuk project besar)

```
main (production)
 │
 ├── develop (development)
 │    │
 │    ├── feature/login
 │    ├── feature/register
 │    └── feature/dashboard
 │
 ├── release/v1.0
 │
 └── hotfix/fix-bug
```

| Branch | Fungsi |
| ------ | ------ |
| `main` | Branch production, hanya berisi code stabil |
| `develop` | Branch integrasi, semua fitur merge ke sini |
| `feature/*` | Branch untuk开发 fitur baru |
| `release/*` | Persiapan release baru |
| `hotfix/*` | Fix bug di production |

### Branch Naming Convention

```
feature/nama-fitur
bugfix/nama-bug
hotfix/nama-fix
release/v1.0.0
docs/update-readme
```

---

## 5. .gitignore

### Apa itu .gitignore?

File yang berisi pattern file/folder yang **tidak** boleh di-track oleh Git.

### Contoh .gitignore

```gitignore
# Dependencies
node_modules/
.pnp
.pnp.js

# Environment variables
.env
.env.local
.env.*.local

# Build output
build/
dist/
out/

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Debug logs
npm-debug.log*
yarn-debug.log*
```

### Menggunakan .gitignore

```bash
# .gitignore sudah berlaku otomatis

# Jika file sudah di-track, hapus dari tracking:
git rm --cached filename.txt
git rm -r --cached folder/

# Commit perubahan
git commit -m "chore: hapus file sensitif dari tracking"
```

---

## 6. Git Tags

```bash
# Buat tag
git tag v1.0.0

# Buat tag dengan pesan
git tag -a v1.0.0 -s -m "Release versi 1.0.0"

# Lihat semua tag
git tag

# Push tags
git push origin v1.0.0
git push origin --tags    # push semua tag

# Checkout tag
git checkout v1.0.0

# Hapus tag lokal
git tag -d v1.0.0

# Hapus tag remote
git push origin :refs/tags/v1.0.0
```

---

## 7. Cheat Sheet Lengkap

### Setup & Init

```bash
git config --global user.name "Nama"
git config --global user.email "email"
git init
git clone <url>
```

### Stage & Commit

```bash
git add .
git commit -m "pesan"
git status
git log --oneline
```

### Branch & Merge

```bash
git branch
git checkout -b nama-branch
git merge nama-branch
git branch -d nama-branch
```

### Remote

```bash
git remote add origin <url>
git push -u origin main
git pull origin main
git fetch origin
```

### Undo

```bash
git restore file
git reset HEAD~1
git stash
git stash pop
```

---

## Tugas

> Kerjakan tugas praktikum untuk pertemuan ini di branch `p1`.

### Tugas: Git & GitHub

1. **Setup**
   - Install Git di komputer
   - Konfigurasi `user.name` dan `user.email`

2. **Latihan Dasar**
   - Buat repository lokal dengan `git init`
   - Buat file baru, lalu lakukan `add` → `commit`
   - Buat branch baru, ubah isi file di branch tersebut
   - Merge branch ke `main`

3. **GitHub**
   - Buat repository baru di GitHub
   - Push repository lokal ke GitHub
   - Buat Pull Request dari branch feature ke `main`
   - Simulasi resolve conflict

4. **Submission**
   - Screenshot histori commit (`git log --oneline --all --graph`)
   - Link repository GitHub
   - Submit ke LMS

---

## Referensi

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com)
- [Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials)
- [Pro Git Book](https://git-scm.com/book/en/v2)
- [GitHub Learning Lab](https://skills.github.com)
