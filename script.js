window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const heroImage = document.querySelector('.hero-image img');

    // 1. Barra de navegación
    if (window.scrollY > 50) {
        navbar.style.background = '#000';
        navbar.style.padding = '10px 50px';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        navbar.style.padding = '20px 50px';
    }

    // 2. Desvanecimiento de imagen (solo si existe la imagen)
    if (heroImage) {
        const maxScroll = 500; 
        let opacity = 1 - (window.scrollY / maxScroll);
        heroImage.style.opacity = Math.max(0, Math.min(1, opacity));
    }
});

// 3. SCROLL SUAVE PARA TODOS LOS LINKS (Esto soluciona lo de tu botón)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
/* --- LÓGICA DE REVELACIÓN AL SCROLL --- */

function reveal() {
    // Seleccionamos todos los elementos con la clase "reveal"
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(element => {
        // Obtenemos la posición del elemento respecto a la ventana
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; // Punto de "activación" (píxeles desde el borde inferior)

        // Si el elemento entra en la zona visible, añadimos la clase "active"
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        } else {
            // Opcional: Quitar la clase si quieres que se vuelva a animar al subir
            // element.classList.remove("active");
        }
    });
}

// Ejecutamos la función una vez al cargar por si hay elementos ya visibles
reveal();

// Ejecutamos la función cada vez que se hace scroll
window.addEventListener("scroll", reveal);