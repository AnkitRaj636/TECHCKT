// Blobs
const blobs = document.querySelectorAll('.blob');
// Hero content
const heroContent = document.querySelector('.hero-content');

document.addEventListener('mousemove', (e) => {
  const { innerWidth, innerHeight } = window;
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Move blobs
  blobs.forEach(blob => {
    const speed = parseFloat(blob.dataset.speed);
    const x = (mouseX - innerWidth / 2) * speed;
    const y = (mouseY - innerHeight / 2) * speed;
    blob.style.transform = `translate(${x}px, ${y}px)`;
  });

  // Move hero content subtly (less than blobs)
  const contentX = (mouseX - innerWidth / 2) * 0.01;
  const contentY = (mouseY - innerHeight / 2) * 0.01;
  heroContent.style.transform = `translate(${contentX}px, ${contentY}px)`;
});



document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  const searchToggle = document.getElementById("searchToggle");
  const navSearch = document.querySelector(".nav-search");
  const dropdownBtns = document.querySelectorAll(".dropdown-btn");

  // ===== Hamburger Menu Toggle =====
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {
      // Show close icon
      menuIcon.classList.add("hidden");
      closeIcon.classList.remove("hidden");
      navToggle.setAttribute("aria-expanded", "true");
    } else {
      // Show hamburger icon
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  // ===== Search Toggle (Mobile) =====
  searchToggle.addEventListener("click", (e) => {
    e.preventDefault();
    navSearch.classList.toggle("active");
  });

  // ===== Dropdown Toggle (Mobile) =====
  dropdownBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const parent = btn.closest(".dropdown");
      parent.classList.toggle("open");
    });
  });
});
const typingText = document.querySelector('.typing-text');
const words = ["Learn Python", "Build Web Apps", "Master Data Science", "Ace Competitive Programming"];
let i = 0;
let j = 0;
let currentWord = '';
let isDeleting = false;

function type() {
  if(i >= words.length) i = 0; // loop over words

  const fullWord = words[i];

  if(!isDeleting) {
    currentWord = fullWord.slice(0, j+1);
    j++;
    typingText.textContent = currentWord;
    if(j === fullWord.length) {
      isDeleting = true;
      setTimeout(type, 1500); // wait before deleting
      return;
    }
  } else {
    currentWord = fullWord.slice(0, j-1);
    j--;
    typingText.textContent = currentWord;
    if(j === 0) {
      isDeleting = false;
      i++;
    }
  }

  setTimeout(type, isDeleting ? 50 : 150);
}

type();
// Counter Animation
const counters = document.querySelectorAll(".counter");
const speed = 200; // smaller = faster

const runCounter = (counter) => {
  const target = +counter.getAttribute("data-target");
  const count = +counter.innerText;
  const increment = Math.ceil(target / speed);

  if (count < target) {
    counter.innerText = count + increment;
    setTimeout(() => runCounter(counter), 30);
  } else {
    counter.innerText = target;
  }
};

// Trigger counters when section is visible
const statsSection = document.querySelector(".stats");
let started = false;

window.addEventListener("scroll", () => {
  const sectionTop = statsSection.offsetTop - window.innerHeight + 100;
  if (!started && window.scrollY > sectionTop) {
    counters.forEach((counter) => runCounter(counter));
    started = true;
  }
});

const backToTop = document.getElementById("backToTop");

// Show button when user scrolls down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

// Smooth scroll to top when clicked
backToTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

