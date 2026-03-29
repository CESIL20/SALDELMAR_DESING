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

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        toggleBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            toggleBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

function abrirModal() {
    const modal = document.getElementById("modalReserva");
    modal.classList.add("show");
}

function cerrarModal() {
    const modal = document.getElementById("modalReserva");
    modal.classList.remove("show");
}

document.getElementById("formReserva").addEventListener("submit", function(e){
    e.preventDefault();

    const mensaje = document.getElementById("mensaje");

    mensaje.style.color = "#c59d5f";
    mensaje.textContent = "Enviando reserva...";

    setTimeout(() => {
        mensaje.style.color = "#4CAF50";
        mensaje.textContent = "✅ Reserva confirmada";

        this.reset();

        setTimeout(() => {
            cerrarModal();
            mensaje.textContent = "";
        }, 1500);

    }, 1000);
});

