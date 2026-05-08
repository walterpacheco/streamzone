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