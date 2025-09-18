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