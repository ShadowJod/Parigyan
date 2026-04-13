// Mobile menu
const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("mobileMenu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// Scroll animation
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (top < screen - 100) {
      el.classList.add("active");
    }
  });
});

// Slider
let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {
  slides.forEach(s => s.classList.remove("active"));
  slides[index].classList.add("active");

  index = (index + 1) % slides.length;
}

setInterval(showSlide, 3000);

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const icon = document.getElementById("menuIcon");

  menu.classList.toggle("show");

  if (menu.classList.contains("show")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
}

function closeMenu() {
  const menu = document.getElementById("mobileMenu");
  const icon = document.getElementById("menuIcon");

  menu.classList.remove("show");
  icon.classList.remove("fa-times");
  icon.classList.add("fa-bars");

  // Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
}