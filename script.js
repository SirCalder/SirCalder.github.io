// Futuras funcionalidades podem ser adicionadas aqui.
// Exemplo: Animação suave ao clicar nos links de navegação.

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'

        });
    });
});

// Animação suave ao rolar a página
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('section');
hiddenElements.forEach(el => observer.observe(el));