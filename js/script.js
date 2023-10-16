window.addEventListener("load", function () {
  const loader = document.querySelector(".initialView");
  loader.addEventListener("animationend", function () {
    document.body.classList.add("show-scrollbar"); // Add class to body to show scrollbar
  });
});
