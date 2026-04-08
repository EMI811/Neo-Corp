window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const heroImage = document.querySelector('.hero-image img');

    // Cambiar la barra de navegación al hacer scroll
    if (window.scrollY > 50) {
        navbar.style.background = '#000';
        navbar.style.padding = '10px 50px';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        navbar.style.padding = '20px 50px';
    }

    // Efecto de desvanecimiento para la imagen del juego
    // Puedes ajustar el divisor '400' para que el efecto sea más rápido o lento.
    // Un número mayor = el efecto de desvanecimiento tarda más.
    const maxScroll = 400; 
    let opacity = 1 - (window.scrollY / maxScroll);

    // Asegurarse de que la opacidad esté entre 0 y 1
    if (opacity < 0) {
        opacity = 0;
    } else if (opacity > 1) {
        opacity = 1;
    }

    heroImage.style.opacity = opacity;
});
// Seleccionamos todos los links de navegación
const navLinks = document.querySelectorAll('.nav-item');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Evita que la página recargue
        const section = e.target.getAttribute('data-section');
        
        // Efecto visual de clic
        console.log("Navegando a: " + section);
        
        // Si es "noticias", podemos hacer scroll suave hasta la sección de noticias
        if(section === 'noticias') {
            document.querySelector('.news-section').scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            alert("Esta sección de " + section + " estará disponible próximamente.");
        }
    });
});

// Hacer que el botón principal también funcione
const mainBtn = document.querySelector('.btn-main');
mainBtn.addEventListener('click', () => {
    window.open('', '_blank'); 
    // Esto abrirá el trailer oficial en una pestaña nueva
});
// Smooth Scroll para los links de la navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});