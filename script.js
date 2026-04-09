document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const heroImg = document.getElementById('heroImg');

    // Manejador de Scroll
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;

        // 1. Navbar Glassmorphism
        if (scrollPos > 30) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // 2. Desvanecimiento Hero Image
        if (heroImg) {
            let opacity = 1 - (scrollPos / 600);
            heroImg.style.opacity = Math.max(0, opacity);
            heroImg.style.transform = `translateY(${scrollPos * 0.2}px)`; // Parallax sutil
        }

        // 3. Ejecutar Reveal
        reveal();
    });

    // Función Reveal Optimizada
    function reveal() {
        const reveals = document.querySelectorAll(".reveal");
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add("active");
            }
        });
    }

    // Smooth Scroll para links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Ejecutar una vez al cargar
    reveal();
});
// Lógica para quitar el Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
    // Le damos 2.5 segundos para que se vea la animación y luego desaparezca
    setTimeout(() => {
        preloader.classList.add('fade-out');
        
        // Opcional: Hacer que el Hero aparezca con un efecto extra al terminar
        document.querySelector('.hero-content').style.animation = 'fadeInUp 1s forwards';
    }, 2500);
});