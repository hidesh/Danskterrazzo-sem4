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



