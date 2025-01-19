let menuIcon = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});
window.onscroll = () => {
    let sections = document.querySelectorAll('section');
    let navlinks = document.querySelectorAll('header nav a');

    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            });
        }
    });
};
const words = [" Web Developer", " Software Developer", " Photographer", " YouTuber"];
const typingSpan = document.querySelector('.typing-text span');

let wordIndex = 0;

function typeWords() {
    typingSpan.textContent = words[wordIndex];
    wordIndex = (wordIndex + 1) % words.length;
}

setInterval(typeWords, 4000);

