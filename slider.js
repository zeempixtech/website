// Select elements
const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

// Update Slide and Dots
function updateSlider(index) {
  sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot) => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

// Navigation Buttons
document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider(currentIndex);
});

document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider(currentIndex);
});

// Dots Click Event
dots.forEach((dot) => {
  dot.addEventListener('click', (e) => {
    currentIndex = parseInt(e.target.dataset.index);
    updateSlider(currentIndex);
  });
});

// Auto Slide
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider(currentIndex);
}, 5000); // Adjust time (in ms) for auto-sliding

// Initialize
updateSlider(currentIndex);
