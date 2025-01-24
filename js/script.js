//tema claro/oscuro
const toggleTheme = () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
};

//typing
document.addEventListener('DOMContentLoaded', () => {
    new Typed('#typed', {
        strings: ['Developer', 'Freelancer', 'Full-Stack'],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1000,
        loop: true,
    });
});

//toggle menu
// Selección de elementos
const header = document.getElementById('header'); 
const toggleButton = document.querySelector('.header-toggle');

// Verificación y acción
if (header && toggleButton) {
  toggleButton.addEventListener('click', () => {
    header.classList.toggle('open'); 
  });
} else {
  console.error('No se encontró el header o el botón de toggle.');
}

const navLinks = document.querySelectorAll('.navmenu a');

if (navLinks.length > 0) {
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        header.classList.remove('open');
      }
    });
  });
}


