// onclick method for navbar
// Add an onclick event to the dropdown button
const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdownMenu');
const backButtonDDMenu = document.getElementById('backButtonForDDMenu');
const navbar = document.getElementById('navbar');

function toggledropdownMenu() {
  dropdownMenu.classList.toggle('hidden');
  dropdownButton.classList.toggle('rotate-180');
  backButtonDDMenu.classList.toggle('hidden');
  dropdownMenu.classList.toggle('animate__slideInRight');
  dropdownMenu.classList.toggle('animate__animated');
}

function toggleResponsiveMenu() {
  navbar.classList.toggle('max-sm:hidden');
  navbar.classList.toggle('absolute');
  navbar.classList.toggle('inset-x-0');
  navbar.classList.toggle('z-10');
  

    navbar.classList.add('animate__slideInRight');
}

// onclick method for FAQ
function toggleAnswer(questionNumber) {
  const answer = document.getElementById(`answer${questionNumber}`);
  const arrow = document.getElementById(`arrow${questionNumber}`);

  answer.classList.toggle('hidden');
  arrow.classList.toggle('transform');
}


  const swiper = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 4,
    spaceBetween: 4,
    navigation: {
      nextEl: '.swiper-button-next', // Next button selector
      prevEl: '.swiper-button-prev', // Previous button selector
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 768px
      768: {
        slidesPerView: 4,
        spaceBetween: 4
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 4
      },
      // when window width is < 640px
      320: {
        slidesPerView: 1,
        spaceBetween: 4
      }
    }
  });

  const swiper1 = new Swiper('.swiper-container', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '#next-terrazzo', // Next button selector
      prevEl: '#prev-terrazzo', // Previous button selector
    },
    // Responsive breakpoints
    breakpoints: {

      // when window width is < 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 3,
      },
    },
  });
  




