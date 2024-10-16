// Función para mostrar el carrusel cuando el usuario hace scroll
function showCarouselOnScroll() {
    const carousel = document.getElementById('carousel');
    const carouselPosition = carousel.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (carouselPosition < screenHeight) {
        carousel.classList.add('show');
        window.removeEventListener('scroll', showCarouselOnScroll); // Elimina el evento una vez que se muestra
    }
}

window.addEventListener('scroll', showCarouselOnScroll);

// Funcionalidad del carrusel
const track = document.querySelector('.carousel');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
let currentIndex = 0;
const slideWidth = slides[0].getBoundingClientRect().width;

const moveToSlide = (index) => {
    const offset = -index * slideWidth;
    track.style.transform = `translateX(${offset}px)`;
    currentIndex = index;
};

nextButton.addEventListener('click', () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    moveToSlide(nextIndex);
});

prevButton.addEventListener('click', () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    moveToSlide(prevIndex);
});
