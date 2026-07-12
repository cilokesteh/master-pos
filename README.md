# Master POS — Template Point of Sale System

Template POS siap pakai untuk klien. Cukup edit `config.js`, buat Firebase project, deploy — selesai.

## 🚀 Quick Start (3 Langkah)

### 1. Edit `config.js`
Buka file `config.js`, isi semua nilai:
```js
const CONFIG = {
    storeName:    "Toko Budi",           // Nama toko
    storeJargon:  "Pelayanan Terbaik",    // Slogan di struk
    storeAddress: "Jl. Merdeka No. 1, Jakarta",
    storeHours:   "Setiap Hari: 08.00 - 22.00 WIB",
    storeWA:      "0812-3456-7890",
    storeIG:      "@tokobudi",
    storeWebsite: "tokobudi.com",
    theme: 'emerald',                     // emerald|blue|purple|orange|rose|cyan|amber
    firebase: {
        apiKey:            "AIzaSy...",   // Dari Firebase Console
        authDomain:        "toko-budi.firebaseapp.com",
        projectId:         "toko-budi",
        storageBucket:     "toko-budi.appspot.com",
        messagingSenderId: "1234567890",
        appId:             "1:1234567890:web:abcdef..."
    },
};
```

### 2. Setup Firebase
1. Buka [console.firebase.google.com](https://console.firebase.google.com) → **Create Project**
2. Add Web App → copy config ke `config.js`
3. **Authentication** → Sign-in method → Enable **Email/Password**
4. **Authentication** → Users → **Add User** (email + password admin)
5. **Firestore Database** → Create → set rules:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### 3. Deploy
**Option A: Cloudflare Pages**
1. Buka [dash.cloudflare.com/pages](https://dash.cloudflare.com/pages)
2. Create project → Upload folder → Pilih folder `master-pos`
3. Deploy

**Option B: Vercel / Netlify / GitHub Pages**
- Push ke GitHub → connect repo → auto deploy

## ✨ Fitur

| Fitur | Status |
|---|---|
| 🔐 Login Firebase Auth | ✅ |
| 🛒 Kasir (tambah/edit/hapus produk) | ✅ |
| 📦 Stok auto-update | ✅ |
| ⚠️ Low stock alert (merah/hijau) | ✅ |
| 💳 Payment: Cash/QRIS/Transfer | ✅ |
| ⚠️ Validasi uang kurang | ✅ |
| 👤 Customer & Kasir di struk | ✅ |
| 🖨️ Struk thermal 58mm/80mm + Print + PDF | ✅ |
| 📊 Laporan Harian/Mingguan/Bulanan/Tahunan | ✅ Auto-detect |
| 📋 History + Reprint (label REPRINT) | ✅ |
| 🏆 Best Seller + Export Excel | ✅ |
| 🎨 Theme color customizable | ✅ |
| 📱 Responsive (mobile + desktop) | ✅ |

## 📁 Struktur File

```
master-pos/
├── config.js      ← Edit ini untuk klien baru
├── login.html     ← Halaman login
├── index.html     ← Halaman kasir (POS)
├── reports.html   ← Halaman laporan
└── README.md      ← Dokumentasi ini
```

## 🎨 Theme Colors

Tinggal ganti `theme` di `config.js`:

| Theme | Hex | Preview |
|---|---|---|
| emerald | #10b981 | Hijau |
| blue | #3b82f6 | Biru |
| purple | #8b5cf6 | Ungu |
| orange | #f97316 | Oranye |
| rose | #f43f5e | Merah |
| cyan | #06b6d4 | Cyan |
| amber | #f59e0b | Kuning |

## 🔧 Kustomisasi Lanjut

- **Lebar struk**: Ubah `CONFIG.receipt.width` (58 atau 80 mm)
- **Sembunyikan footer struk**: Set `CONFIG.receipt.showFooter = false`
- **Tambah theme baru**: Tambah entry di `THEMES` object di `config.js`

## 📝 No Struk Format

Format: `POS-DDMMYY-000001`
- Urutan jalan terus sepanjang tahun
- Reset ke `000001` setiap tanggal 1 Januari

## 🔒 Security

- Semua data Firestore butuh login (auth != null)
- API key Firebase aman untuk frontend (restricted to project)
- Gak ada backend server — pure static site

## 📞 Support

Hubungi developer untuk kustomisasi UI/UX lanjutan.
