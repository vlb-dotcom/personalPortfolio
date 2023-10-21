document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("loaded"); // Add the "loaded" class to the body after the content has loaded
});

window.addEventListener("load", function () {
  const loader = document.querySelector(".initialView");
  loader.addEventListener("animationend", function () {
    document.body.classList.add("show-scrollbar"); // Add class to body to show scrollbar
    loader.style.zIndex = "0"; // Set z-index to 0
  });
});

document.querySelectorAll(".nav-links a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1); // Get the target section's ID
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Scroll to the target section smoothly
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

const navbarToggle = document.getElementById("navbarToggle");
const navbarLinks = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-links a");

navbarToggle.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  navbar.classList.toggle("active");
});

function scrollToTarget(targetElement, duration) {
  const targetPosition =
    targetElement.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const startTime = performance.now();

  function scrollAnimation(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const easeInOutCubic =
      progress < 0.5
        ? 4 * progress ** 3
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    window.scrollTo(
      0,
      startPosition + (targetPosition - startPosition) * easeInOutCubic
    );
    if (elapsedTime < duration) {
      requestAnimationFrame(scrollAnimation);
    }
  }

  requestAnimationFrame(scrollAnimation);
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const duration = 1000; // Set the duration of the scroll animation (in milliseconds)
      scrollToTarget(targetElement, duration);
    }

    navbarLinks.classList.remove("active");
    navbar.classList.remove("active");
  });
});

// IN DEVELOPMENT

const launchInDevModalEl = document.querySelectorAll(".btnInDevModal");
const inDevA = document.querySelector(".button_hireMe");

inDevA.addEventListener("click", (event) => {});

function candlyPopup() {
  const candlyElement = document.querySelector(".aTag_candedly");

  candlyElement.click();
}
