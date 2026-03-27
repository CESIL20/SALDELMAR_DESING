// 1. Efecto de navegación al hacer scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Funcionalidad Menú Hamburguesa
const toggleBtn = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
    // Alterna las clases para mostrar/ocultar
    toggleBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// 3. Cerrar menú al hacer clic en un enlace (para móviles)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        toggleBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});
