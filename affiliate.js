// Affiliate page script.
// The shared script.js is NOT loaded here: it expects index-only elements
// (.section-4-gridcontainer1) and would cause console errors on this page.

// ---------- Header colour change on scroll (same behaviour as index) ----------
const header = document.querySelector(".header");
const headerLinks = document.querySelectorAll("header a");
const aiBtn = document.querySelector(".Askai-btn");
const profileIcon = document.querySelector(".icon-user");
const menuIcon = document.querySelector(".icon-menu");
const logoBlack = document.querySelector("#logoBlack");
const logoWhite = document.querySelector("#logoWhite");

function updateHeader() {
  const scrolled = window.scrollY >= 10;
  const color = scrolled ? "black" : "white";
  header.style.backgroundColor = scrolled ? "white" : "#673de6";
  headerLinks.forEach((link) => (link.style.color = color));
  aiBtn.style.borderColor = color;
  profileIcon.style.fill = color;
  menuIcon.style.fill = color;
  logoWhite.classList.toggle("hidden", scrolled);
  logoBlack.classList.toggle("hidden", !scrolled);
}
window.addEventListener("scroll", updateHeader);

// ---------- Testimonial slider ----------
const slides = document.querySelectorAll(".aff-slide");
const dotsBox = document.getElementById("dots");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let current = 0;

function showSlide(index) {
  current = (index + slides.length) % slides.length; // wrap around
  slides.forEach((slide, i) => (slide.hidden = i !== current));
  dotsBox.querySelectorAll(".aff-dot").forEach((dot, i) => {
    dot.setAttribute("aria-current", String(i === current));
  });
}

slides.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.className = "aff-dot";
  dot.type = "button";
  dot.setAttribute("aria-label", `Show testimonial ${i + 1} of ${slides.length}`);
  dot.addEventListener("click", () => showSlide(i));
  dotsBox.appendChild(dot);
});

prevBtn.addEventListener("click", () => showSlide(current - 1));
nextBtn.addEventListener("click", () => showSlide(current + 1));
showSlide(0);
