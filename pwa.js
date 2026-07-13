// ╔════════════════════════════════════════════════╗
// ║   MASTER POS — DYNAMIC PWA LOADER                ║
// ║                                                  ║
// ║   Bikin manifest + theme-color otomatis dari     ║
// ║   CONFIG (config.js). Tiap client tinggal edit   ║
// ║   config.js — PWA ikut nyesuain sendiri.         ║
// ║   Butuh: config.js di-load DULUAN sebelum ini.   ║
// ╚════════════════════════════════════════════════╝
(function () {
  if (typeof CONFIG === 'undefined') return;

  var theme = (typeof THEMES !== 'undefined' && THEMES[CONFIG.theme]) || { hex: '#10b981', bg: '#064e3b' };
  var primary = theme.hex;
  var bg = '#0a0a0a';
  var name = CONFIG.storeName || 'POS';

  // 1) Manifest dibuat runtime jadi Blob URL (gak perlu file manifest.json statis per-client)
  var manifest = {
    name: name + ' — POS',
    short_name: name.length > 12 ? name.slice(0, 12) : name,
    description: (CONFIG.storeJargon || 'Point of Sale') + ' — ' + name,
    start_url: './',
    scope: './',
    display: 'standalone',
    orientation: 'any',
    background_color: bg,
    theme_color: primary,
    lang: 'id',
    categories: ['business', 'productivity'],
    icons: [
      { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: 'icons/icon-192-maskable.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
      { src: 'icons/icon-512-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
    ]
  };

  try {
    var blob = new Blob([JSON.stringify(manifest)], { type: 'application/manifest+json' });
    var url = URL.createObjectURL(blob);
    var link = document.createElement('link');
    link.rel = 'manifest';
    link.href = url;
    document.head.appendChild(link);
  } catch (e) { /* ignore */ }

  // 2) theme-color meta (warna status bar di app)
  function meta(name, content) {
    var m = document.querySelector('meta[name="' + name + '"]');
    if (!m) { m = document.createElement('meta'); m.name = name; document.head.appendChild(m); }
    m.content = content;
  }
  meta('theme-color', primary);
  meta('mobile-web-app-capable', 'yes');
  meta('apple-mobile-web-app-capable', 'yes');
  meta('apple-mobile-web-app-title', manifest.short_name);

  // 3) apple-touch-icon + favicon
  function iconLink(rel, href, type) {
    var l = document.createElement('link');
    l.rel = rel; l.href = href; if (type) l.type = type;
    document.head.appendChild(l);
  }
  iconLink('apple-touch-icon', 'icons/apple-touch-icon.png');
  iconLink('icon', 'icons/favicon.png', 'image/png');

  // 4) Register service worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () {});
    });
  }
})();
