const carouselWrapper = document.querySelector('.carousel-wrapper');
const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
const carouselPrevBtn = document.querySelector('.carousel-prev');
const carouselNextBtn = document.querySelector('.carousel-next');
const carouselDots = document.querySelector('.carousel-dots');

let currentIndex = 0;

function updateCarousel() {
  const itemWidth = carouselWrapper.clientWidth;
  carouselWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  updateCarousel();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel();
}

function dotClick(index) {
  currentIndex = index;
  updateCarousel();
}

carouselPrevBtn.addEventListener('click', prevSlide);
carouselNextBtn.addEventListener('click', nextSlide);

carouselItems.forEach((item, index) => {
  const dot = document.createElement('div');
  dot.classList.add('carousel-dotty', 'bg-gray-800');
  if (index === currentIndex) {
    dot.classList.add('active');
  }
  dot.addEventListener('click', () => dotClick(index));
  carouselDots.appendChild(dot);
});

window.addEventListener('resize', updateCarousel);

updateCarousel();
