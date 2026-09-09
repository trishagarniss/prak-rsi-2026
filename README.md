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
┌──────────┐       HTTP Request       ┌──────────┐       Query        ┌──────────┐
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
  │◄──── 200 OK + JSON data ─────│  (3) Response
  │                               │     - Status: 200
  │                               │     - Body: [{id: 1, name: "Budi"}, ...]
```

### HTTP Methods

| Method | Fungsi | Idempoten | Contoh |
| ------ | ------ | --------- | ------ |
| `GET` | Mengambil data | Ya | `GET /api/users` |
| `POST` | Membuat data baru | Tidak | `POST /api/users` |
| `PUT` | Mengupdate data (seluruh) | Ya | `PUT /api/users/1` |
| `PATCH` | Mengupdate data (sebagian) | Tidak | `PATCH /api/users/1` |
| `DELETE` | Menghapus data | Ya | `DELETE /api/users/1` |

**Idempoten** = melakukan request yang sama berkali-kali menghasilkan hasil yang sama.

### HTTP Status Codes

| Code | Keterangan | Kategori |
| ---- | ---------- | -------- |
| `200` | OK - Request berhasil | Sukses |
| `201` | Created - Data berhasil dibuat | Sukses |
| `204` | No Content - Berhasil, tanpa body | Sukses |
| `400` | Bad Request - Request tidak valid | Client Error |
| `401` | Unauthorized - Belum login | Client Error |
| `403` | Forbidden - Tidak punya akses | Client Error |
| `404` | Not Found - Resource tidak ditemukan | Client Error |
| `409` | Conflict - Data konflik | Client Error |
| `422` | Unprocessable Entity - Validasi gagal | Client Error |
| `500` | Internal Server Error | Server Error |
| `502` | Bad Gateway | Server Error |
| `503` | Service Unavailable | Server Error |

---

## 2. Git Version Control

### Apa itu Git?

Git adalah **distributed version control system** yang merekam setiap perubahan dalam source code. Setiap developer memiliki copy lengkap dari repository, termasuk seluruh history.

### Kenapa Pakai Git?

- **History lengkap** - Setiap perubahan terekam, bisa kembali ke versi manapun
- **Branching** - Bisa kerja fitur baru tanpa ganggu code utama
- **Kolaborasi** - Banyak orang kerja di codebase yang sama
- **Backup** - Setiap clone adalah backup lengkap
- **Open standard** - Dipakai hampir semua perusahaan tech

### Instalasi

```bash
# Windows - Download installer dari:
# https://git-scm.com/download/win

# Mac
brew install git

# Linux (Debian/Ubuntu)
sudo apt install git

# Cek versi
git --version
```

### Konfigurasi Awal

```bash
# Set nama (wajib sebelum commit)
git config --global user.name "Nama Kamu"

# Set email (wajib sebelum commit)
git config --global user.email "email@domain.com"

# Set default editor (opsional)
git config --global core.editor "code --wait"    # VS Code
git config --global core.editor "nano"            # Nano

# Set default branch name
git config --global init.defaultBranch main

# Cek semua konfigurasi
git config --list

# Cek 1 konfigurasi
git config user.name
```

> **`--global`** = berlaku untuk semua repo di komputer.
> Tanpa `--global` = hanya berlaku untuk repo saat ini.

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

### Lifecycle File di Git

```
                    git add
Working Directory ──────────► Staging Area ──────────► Repository
   (untracked/modified)        (staged)                 (committed)
        ◄────────────────────────────────────────────────────
                          git checkout / git restore
```

| Status | Keterangan | Cek dengan |
| ------ | ---------- | ---------- |
| **Untracked** | File baru, belum dikenali Git | `git status` (merah) |
| **Modified** | File sudah ada tapi belum di-stage | `git status` (merah) |
| **Staged** | File sudah ditandai untuk di-commit | `git status` (hijau) |
| **Committed** | Perubahan sudah tersimpan di repository | `git log` |

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

# Log dengan detail author
git log --oneline --author="Nama"

# Log 5 commit terakhir
git log --oneline -5

# Lihat perubahan yang belum di-stage
git diff

# Lihat perubahan yang sudah di-stage
git diff --staged

# Lihat perubahan 1 commit
git show abc1234
```

#### Add & Commit

