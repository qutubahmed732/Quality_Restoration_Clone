const menuButton = document.querySelector(".js-nav-icon");
const closeMenuButton = document.querySelector(".js-menu-close-button");

function openMenuCard() {
  const smallScreenNavbar = document.querySelector(".js-small-screen-navbar");
  smallScreenNavbar.style.display = smallScreenNavbar.style.display === "flex" ? "none" : "flex";
  document.body.style.overflow = "hidden";
}
function closeMenuCard() {
  const smallScreenNavbar = document.querySelector(".js-small-screen-navbar");
  smallScreenNavbar.style.display = "none";
  document.body.style.overflow = "auto";
}

menuButton.addEventListener("click", openMenuCard);
closeMenuButton.addEventListener("click", closeMenuCard);


document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".arrow--left");
  const nextBtn = document.querySelector(".arrow--right");

  let currentIndex = 1; // second image is active initially

  function updateSlider(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("slide--active", "slide--prev", "slide--next");

      if (i === index) {
        slide.classList.add("slide--active");
      } else if (i === index - 1) {
        slide.classList.add("slide--prev");
      } else if (i === index + 1) {
        slide.classList.add("slide--next");
      }
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider(currentIndex);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentIndex = i;
      updateSlider(currentIndex);
    });
  });

  // Initialize slider
  updateSlider(currentIndex);
});