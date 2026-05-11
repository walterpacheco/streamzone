const themeButton = document.querySelector("#themeToggle");

const body = document.body;

themeButton.addEventListener("click", function () {

    body.classList.toggle("light-mode");

});
const heroButton = document.querySelector("#changeHero");

const heroTitle = document.querySelector("#heroTitle");

const heroText = document.querySelector("#heroText");

const heroContent = [
    {
        title: "Tus películas y series favoritas en un solo lugar",
        text: "Disfruta una experiencia de streaming moderna con películas, series y contenido destacado para todos."
    },

    {
        title: "Explora nuevos mundos y aventuras",
        text: "Descubre historias increíbles y contenido exclusivo en StreamZone."
    },

    {
        title: "Entretenimiento ilimitado para toda la familia",
        text: "Accede a películas, series y contenido recomendado desde cualquier dispositivo."
    }
];

let currentIndex = 0;

heroButton.addEventListener("click", function () {

    currentIndex++;

    if(currentIndex >= heroContent.length){
        currentIndex = 0;
    }

    heroTitle.textContent =
        heroContent[currentIndex].title;

    heroText.textContent =
        heroContent[currentIndex].text;

});
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
