// ==========================
// 🎥 Change Video
// ==========================
function changeVideo(videoId) {
  const mainVideo = document.getElementById("mainVideo");
  mainVideo.src = `https://www.youtube.com/embed/${videoId}`;
}


// ==========================
// 📱 Mobile Menu Toggle
// ==========================
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


// ==========================
// ❌ Close Menu
// ==========================
function closeMenu() {
  const menu = document.getElementById("mobileMenu");
  const icon = document.getElementById("menuIcon");

  menu.classList.remove("show");
  icon.classList.remove("fa-times");
  icon.classList.add("fa-bars");
}


// ==========================
// 🔗 Smooth Scroll (GLOBAL)
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

document.getElementById("year").innerText =
  "© " + new Date().getFullYear() + " Parigyan Yogalaya. All rights reserved.";