  document.addEventListener('DOMContentLoaded', () => {
      const track = document.getElementById('sliderPeliculas');
      const btnLeft = document.querySelector('.slider-btn-left');
      const btnRight = document.querySelector('.slider-btn-right');

      if (!track || !btnLeft || !btnRight) return;

      const getScrollAmount = () => {
          const card = track.querySelector('.slider-card');
          if (!card) return track.clientWidth;
          const gap = parseInt(getComputedStyle(track).gap) || 16;
          const cardwitdth = card.offsetWidth + gap;
          const cardVisible = Math.max(1, Math.floor(track.clientWidth / cardwitdth));
          return cardwitdth * cardVisible;
      };

      btnLeft.addEventListener('click', () => {
          track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
      });

      btnRight.addEventListener('click', () => {
          track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
      });
  });