```bash
# Tambah 1 file ke staging
git add filename.txt

# Tambah semua file ke staging
git add .

# Tambah beberapa file tertentu
git add file1.txt file2.txt

# Tambah semua file dengan ekstensi tertentu
git add *.js

# Commit dengan pesan
git commit -m "feat: tambah fitur login"

# Commit tanpa staging (hanya file yang sudah tracked)
git commit -am "fix: perbaiki bug form"

# Commit dengan pesan multi-baris
git commit -m "feat: tambah validasi email" -m "Menambahkan regex validation untuk format email di endpoint register"
```

#### Commit Message Convention

```
<type>: <deskripsi singkat>

[optional body]

[optional footer]
```

| Type | Keterangan |
| ---- | ---------- |
| `feat` | Fitur baru |
| `fix` | Perbaikan bug |
| `docs` | Dokumentasi |
| `style` | Format (bukan logika) |
| `refactor` | Refactor kode |
| `test` | Menambahkan/memperbaiki test |
| `chore` | Maintenance (build, deps, dll) |
| `perf` | Performa |
| `ci` | CI/CD configuration |

Contoh:
```
feat: tambah halaman register user
fix: perbaiki response 500 saat login
docs: update README cara install
refactor: pindah logic auth ke service layer
```

#### Branching

```bash
# Lihat semua branch (* = branch aktif)
git branch

# Lihat semua branch (termasuk remote)
git branch -a

# Buat branch baru
git branch p1

# Pindah branch
git checkout p1

# Atau buat + pindah sekaligus
git checkout -b p1

# Cara baru (Git 2.23+)
git switch p1              # pindah branch
git switch -c p1           # buat + pindah

# Rename branch
git branch -m old-name new-name

# Hapus branch (sudah di-merge)
git branch -d p1

# Force delete branch (belum di-merge)
git branch -D p1
```

#### Merge

```bash
# Pindah ke branch tujuan
git checkout main

# Gabungkan branch p1 ke main
git merge p1

# Merge dengan commit message khusus
git merge p1 --no-ff -m "merge: gabungkan fitur login"

# Jika terjadi conflict:
# 1. Buka file yang conflict
# 2. Pilih versi yang benar
# 3. git add .
# 4. git commit -m "merge: resolve conflict"
```

Conflict marker di dalam file:
```
<<<<<<< HEAD
code dari branch main (branch kita)
=======
code dari branch p1 (branch yang di-merge)
>>>>>>> p1
```

**Cara resolve:**
1. Pilih salah satu, atau gabungkan manual
2. Hapus semua marker (`<<<<<<<`, `=======`, `>>>>>>>`)
3. Save file
4. `git add .` → `git commit`

#### Stash (Menyimpan Sementara)

```bash
# Simpan perubahan sementara (ke dirty state)
git stash

# Simpan dengan pesan
git stash push -m "sedang kerja fitur X"

# Lihat daftar stash
git stash list

# Kembalikan stash terakhir (hapus dari stash list)
git stash pop

# Kembalikan stash tertentu (tetap di stash list)
git stash apply stash@{0}

# Kembalikan 1 file dari stash
git stash pop -- README.md

# Hapus stash tertentu
git stash drop stash@{0}

# Hapus semua stash
git stash clear
```

**Kapan pakai stash?**
- Ingin switch branch tapi ada perubahan belum selesai
- Ingin pull tapi ada uncommitted changes
- Menyimpan work-in-progress

#### Undo & Reset

```bash
# Batalkan perubahan file (sebelum di-add)
git checkout -- filename.txt
git restore filename.txt

# Unstage file (keluarkan dari staging)
git reset HEAD filename.txt
git restore --staged filename.txt

# Reset ke commit sebelumnya
git reset --soft HEAD~1     # undo commit, perubahan tetap staged
git reset --mixed HEAD~1    # undo commit, perubahan jadi unstaged
git reset --hard HEAD~1     # undo commit + hapus semua perubahan

# Reset ke commit tertentu
git reset --hard abc1234

# Amending commit terakhir (ubah pesan / tambah file)
git commit --amend -m "pesan baru"
git add forgotten-file.txt
git commit --amend --no-edit

# Lihat reflog (riwayat semua perubahan HEAD)
git reflog

# Kembalikan commit yang ter-reset
git checkout abc1234
```

