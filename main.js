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

// Simple fade-in animation on scroll
const aboutSection = document.querySelector(".about-section");

window.addEventListener("scroll", () => {
  const sectionTop = aboutSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight - 100) {
    aboutSection.style.opacity = "1";
    aboutSection.style.transform = "translateY(0)";
  }
});

// Initial style
aboutSection.style.opacity = "0";
aboutSection.style.transform = "translateY(50px)";
aboutSection.style.transition = "all 0.8s ease";

// Fade-in cards on scroll
const cards = document.querySelectorAll(".service-card");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight;

  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if (top < trigger - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// Initial state
cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "all 0.6s ease";
});

// Fade-in animation
const whyCards = document.querySelectorAll(".why-card");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight;

  whyCards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if (top < trigger - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// Initial state
whyCards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "all 0.6s ease";
});

// Auto slider (optional)
let index = 0;
const cardss = document.querySelectorAll(".test-card");

function showTestimonials() {
  cardss.forEach((card, i) => {
    card.style.display = (i === index) ? "block" : "none";
  });

  index = (index + 1) % cardss.length;
}

if (window.innerWidth < 600) {
  setInterval(showTestimonials, 3000);
}

// Fade-in effect
const ytSection = document.querySelector(".youtube-section");

window.addEventListener("scroll", () => {
  const top = ytSection.getBoundingClientRect().top;
  const screen = window.innerHeight;

  if (top < screen - 100) {
    ytSection.style.opacity = "1";
    ytSection.style.transform = "translateY(0)";
  }
});

// Initial state
ytSection.style.opacity = "0";
ytSection.style.transform = "translateY(40px)";
ytSection.style.transition = "all 0.8s ease";

// Fade-in CTA section
const cta = document.querySelector(".cta-section");

window.addEventListener("scroll", () => {
  const top = cta.getBoundingClientRect().top;
  const screen = window.innerHeight;

  if (top < screen - 100) {
    cta.style.opacity = "1";
    cta.style.transform = "translateY(0)";
  }
});

// Initial state
cta.style.opacity = "0";
cta.style.transform = "translateY(40px)";
cta.style.transition = "all 0.8s ease";

// Auto update year
document.getElementById("year").innerText =
  "© " + new Date().getFullYear() + " Parigyan Yogalaya. All rights reserved.";