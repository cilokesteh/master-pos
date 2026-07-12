// ╔════════════════════════════════════════════════╗
// ║      MASTER POS — CONFIGURATION TEMPLATE        ║
// ║                                                ║
// ║  Edit this file to customize the POS for a     ║
// ║  new client. All store-specific values live    ║
// ║  here — no need to touch the HTML files.       ║
// ╚════════════════════════════════════════════════╝

const CONFIG = {

    // ─── Store Info ───
    storeName:    "NAMA TOKO",                    // Tampil di header & struk
    storeJargon:  "Jargon / slogan toko di sini",  // Tampil di struk (italic)
    storeAddress: "Jl. Alamat Toko No. 123, Kota, Provinsi",
    storeHours:   "Setiap Hari: 10.00 - 21.00 WIB",
    storeWA:      "08xx-xxxx-xxxx",
    storeIG:      "@username_ig",
    storeWebsite: "website-toko.com",

    // ─── Theme ───
    // Warna utama: 'emerald', 'blue', 'purple', 'orange', 'rose', 'cyan', 'amber'
    theme: 'emerald',

    // ─── Firebase Config ───
    // Buat project baru di https://console.firebase.google.com
    // Copy config dari Project Settings → Web App
    firebase: {
        apiKey:            "YOUR_API_KEY",
        authDomain:        "YOUR_PROJECT.firebaseapp.com",
        projectId:         "YOUR_PROJECT_ID",
        storageBucket:     "YOUR_PROJECT.appspot.com",
        messagingSenderId: "YOUR_SENDER_ID",
        appId:             "YOUR_APP_ID"
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
};
