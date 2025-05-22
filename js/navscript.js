const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Select the header
const header = document.getElementById('header');

// Add a scroll event listener
window.addEventListener('scroll', () => {
  // Check the scroll position
  if (window.scrollY > 50) { // Adjust '50' to fit when the header should change
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
});
