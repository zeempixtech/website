// JavaScript for Night Mode Toggle
const toggleButton = document.getElementById('theme-toggle');

// Toggle night mode on button click
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Save preference to localStorage
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Apply saved theme on page load
window.addEventListener('load', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
});