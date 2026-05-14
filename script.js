// 1. Efecto de navegación al hacer scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Funcionalidad Menú Hamburguesa (Con animación)
const toggleBtn = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        toggleBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            toggleBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// 3. Funciones del Modal (Con animación correcta)
function abrirModal() {
    const modal = document.getElementById("modalReserva");
    modal.classList.add("show");
    document.body.style.overflow = "hidden"; // Evita scroll de fondo
}

function cerrarModal() {
    const modal = document.getElementById("modalReserva");
    modal.classList.remove("show");
    document.body.style.overflow = "auto"; // Restaura scroll
}

// 4. Lógica del Formulario
document.getElementById("formReserva").addEventListener("submit", function(e) {
    e.preventDefault();

    const mensaje = document.getElementById("mensaje");
    const btn = this.querySelector("button[type='submit']");

    // Estado de carga
    mensaje.style.color = "#c59d5f";
    mensaje.textContent = "Procesando reserva...";
    btn.disabled = true;
    btn.textContent = "Enviando...";

    setTimeout(() => {
        // Éxito
        mensaje.style.color = "#4CAF50";
        mensaje.textContent = "✅ ¡Reserva confirmada con éxito!";
        
        btn.textContent = "Confirmado";
        
        // Resetear y cerrar después de un momento
        setTimeout(() => {
            this.reset();
            cerrarModal();
            mensaje.textContent = "";
            btn.disabled = false;
            btn.textContent = "Confirmar Reserva";
        }, 2000);

    }, 1500);
});