// Change main video
function changeVideo(videoId) {
  const mainVideo = document.getElementById("mainVideo");
  mainVideo.src = `https://www.youtube.com/embed/${videoId}`;
}

// Mobile menu
const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("mobileMenu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("show");
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