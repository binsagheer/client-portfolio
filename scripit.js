function isInViewport(element) {
    const bounding = element.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to reveal elements in the viewport
  function revealImages() {
    const images = document.querySelectorAll(".gallery img");
    images.forEach((img) => {
      if (isInViewport(img)) {
        img.style.opacity = "1";
        img.style.transform = "translateY(0)";
      }
    });
  }

  // Event listener for scroll
  window.addEventListener("scroll", revealImages);

  // Call the function initially in case images are already in view
  document.addEventListener("DOMContentLoaded", revealImages);