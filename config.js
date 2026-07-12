// ╔════════════════════════════════════════════════╗
// ║      MASTER POS — CONFIGURATION TEMPLATE        ║
// ║                                                ║
// ║  Edit this file to customize the POS for a     ║
// ║  new client. All store-specific values live    ║
// ║  here — no need to touch the HTML files.       ║
// ╚════════════════════════════════════════════════╝

const CONFIG = {

    // ─── Store Info ───
    storeName:    "Toko Demo",                    // Tampil di header & struk
    storeJargon:  "Pelayanan Terbaik & Cepat",    // Tampil di struk (italic)
    storeAddress: "Jl. Demo Contoh No. 123, Jakarta",
    storeHours:   "Setiap Hari: 08.00 - 22.00 WIB",
    storeWA:      "08xx-xxxx-xxxx",
    storeIG:      "@toko_demo",
    storeWebsite: "tokodemo.com",

    // ─── Theme ───
    // Warna utama: 'emerald', 'blue', 'purple', 'orange', 'rose', 'cyan', 'amber', 'magenta'
    theme: 'magenta',

    // ─── Firebase Config ───
    // Buat project baru di https://console.firebase.google.com
    // Copy config dari Project Settings → Web App
    firebase: {
        apiKey:            "AIzaSyDdqI387TVTuWvmMROwZKuGMv_0zQi5G7w",
        authDomain:        "pos-master-2d26b.firebaseapp.com",
        projectId:         "pos-master-2d26b",
        storageBucket:     "pos-master-2d26b.firebasestorage.app",
        messagingSenderId: "877331255278",
        appId:             "1:877331255278:web:f83923e3dca10d0e8ac8ff"
    },

    // ─── Receipt Settings ───
    receipt: {
        width: 80,           // mm — 58 or 80 (thermal printer)
        showFooter: true,    // tampilkan alamat/jam/WA/IG di struk
    },

    // ─── Admin Default ───
    // Buat user admin di Firebase Console → Authentication → Users
    // Email & password ini cuma untuk preview, buat asli di Firebase Console
    adminHint: {
        email: "admin@namatoko.com",
        password: "00000000"
    }
};

// ─── Theme Colors ───
const THEMES = {
    emerald: { primary: 'emerald', hex: '#10b981', bg: '#064e3b' },
    blue:    { primary: 'blue',    hex: '#3b82f6', bg: '#1e3a8a' },
    purple:  { primary: 'purple',  hex: '#8b5cf6', bg: '#4c1d95' },
    orange:  { primary: 'orange',  hex: '#f97316', bg: '#7c2d12' },
    rose:    { primary: 'rose',    hex: '#f43f5e', bg: '#881337' },
    cyan:    { primary: 'cyan',    hex: '#06b6d4', bg: '#0e7490' },
    amber:   { primary: 'amber',   hex: '#f59e0b', bg: '#78350f' },
    magenta: { primary: 'magenta', hex: '#e11d8f', bg: '#831843' },
};
