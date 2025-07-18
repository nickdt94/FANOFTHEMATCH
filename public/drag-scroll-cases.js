// Drag-to-scroll for .cases-grid (horizontal only) with event delegation
// Works even if you start dragging on a child element

document.addEventListener('DOMContentLoaded', function() {
  const grid = document.querySelector('.cases-grid');
  if (!grid) return;

  let isDown = false;
  let startX;
  let scrollLeft;
  let isDragging = false;

  // Helper: prevent link click during drag
  function preventClick(e) {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  // Listen for mousedown/touchstart on grid and all children
  function startDrag(e) {
    isDown = true;
    isDragging = false;
    grid.classList.add('grabbing');
    startX = (e.touches ? e.touches[0].pageX : e.pageX) - grid.offsetLeft;
    scrollLeft = grid.scrollLeft;
  }
  function endDrag() {
    isDown = false;
    grid.classList.remove('grabbing');
    setTimeout(() => { isDragging = false; }, 50);
  }
  function moveDrag(e) {
    if (!isDown) return;
    isDragging = true;
    const x = (e.touches ? e.touches[0].pageX : e.pageX) - grid.offsetLeft;
    const walk = (x - startX);
    grid.scrollLeft = scrollLeft - walk;
  }

  // Mouse events (event delegation)
  grid.addEventListener('mousedown', startDrag, true);
  grid.addEventListener('mouseup', endDrag, true);
  grid.addEventListener('mouseleave', endDrag, true);
  grid.addEventListener('mousemove', function(e) {
    if (!isDown) return;
    e.preventDefault();
    moveDrag(e);
  }, true);

  // Touch events (event delegation)
  grid.addEventListener('touchstart', startDrag, true);
  grid.addEventListener('touchend', endDrag, true);
  grid.addEventListener('touchmove', function(e) {
    if (!isDown) return;
    moveDrag(e);
  }, true);

  // Prevent link clicks during drag
  grid.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', preventClick, true);
    link.addEventListener('touchend', preventClick, true);
  });
});
