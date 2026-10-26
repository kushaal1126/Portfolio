/* =========================================
   CYBERPORTFOLIO — INTERACTIVE FEATURES
   ========================================= */

// 1. Mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  // Close the menu after selecting a navigation link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
}

// 2. Automatically update the footer year
const yearElement = document.getElementById("currentYear");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// 3. Reveal sections smoothly as they enter the screen
const revealElements = document.querySelectorAll(
  ".section, .project-card, .learning-card"
);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    }
  );

  revealElements.forEach((element) => {
    element.classList.add("reveal");
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}

// 4. Update the navbar appearance when scrolling
const navbar = document.querySelector(".navbar");

function updateNavbar() {
  if (navbar) {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
  }
}

window.addEventListener("scroll", updateNavbar, { passive: true });
updateNavbar();

// 5. Display a small message when the resume button is clicked
const resumeButtons = document.querySelectorAll(
  'a[href="#resume"]'
);

resumeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const resumeSection = document.getElementById("resume");

    if (resumeSection) {
      resumeSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

console.log("CyberPortfolio initialized successfully.");