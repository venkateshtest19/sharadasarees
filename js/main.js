// Mobile menu toggle
const hb = document.getElementById('hamburger');
const nav = document.getElementById('navLinks');
if (hb) hb.addEventListener('click', () => nav.classList.toggle('open'));

// Auto year in footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
