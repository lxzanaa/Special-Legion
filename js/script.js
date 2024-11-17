// Select the menu button (checkbox), navbar menu, and overlay elements
const menuButton = document.querySelector('.header .menu-btn')
const navbarMenu = document.querySelector('.navbar__menu')
const menuOverlay = document.querySelector('.header__menu-overlay')

// Function to toggle body overflow and overlay visibility
function toggleMenuOverlay () {
  if (menuButton.checked) {
    // If the menu is open, show the overlay by adding 'active' class
    menuOverlay.classList.add('active')
    // Add overflow-hidden and h-screen to body to prevent scrolling
    document.body.classList.add('overflow-hidden', 'h-screen')
  } else {
    // If the menu is closed, hide the overlay by removing 'active' class
    menuOverlay.classList.remove('active')
    // Remove overflow-hidden and h-screen from body to allow scrolling
    document.body.classList.remove('overflow-hidden', 'h-screen')
  }
}

// Event listener to toggle the menu state and overlay on change
menuButton.addEventListener('change', toggleMenuOverlay)

// Event listener to close the menu when clicking on the overlay
menuOverlay.addEventListener('click', () => {
  // Uncheck the menu button (close the menu)
  menuButton.checked = false
  toggleMenuOverlay() // Reapply the changes to the body and overlay
})
// Get the necessary elements
const dropMenuButton = document.querySelector('.drop_menu')
const menu = document.querySelector('.header__item-dropMenu')

// Toggle the dropdown menu when the button is clicked
dropMenuButton.addEventListener('click', function (event) {
  event.stopPropagation() // Prevent the click from propagating to the document
  dropMenuButton.classList.toggle('open')
  menu.classList.toggle('open')
})

// Close the dropdown if clicking outside of it
document.addEventListener('click', function (event) {
  if (!menu.contains(event.target) && !dropMenuButton.contains(event.target)) {
    dropMenuButton.classList.remove('open')
    menu.classList.remove('open')
  }
})

const nav_faq = document.querySelector('.nav_faq');
const navbar__faq_menu = document.querySelector('.navbar__faq-menu');
const rotateButton = document.querySelector('.navbar__menu-catalog-rotate-btn'); // Select the button for rotation

// Toggle the dropdown menu and SVG rotation when the button is clicked
nav_faq.addEventListener('click', function (event) {
  event.stopPropagation(); // Prevent click event from propagating to document
  navbar__faq_menu.classList.toggle('active');
  
  // Toggle rotation class for the button
  rotateButton.classList.toggle('rotate-180');
});

// Close the dropdown if clicking outside the navbar__faq_menu
document.addEventListener('click', function (event) {
  if (!navbar__faq_menu.contains(event.target) && !nav_faq.contains(event.target)) {
    navbar__faq_menu.classList.remove('active');
    
    // Remove rotation class for the button if the menu is closed
    rotateButton.classList.remove('rotate-180');
  }
});

