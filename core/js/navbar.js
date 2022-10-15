const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");
navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show__links");
});