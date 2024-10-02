const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const dotsNav = document.querySelector('.carousel-indicators');
const dots = Array.from(dotsNav.children);

let currentIndex = 0;

const updateCarousel = (index) => {
    const amountToMove = slides[index].style.width;
    track.style.transform = `translateX(-${index * 100}%)`;
    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
};

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel(currentIndex);
});

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel(currentIndex);
});

dotsNav.addEventListener('click', (e) => {
    const targetDot = e.target.closest('span');
    
    if (!targetDot) return;
    
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    
    currentIndex = targetIndex;
    updateCarousel(currentIndex);
});