> **Peringatan:** `git reset --hard` menghapus perubahan permanen. Gunakan dengan hati-hati.

#### Cherry-pick

```bash
# Ambil 1 commit dari branch lain
git cherry-pick abc1234

# Ambil beberapa commit
git cherry-pick abc1234 def5678

# Ambil commit tapi jangan langsung commit (hanya stage)
git cherry-pick --no-commit abc1234
```

**Kapan pakai cherry-pick?**
- Bug fix di branch lain perlu diapply ke branch ini
- Ambil 1 commit spesifik tanpa merge seluruh branch

#### Rebase

```bash
# Rebase branch p1 di atas main terbaru
git checkout p1
git rebase main

# Rebase interaktif (ubah/squash/reorder commit)
git rebase -i HEAD~3

# Jika conflict saat rebase:
# 1. Resolve conflict
# 2. git add .
# 3. git rebase --continue
# 4. Atau batalkan: git rebase --abort
```

**Rebase vs Merge:**

| | Merge | Rebase |
| --- | --- | --- |
| History | Membuat merge commit | Linear history |
| Commit Asli | Tetap ada | Diubah (commit baru) |
| Visual | Branching di graph | Garis lurus di graph |
| Keamanan | Lebih aman | Hindari rebase public branch |

> **Aturan emas:** Jangan rebase branch yang sudah di-push ke remote dan dipakai orang lain.

#### Git Aliases

```bash
# Buat shortcut untuk perintah panjang
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm commit
git config --global alias.lg "log --oneline --all --graph"
git config --global alias.last "log -1 HEAD"
git config --global alias.unstage "restore --staged"

# Setelah setup, bisa pakai:
git st          # git status
git co main     # git checkout main
git lg          # git log --oneline --all --graph
git last        # git log -1 HEAD
```

---

## 3. .gitattributes

### Apa itu .gitattributes?

File yang mengontrol cara Git menangani file tertentu (line endings, binary, diff, merge).

### Contoh .gitattributes

```gitignore
# Setikan line endings untuk semua text file
* text=auto

# Specific files
*.js text eol=lf
*.ts text eol=lf
*.json text eol=lf
*.md text eol=lf

# Windows scripts
*.ps1 text eol=crlf
*.bat text eol=crlf

# Binary files (jangan di-diff)
*.png binary
*.jpg binary
*.gif binary
*.ico binary
*.woff binary
*.woff2 binary
*.ttf binary

# Custom diff for lock files
package-lock.json -diff
yarn.lock -diff
```

### Line Endings

| OS | Line Ending | Simbol |
|----|-------------|--------|
| Windows | CRLF | `\r\n` |
| Mac/Linux | LF | `\n` |

Masalah umum: File di Windows pakai CRLF, di Mac/Linux pakai LF → sering muncul "changed" padahal tidak ada perubahan.

**Solusi:**
```bash
# Set git handle line endings otomatis
git config --global core.autocrlf true     # Windows
git config --global core.autocrlf input    # Mac/Linux
```

---

## 4. GitHub (Remote Repository)

### Apa itu GitHub?

GitHub adalah platform hosting remote repository berbasis Git. Memungkinkan kolaborasi antar developer, code review, issue tracking, dan pengelolaan project.

### Konfigurasi SSH Key

SSH Key agar tidak perlu input password setiap push/pull.

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "email@domain.com"

# Tekan Enter untuk default location & empty passphrase

# Copy public key
# Windows
clip < ~/.ssh/id_ed25519.pub

# Mac
pbcopy < ~/.ssh/id_ed25519.pub

# Linux
cat ~/.ssh/id_ed25519.pub | xclip

# Paste di GitHub:
# Settings → SSH and GPG keys → New SSH key
# Title: Nama Komputer
# Key: paste public key

# Test koneksi
ssh -T git@github.com
# Output: Hi username! You've successfully authenticated...
```

### Remote Repository

```bash
# Tambah remote
git remote add origin https://github.com/username/repo.git

# Tambah remote via SSH
git remote add origin git@github.com:username/repo.git

# Lihat remote
git remote -v

# Rename remote
git remote rename origin upstream

# Hapus remote
git remote remove origin

