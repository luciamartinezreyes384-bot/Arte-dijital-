// Efecto de scroll en la barra de navegación
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animación suave al hacer clic en los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efecto en botón CTA
const btn = document.querySelector('.cta-btn');
btn.addEventListener('click', () => {
    alert('¡Bienvenido al mundo del Arte Digital! 🎨✨');
});

console.log("Página de Artes Digitales cargada correctamente.");
