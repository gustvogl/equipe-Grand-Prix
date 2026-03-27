// =========================================================
// SQUAD SCRIPT - STAR TECH SQUAD
// =========================================================

// 1. Inicializa as Animações de Scroll (AOS)
AOS.init({
    duration: 1000,
    once: true,
});

// 2. Efeito de Digitação (Typed.js) - Atualizado para Elite Squad
var typed = new Typed(".auto-type", {
    strings: ["Desenvolvimento Full Stack", "UI/UX Design de Elite", "Engenharia de Software", "Soluções Digitais Brilhantes"],
    typeSpeed: 90,
    backSpeed: 45,
    loop: true
});

// 3. Menu Mobile
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('ph-list');
    menuToggle.classList.toggle('ph-x'); // Troca ícone para fechar
});

// Fecha menu mobile quando um link é clicado
navLinks.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('ph-x');
        menuToggle.classList.add('ph-list');
    }
});

// 4. Efeito Subtil de Luz Seguindo o Mouse
document.addEventListener('mousemove', (e) => {
    document.body.style.setProperty('--x', e.clientX + 'px');
    document.body.style.setProperty('--y', e.clientY + 'px');
});