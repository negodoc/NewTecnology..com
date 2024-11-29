function changeSlide(carouselId, direction) {
    const carousel = document.querySelector(`#${carouselId} .carousel`);
    const items = document.querySelectorAll(`#${carouselId} .carousel-item`);
    const totalItems = items.length;
    
    let currentIndex = Array.from(items).findIndex(item => item.classList.contains('active'));

    // Atualiza o índice do slide
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    // Remove a classe ativa de todos os slides
    items.forEach(item => item.classList.remove('active'));

    // Adiciona a classe ativa ao slide atual
    items[currentIndex].classList.add('active');

    // Ajusta a transição
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}
// Primeiro Carrossel
const carousel1 = document.querySelector('.carousel');
const items1 = document.querySelectorAll('.carousel-item');
const nextBtn1 = document.querySelector('.next-btn');
const prevBtn1 = document.querySelector('.prev-btn');
let index1 = 0;

nextBtn1.addEventListener('click', () => {
    index1 = (index1 + 1) % items1.length;
    updateCarousel1();
});

prevBtn1.addEventListener('click', () => {
    index1 = (index1 - 1 + items1.length) % items1.length;
    updateCarousel1();
});

function updateCarousel1() {
    const offset = -index1 * 100;
    carousel1.style.transform = `translateX(${offset}%)`;
}

// Segundo Carrossel
const carousel2 = document.querySelector('.carousel2');
const items2 = document.querySelectorAll('.carousel-item2');
const nextBtn2 = document.querySelector('.next-btn2');
const prevBtn2 = document.querySelector('.prev-btn2');
let index2 = 0;

nextBtn2.addEventListener('click', () => {
    index2 = (index2 + 1) % items2.length;
    updateCarousel2();
});

prevBtn2.addEventListener('click', () => {
    index2 = (index2 - 1 + items2.length) % items2.length;
    updateCarousel2();
});

function updateCarousel2() {
    const offset = -index2 * 100;
    carousel2.style.transform = `translateX(${offset}%)`;
}
