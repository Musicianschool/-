const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
const dotsContainer = document.querySelector('.dots-container');
let currentIndex = 0;

// Створення точок навігації
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);

    dot.addEventListener('click', () => {
        currentIndex = i;
        updateSliderPosition();
        updateActiveDot();
    });
}

// Функція для зміни позиції слайдера
function updateSliderPosition() {
    const offset = -currentIndex * 100; // Зміщуємо слайди за допомогою translateX
    slides.style.transform = `translateX(${offset}%)`; // Використовуємо шаблонний рядок для CSS transform
}

// Функція для оновлення активної точки
function updateActiveDot() {
    // Оновлюємо активну точку
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Обробка кнопок попереднього та наступного слайдів
const prevButton = document.querySelector('.prev-arrow');
const nextButton = document.querySelector('.next-arrow');

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Перехід до попереднього слайду
    updateSliderPosition();
    updateActiveDot();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides; // Перехід до наступного слайду
    updateSliderPosition();
    updateActiveDot();
});

// Автоматичний слайдер
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides; // Автоматичне переміщення слайдів
    updateSliderPosition();
    updateActiveDot();
}, 5000); // Перехід через 5 секунд

// Анімації для сторінки
window.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    const leftSection = document.querySelector('.left-section');
    const rightSection = document.querySelector('.right-section');

    content.style.opacity = '1';
    content.style.animation = 'fadeIn 3s forwards';
    leftSection.style.animation = 'slideFromLeft 3s forwards';
    rightSection.style.animation = 'slideFromRight 3s forwards';
});



