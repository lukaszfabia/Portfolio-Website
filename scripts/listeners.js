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

// JavaScript
class RadioInputsHandler {
    constructor() {
        this.radioInputs = document.querySelectorAll('input[type="radio"][name="languages"]');
        this.content = document.querySelector('.content');
        this.init();
    }

    init() {
        this.radioInputs.forEach(input => {
            input.addEventListener('change', () => {
                this.content.classList.remove('show');
                if (input.checked) {
                    const htmlContent = `<p class="description">${input.value} content</p>`;
                    this.showContentWithAnimation(htmlContent);
                }
            });
        });

        const defaultContent = '<p class="description">Most used IDE</p>' +
            '<img src="../images/icons/intelij.png" alt="intelij" class="icon">' +
            '<img src="../images/icons/vs%20code.png" alt=vscode class="icon">' +
            '<img src="../images/icons/xcode.png" alt="xcode" class="icon">';
        this.showContentWithAnimation(defaultContent);
    }

    showContentWithAnimation(htmlContent) {
        this.content.innerHTML = htmlContent;
        // Trigger the fade-in animation by adding the 'show' class with a slight delay
        setTimeout(() => {
            this.content.classList.add('show');
        }, 10);
    }
}

// Create an instance of the class when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new RadioInputsHandler();
});

