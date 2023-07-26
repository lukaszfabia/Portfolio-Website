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


const radioInputs = document.querySelectorAll('.radio-inputs .radio input');
const content = document.querySelector('.content');

radioInputs.forEach(input => {
    input.addEventListener('change', () => {

        content.classList.remove('show');

        if (input.checked) {
            switch (input.value) {
                case 'Java':
                    showContentWithAnimation('Java content');
                    break;
                case 'Python':
                    showContentWithAnimation('Python content');
                    break;
                case 'JavaScript':
                    showContentWithAnimation('JS content');
                    break;
                case 'C++':
                    showContentWithAnimation('cpp content');
                    break;
                case 'HTML & CSS':
                    showContentWithAnimation('html css content');
                    break;
                case 'Assembly':
                    showContentWithAnimation('asm content');
                    break;
                case 'Swift':
                    showContentWithAnimation('swift content');
                    break;
            }
        }
    });
    showContentWithAnimation('Please select a language');
});
function showContentWithAnimation(text) {
    content.innerHTML = text;
    // Trigger the fade-in animation by adding the 'show' class with a slight delay
    setTimeout(() => {
        content.classList.add('show');
    }, 10);
}

const galleryImages = document.querySelectorAll('.gallery-img');
const galleryContainer = document.querySelector('.gallery');
const articleGallery = document.querySelector('.article-gallery');

let currentImageIndex = 0;
let autoChangeInterval;

function showImage(index) {
    galleryImages.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    showImage(currentImageIndex);
}

function startAutoChange() {
    autoChangeInterval = setInterval(showNextImage, 3000);
}

function stopAutoChange() {
    clearInterval(autoChangeInterval);
}

articleGallery.addEventListener('mouseover', stopAutoChange);
articleGallery.addEventListener('mouseout', startAutoChange);

showImage(currentImageIndex);
startAutoChange();
