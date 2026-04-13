// ==========================
// 🚀 ALL-IN-ONE SCRIPT
// ==========================

document.addEventListener("DOMContentLoaded", () => {

  /* ==========================
     📌 1. Smooth Scroll
  ========================== */
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });


  /* ==========================
     📌 2. Scroll Animation
  ========================== */
  const animatedElements = document.querySelectorAll(
    ".about-image, .about-text, .mission, .team-card, .service-card, .why-card, .test-card"
  );

  const animateOnScroll = () => {
    animatedElements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      const screen = window.innerHeight;

      if (top < screen - 100) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  };

  // Initial state
  animatedElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";
  });

  window.addEventListener("scroll", animateOnScroll);


  /* ==========================
     📌 3. Counter Animation
  ========================== */
  const counters = document.querySelectorAll(".counter");

  const runCounter = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let current = 0;

      const update = () => {
        const increment = target / 100;

        if (current < target) {
          current += increment;
          counter.innerText = Math.ceil(current);
          setTimeout(update, 20);
        } else {
          counter.innerText = target;
        }
      };

      update();
    });
  };

  // Run when visible
  let counterStarted = false;
  window.addEventListener("scroll", () => {
    const trigger = window.innerHeight;

    counters.forEach(counter => {
      const top = counter.getBoundingClientRect().top;

      if (top < trigger - 100 && !counterStarted) {
        runCounter();
        counterStarted = true;
      }
    });
  });


  /* ==========================
     📌 4. CTA Button Click Effect
  ========================== */
  const btn = document.querySelector(".cta-btn");

  if (btn) {
    btn.addEventListener("click", () => {
      btn.style.transform = "scale(0.95)";
      setTimeout(() => {
        btn.style.transform = "scale(1)";
      }, 150);
    });
  }


  /* ==========================
     📌 5. Mobile Menu Toggle
  ========================== */
  const menuBtn = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("show");
    });
  }

});

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