
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const topBtn = document.getElementById("topBtn");

// Mobile navigation menu
menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");

  const isOpen = navMenu.classList.contains("open");
  menuBtn.textContent = isOpen ? "✕" : "☰";
  menuBtn.setAttribute("aria-expanded", isOpen);
});

// Close menu after selecting a section
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuBtn.textContent = "☰";
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Display current year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Back-to-top button
window.addEventListener("scroll", () => {
  topBtn.classList.toggle("show", window.scrollY > 400);
});

// Scroll to top
topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Highlight the current navigation link
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll("#navMenu a");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === "#" + entry.target.id
        );
      });
    }
  });
}, {
  rootMargin: "-30% 0px -60% 0px"
});

sections.forEach(section => observer.observe(section));

const photos = [
  "image/profile.png",
  "image/profile1.png",
];

let currentPhoto = 0;

const slideshow = document.getElementById("profileSlideshow");

if (slideshow) {
  setInterval(() => {
    currentPhoto = (currentPhoto + 1) % photos.length;

    slideshow.style.opacity = "0";

    setTimeout(() => {
      slideshow.src = photos[currentPhoto];
      slideshow.style.opacity = "1";
    }, 300);
  }, 3000); // Change photo every 3 seconds
}
