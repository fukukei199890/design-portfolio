
  document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.horizontal-wrapper');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (!wrapper) {
      console.error('wrapper not found');
      return;
    }

    prevBtn.addEventListener('click', () => {
      wrapper.scrollBy({
        left: -window.innerWidth,
        behavior: 'smooth'
      });
    });

    nextBtn.addEventListener('click', () => {
      wrapper.scrollBy({
        left: window.innerWidth,
        behavior: 'smooth'
      });
    });
  });

