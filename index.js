document.addEventListener('DOMContentLoaded', function() {
  const enterButton = document.getElementById('enter-button');
  const entrance = document.getElementById('entrance');
  const portfolio = document.getElementById('portfolio');

  if (enterButton) {
    enterButton.addEventListener('click', function() {
      entrance.style.display = 'none'; // Hide entrance
      portfolio.style.display = 'block'; // Show portfolio
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    });
  }
});
