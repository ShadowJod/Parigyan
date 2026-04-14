document.addEventListener("DOMContentLoaded", () => {

  /* ==========================
     📱 Mobile Menu (SAFE)
  ========================== */
  const menu = document.getElementById("mobileMenu");
  const icon = document.getElementById("menuIcon");

  window.toggleMenu = function () {
    if (!menu || !icon) return;

    menu.classList.toggle("show");

    if (menu.classList.contains("show")) {
      icon.classList.replace("fa-bars", "fa-times");
    } else {
      icon.classList.replace("fa-times", "fa-bars");
    }
  };

  window.closeMenu = function () {
    if (!menu || !icon) return;

    menu.classList.remove("show");
    icon.classList.replace("fa-times", "fa-bars");
  };


  /* ==========================
     🎬 Scroll Animation
  ========================== */
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      const screen = window.innerHeight;

      if (top < screen - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // page load pe bhi run


  /* ==========================
     🎞️ Slider
  ========================== */
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  function showSlide() {
    if (slides.length === 0) return;

    slides.forEach(s => s.classList.remove("active"));
    slides[index].classList.add("active");

    index = (index + 1) % slides.length;
  }

  showSlide();
  setInterval(showSlide, 3000);

});

document.getElementById("year").innerText =
  "© " + new Date().getFullYear() + " Parigyan Yogalaya. All rights reserved.";