# Ganti URL remote
git remote set-url origin https://github.com/username/new-repo.git
```

### Push & Pull

```bash
# Push branch ke remote (pertama kali, -u untuk set upstream)
git push -u origin main

# Push branch lain
git push origin p1

# Push semua branch
git push --all origin

# Push tags
git push origin v1.0.0
git push origin --tags

# Pull (fetch + merge dari remote)
git pull origin main

# Pull dengan rebase (lebih bersih)
git pull --rebase origin main

# Fetch (download tapi belum merge/update local)
git fetch origin

# Lihat remote branches setelah fetch
git branch -r
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

# Shallow clone (hanya 1 commit, untuk repo besar)
git clone --depth 1 https://github.com/username/repo.git
```

### Pull Request (Merge di GitHub)

Alur kerja Pull Request:

```
┌─────────────────────────────────────────────────────────────────┐
│                        PULL REQUEST FLOW                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. Buat branch baru dari main                                  │
│     $ git checkout -b feature/fitur-baru                        │
│                                                                 │
│  2. Kerja & commit di branch tersebut                           │
│     $ git add . && git commit -m "feat: tambah fitur"           │
│                                                                 │
│  3. Push ke remote                                              │
│     $ git push origin feature/fitur-baru                        │
│                                                                 │
│  4. Buka GitHub → New Pull Request                              │
│     - Base: main                                                │
│     - Compare: feature/fitur-baru                               │
│     - Isi judul & deskripsi                                     │
│                                                                 │
│  5. Review & diskusi                                            │
│     - Reviewer beri komentar                                    │
│     - Developer perbaiki jika ada request                        │
│                                                                 │
│  6. Approve & Merge                                             │
│     - Setelah approve, klik "Merge pull request"                │
│     - Hapus branch setelah merge                                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Code Review Workflow

```
Developer                          Reviewer
    │                                │
    │─── buat PR ──────────────────►│
    │                                │
    │                                │── review kode
    │                                │── beri komentar
    │◄── request changes ───────────│
    │                                │
    │── perbaiki kode ──────────────►│
    │── push ke branch PR ─────────►│
    │                                │
    │                                │── re-review
    │◄── approve ───────────────────│
    │                                │
    │── merge PR ───────────────────►│
    │── hapus branch ──────────────►│
```

**Tips Code Review:**
- Review kode, bukan orang
- Beri komentar spesifik (line number, saran perbaikan)
- Gunakan label: `bug`, `suggestion`, `question`, `nitpick`
- Approve jika sudah memenuhi standar

### GitHub Issues

Issues untuk melacak bug, fitur, dan task.

**Membuat Issue:**
1. Buka tab **Issues** di repo
2. Klik **New issue**
3. Isi **Title** (deskripsi singkat)
4. Isi **Description** (detail, steps to reproduce, dsb)
5. Tambah **Labels** (bug, enhancement, documentation)
6. Tambah **Assignee** (siapa yang handle)
7. Tambah **Milestone** (target release)
8. Klik **Submit new issue**

**Issue Template:**
```markdown
## Deskripsi
[Jelaskan masalah atau fitur]

## Steps to Reproduce (untuk bug)
1. Buka halaman...
2. Klik tombol...
3. Lihat error...

## Expected Behavior
[Apa yang seharusnya terjadi]

## Screenshots
[Jika ada]
```

**Referensi Issue di Commit/PR:**
```bash
# Otomatis close issue saat merge PR
git commit -m "fix: perbaiki login (#12)"

# Referensi issue tanpa close
git commit -m "feat: tambah validasi, see #15"
```

### Branch Protection Rules

Di GitHub → Settings → Branches → Add rule:

| Rule | Keterangan |
| ---- | ---------- |
| **Require pull request reviews** | Harus ada review sebelum merge |
| **Require status checks** | Harus lolos CI/CD |
| **Require signed commits** | Commit harus ditandatangani |
| **Restrict who can push** | Batasi siapa yang bisa push langsung |
| **Require linear history** | Hanya rebase/squash, no merge commit |

### Resolve Conflict di Remote

```bash
# 1. Fetch branch terbaru
git fetch origin

# 2. Checkout branch yang mau di-merge
git checkout main

# 3. Merge dari remote
git merge origin/main

# 4. Jika conflict, resolve di local
#    - Buka file, resolve conflict markers
#    - git add .
#    - git commit -m "merge: resolve conflict"

# 5. Push
git push origin main
```

