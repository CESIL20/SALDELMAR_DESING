// Efecto de navegación al hacer scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    // Si el scroll es mayor a 50px, añade la clase 'scrolled'
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});