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
