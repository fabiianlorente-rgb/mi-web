const photos = document.querySelectorAll(".photo");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.25 });

photos.forEach(photo => observer.observe(photo));

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

photos.forEach(photo => {
  photo.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = photo.src;
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
