const burger = document.querySelector('.burger-menu');
const socialLinks = document.querySelectorAll('.social-link');

let isExpanded = false;

burger.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    const card = document.querySelector('.card');

    navLinks.classList.toggle('active');
    card.style.display = isExpanded ? 'flex' : 'none';

    socialLinks.forEach((link) => {
        link.style.display = isExpanded ? 'inline-block' : 'none';
    });

    isExpanded = !isExpanded;
});