---

## 5. Branching Strategy

### Git Flow (untuk project besar)

```
main (production) ──────────────────────────────────────────────────
 │                                                                    │
 ├── develop (development) ────────────────────────────────────────  │
 │    │                                                               │
 │    ├── feature/login ──► PR ──► develop                           │
 │    ├── feature/register ──► PR ──► develop                        │
 │    └── feature/dashboard ──► PR ──► develop                       │
 │                                                                    │
 ├── release/v1.0 ──► PR ──► main + develop                         │
 │                                                                    │
 └── hotfix/fix-bug ──► PR ──► main + develop                       │
```

| Branch | Fungsi | Siapa yang push |
| ------ | ------ | --------------- |
| `main` | Branch production | Lead / Admin |
| `develop` | Branch integrasi | Developer |
| `feature/*` | Fitur baru | Developer |
| `release/*` | Persiapan release | Release Manager |
| `hotfix/*` | Fix bug production | Lead / Senior |

### Trunk-Based Development (untuk tim kecil)

```
main ─────────────────────────────────────────────────►
 │                                                      │
 ├── feature/short-lived ──► PR ──► main (cepat)       │
 ├── bugfix/quick-fix ──► PR ──► main                  │
 └── ...
```

- Branch pendek hidup (hari, bukan minggu)
- Sering merge ke main
- Feature flags untuk fitur belum siap

### Branch Naming Convention

```
feature/nama-fitur          # Fitur baru
bugfix/nama-bug             # Perbaikan bug
hotfix/nama-fix             # Fix urgent di production
release/v1.0.0              # Persiapan release
docs/update-readme          # Dokumentasi
chore/update-deps           # Maintenance
refactor/nama-module        # Refactor kode
test/tambah-test            # Penambahan test
```

---

## 6. Git Tags

```bash
# Buat lightweight tag
git tag v1.0.0

# Buat annotated tag (lebih baik, ada pesan)
git tag -a v1.0.0 -m "Release versi 1.0.0"

# Tandatangani tag (GPG signing)
git tag -s v1.0.0 -m "Signed release v1.0.0"

# Lihat semua tag
git tag

# Lihat detail tag
git show v1.0.0

# Push 1 tag
git push origin v1.0.0

# Push semua tag
git push origin --tags

# Checkout tag (detached HEAD)
git checkout v1.0.0

# Buat branch dari tag
git checkout -b hotfix/fix-v1 v1.0.0

# Hapus tag lokal
git tag -d v1.0.0

# Hapus tag remote
git push origin :refs/tags/v1.0.0
git push origin --delete v1.0.0
```

---

## 7. Collaboration Workflow Diagram

```
┌────────────────────────────────────────────────────────────────────────┐
│                     LENGKAP COLLABORATION WORKFLOW                      │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌─────────┐    ┌──────────┐    ┌──────────┐    ┌──────────────┐     │
│  │  Clone  │───►│  Create  │───►│   Work   │───►│    Stage     │     │
│  │  repo   │    │  branch  │    │   code   │    │   changes    │     │
│  └─────────┘    └──────────┘    └──────────┘    └──────┬───────┘     │
│                                                         │              │
│                                                         ▼              │
│  ┌─────────────────┐    ┌──────────┐    ┌───────────────────────┐    │
│  │  Delete branch  │◄───│  Merge   │◄───│      Create PR        │    │
│  │  (cleanup)      │    │   PR     │    │  (Push + Open PR)     │    │
│  └─────────────────┘    └──────────┘    └───────────────────────┘    │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘

Perintah di terminal:
─────────────────────
$ git clone <url>
$ git checkout -b feature/nama-fitur
$ <edit files>
$ git add .
$ git commit -m "feat: deskripsi"
$ git push origin feature/nama-fitur
$ <buka GitHub, buat PR, review, approve, merge>
$ git checkout main && git pull
$ git branch -d feature/nama-fitur
```

### Full Workflow (dari awal sampai deploy)

