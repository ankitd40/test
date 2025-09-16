// Animation on scroll
const elements = document.querySelectorAll(".section-title, .skill-card, .project-card, .timeline li");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));


// Navbar toggle for mobile
const navLinks = document.querySelector(".nav-links");
const menuBtn = document.createElement("div");
menuBtn.classList.add("menu-btn");
menuBtn.innerHTML = "☰"; 
document.querySelector("nav").prepend(menuBtn);

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const sectionTop = sec.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = sec.getAttribute("id");
    }
  });

  navItems.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) {
      a.classList.add("active");
    }
  });
});

// Scroll to Top
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.classList.add("scroll-top");
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 500 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Typing effect
const text = "Aspiring Full-Stack Developer";
let i = 0;
function typing() {
  if (i < text.length) {
    document.querySelector(".hero-text h2").textContent += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
typing();


