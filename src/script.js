document.addEventListener('DOMContentLoaded', function () {
    const heart = document.querySelector('.heart');
    heart.addEventListener('click', function () {
      this.classList.toggle('active');
    });
  });