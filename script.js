let currentSlide = 0; // Index of the current slide
const slides = document.querySelectorAll(".carousel-inner img");
const totalSlides = slides.length;

document.querySelector(".prev").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Move to previous slide
    updateCarousel();
});

document.querySelector(".next").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % totalSlides; // Move to next slide
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentSlide * 100; // Calculate offset for sliding
    document.querySelector(".carousel-inner").style.transform = `translateX(${offset}%)`; // Move to the correct slide
}
