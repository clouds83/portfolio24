const slider = document.querySelector('.jobs-slider');

let isDown = false;
let startX;
let scrollLeft;
let clickedLink = null;
const scrollingSpeed = 1;

slider.addEventListener('mousedown', (e) => {
  // Check if the clicked element is a link
  if (e.target.tagName.toLowerCase() === 'a') {
    clickedLink = e.target; // Store the clicked link
  }

  isDown = true;

  // Store initial position and scroll values
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;

  // Change cursor style to closed hand
  slider.style.cursor = 'move'; // Modern browsers
});

document.addEventListener('mouseup', () => {
  isDown = false;

  // Remove dragging class from clicked link if present
  if (clickedLink) {
    clickedLink.classList.remove('isDragging');
    clickedLink = null;
  }

  // Reset cursor style to default
  slider.style.cursor = 'auto'; // or whatever the default cursor style is
});

document.addEventListener('mousemove', (e) => {
  if (!isDown) return;

  // Prevent default behavior (e.g., text selection) while dragging
  e.preventDefault();

  // Calculate new scroll position based on mouse movement
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * scrollingSpeed;
  slider.scrollLeft = scrollLeft - walk;

  // Add dragging class to clicked link if present to avoid navigating
  if (clickedLink) {
    clickedLink.classList.add('isDragging');
  }
});