```
1. SETUP (sekali saja)
   git config --global user.name "Nama"
   git config --global user.email "email"
   ssh-keygen ... (setup SSH key)
   git clone <repo-url>

2. DAILY WORKFLOW
   git checkout main
   git pull origin main
   git checkout -b feature/fitur-baru

   <edit files>
   git add .
   git commit -m "feat: deskripsi"
   git push origin feature/fitur-baru

   <buka GitHub, buat PR>
   <review, approve, merge>

   git checkout main
   git pull origin main
   git branch -d feature/fitur-baru

3. RELEASE
   git checkout main
   git pull origin main
   git tag -a v1.0.0 -m "Release v1.0.0"
   git push origin v1.0.0
```

---

## 8. Cheat Sheet Lengkap

### Setup & Init
```bash
git config --global user.name "Nama"
git config --global user.email "email"
git init
git clone <url>
```

### Stage & Commit
```bash
git add .                       # Stage semua
git add file.txt                # Stage 1 file
git commit -m "pesan"           # Commit
git status                      # Cek status
git log --oneline               # Lihat history ringkas
git log --oneline --all --graph # Lihat grafik branch
```

### Branch & Merge
```bash
git branch                      # Lihat branches
git checkout -b nama-branch     # Buat + pindah
git checkout nama-branch        # Pindah branch
git merge nama-branch           # Merge ke branch aktif
git branch -d nama-branch       # Hapus branch
```

### Remote
```bash
git remote add origin <url>     # Tambah remote
git remote -v                   # Lihat remote
git push -u origin main         # Push + set upstream
git push origin nama-branch     # Push branch
git pull origin main            # Pull + merge
git fetch origin                # Download saja
```

### Undo & Restore
```bash
git restore file.txt            # Batalkan perubahan
git restore --staged file.txt   # Unstage
git reset --soft HEAD~1         # Undo commit (staged)
git reset --hard HEAD~1         # Undo commit (hapus semua)
git stash                       # Simpan sementara
git stash pop                   # Kembalikan stash
```

### Advanced
```bash
git cherry-pick <commit>        # Ambil commit tertentu
git rebase main                 # Rebase di atas main
git reflog                      # Lihat semua perubahan HEAD
git bisect start                # Binary search bug
```

---

## 9. Troubleshooting Umum

### "fatal: remote origin already exists"
```bash
git remote remove origin
git remote add origin <url-baru>
```

### "error: failed to push some refs"
```bash
git pull origin main --allow-unrelated-histories
# Resolve conflict jika ada
git push origin main
```

### Salah commit ke branch
```bash
# Pindahkan commit terakhir ke branch lain
git checkout branch-yang-benar
git cherry-pick HEAD~1          # atau commit hash

# Hapus dari branch salah
git checkout branch-salah
git reset --hard HEAD~1
```

### Lupa commit file
```bash
# Tambah file ke commit terakhir
git add forgotten-file.txt
git commit --amend --no-edit
```

### Commit di branch salah
```bash
# Simpan commit dulu
git log --oneline              # catat hash commit
git checkout branch-yang-benar
git cherry-pick <hash>

# Kembali ke branch asal, reset
git checkout branch-salah
git reset --hard HEAD~1
```

---

## 10. Tugas

> Kerjakan tugas praktikum untuk pertemuan ini di branch `p1`.

### Tugas: Git & GitHub

1. **Setup**
   - Install Git di komputer
   - Konfigurasi `user.name` dan `user.email`
   - Setup SSH key di GitHub

2. **Latihan Dasar**
   - Buat repository lokal dengan `git init`
   - Buat file baru, lalu lakukan `add` → `commit`
   - Buat branch baru, ubah isi file di branch tersebut
   - Merge branch ke `main`
   - Coba `git stash`, lalu `git stash pop`

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

## 11. Referensi

| Sumber | Link |
| ------ | ---- |
| Git Documentation | https://git-scm.com/doc |
| GitHub Docs | https://docs.github.com |
| Atlassian Git Tutorials | https://www.atlassian.com/git/tutorials |
| Pro Git Book (Gratis) | https://git-scm.com/book/en/v2 |
| GitHub Learning Lab | https://skills.github.com |
| Git Cheat Sheet (GitHub) | https://education.github.com/git-cheat-sheet-education.pdf |
| Conventional Commits | https://www.conventionalcommits.org |
| Oh Shit, Git!?! | https://ohshitgit.com |
| Learn Git Branching (Interactive) | https://learngitbranching.js.org |
