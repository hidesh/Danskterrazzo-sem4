const carouselContainer = document.querySelector('.carousel-container');
const carouselPrevBtn = document.querySelector('.carousel-prev');
const carouselNextBtn = document.querySelector('.carousel-next');
const carouselDots = document.querySelector('.carousel-dots');
const carouselItems = document.querySelectorAll('.carousel-item');

let currentIndex = 0;
let itemsToShow = 1;

function updateCarousel() {
  const carouselWidth = carouselContainer.clientWidth;
  const itemWidth = carouselWidth / itemsToShow;
  carouselContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function updateItemsToShow() {
  if (window.innerWidth >= 1024) {
    itemsToShow = 4;
  } else if (window.innerWidth >= 768) {
    itemsToShow = 3;
  } else if (window.innerWidth >= 640) {
    itemsToShow = 2;
  } else {
    itemsToShow = 1;
  }
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + carouselItems
.length) % carouselItems.length;
updateCarousel();
updateDots();
}

function nextSlide() {
currentIndex = (currentIndex + 1) % carouselItems.length;
updateCarousel();
updateDots();
}

function dotClick(index) {
currentIndex = index;
updateCarousel();
updateDots();
}

function updateDots() {
const dots = Array.from(carouselDots.children);
dots.forEach((dot, index) => {
dot.classList.toggle('active', index === currentIndex);
});
}

carouselPrevBtn.addEventListener('click', prevSlide);
carouselNextBtn.addEventListener('click', nextSlide);

carouselItems.forEach((item, index) => {
const dot = document.createElement('div');
dot.classList.add('carousel-dot');
dot.addEventListener('click', () => dotClick(index));
carouselDots.appendChild(dot);
});

window.addEventListener('resize', () => {
updateItemsToShow();
updateCarousel();
});

updateItemsToShow();
updateCarousel();