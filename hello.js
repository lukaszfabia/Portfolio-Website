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
        // Hide all content first
        content.classList.remove('show');

        // Check which radio input is selected
        if (input.checked) {
            // Show corresponding content based on the input's value
            if (input.value === "Java") {
                content.innerHTML = 'Java content will be shown here.';
            } else if (input.value === "C++") {
                content.innerHTML = 'C++ content will be shown here.';
            } else if (input.value === "JavaScript") {
                content.innerHTML = 'JavaScript content will be shown here.';
            } else if (input.value === "Python") {
                content.innerHTML = 'Python content will be shown here.';
            }

            // Show the content and align it to the top
            content.classList.add('show');
        }
    });
});