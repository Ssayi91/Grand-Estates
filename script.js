document.addEventListener("DOMContentLoaded", () => {
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const closeBtn = document.getElementById("close-btn");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  let currentGallery = []; // Array to store images for navigation
  let currentIndex = 0;

  // Open Lightbox
  portfolioItems.forEach((item) => {
    const primaryImg = item.querySelector("img"); 
    const hoverText = item.querySelector(".hover-text");
    const additionalImgs = item.querySelectorAll(".additional-photos img");

    const openLightbox = () => {
      // Reset gallery with the primary image and additional images
      currentGallery = [primaryImg.src];
      additionalImgs.forEach((img) => currentGallery.push(img.src));

      currentIndex = 0;
      updateLightboxImage();
      lightbox.style.display = "flex"; 
    };

    // Attach event listeners to both the primary image and hover text
    primaryImg.addEventListener("click", openLightbox);
    if (hoverText) {
      hoverText.addEventListener("click", openLightbox);
    }
  });

  // Close Lightbox
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none"; // Hide lightbox
  });

  // Navigate to Previous Image
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    updateLightboxImage();
  });

  // Navigate to Next Image
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % currentGallery.length;
    updateLightboxImage();
  });

  // Update Lightbox Image
  function updateLightboxImage() {
    lightboxImage.src = currentGallery[currentIndex]; // Set the image in the lightbox
  }

  // Close Lightbox when clicking outside the image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none"; // Hide lightbox if clicked outside
    }
  });
});
