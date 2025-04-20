window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.icons i').forEach((icon, index) => {
      setTimeout(() => {
        icon.style.opacity = 1;
      }, 200 * index);
    });
  });
  