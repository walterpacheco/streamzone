
import {
    guardarTema,
    obtenerTema
} from "./storage.js";

const themeButton = document.querySelector("#themeToggle");
const body = document.body;
const temaGuardado = obtenerTema();

if (temaGuardado === "light") {

    body.classList.add("light-mode");

    themeButton.textContent = "☀️ Claro";

} else {

    themeButton.textContent = "🌙 Oscuro";
}

if (themeButton) {

    themeButton.addEventListener("click", function () {

        body.classList.toggle("light-mode");
    
        if (body.classList.contains("light-mode")) {
    
            themeButton.textContent = "☀️ Claro";
    
            guardarTema("light");
    
        } else {
    
            themeButton.textContent = "🌙 Oscuro";
    
            guardarTema("dark");
        }
    
    });

}


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

if (heroButton && heroTitle && heroText) {

    heroButton.addEventListener("click", function () {

        currentIndex++;

        if (currentIndex >= heroContent.length) {

            currentIndex = 0;
        }

        heroTitle.textContent =
            heroContent[currentIndex].title;

        heroText.textContent =
            heroContent[currentIndex].text;

    });

}


document.addEventListener("DOMContentLoaded", () => {

    const track = document.getElementById("sliderPeliculas");

    const btnLeft = document.querySelector(".slider-btn-left");

    const btnRight = document.querySelector(".slider-btn-right");

    if (!track || !btnLeft || !btnRight) return;

    const getScrollAmount = () => {

        const card = track.querySelector(".slider-card");

        if (!card) return track.clientWidth;

        const gap =
            parseInt(getComputedStyle(track).gap) || 16;

        const cardWidth =
            card.offsetWidth + gap;

        const cardsVisible =
            Math.max(
                1,
                Math.floor(track.clientWidth / cardWidth)
            );

        return cardWidth * cardsVisible;
    };

    btnLeft.addEventListener("click", () => {

        track.scrollBy({

            left: -getScrollAmount(),

            behavior: "smooth"

        });

    });

    btnRight.addEventListener("click", () => {

        track.scrollBy({

            left: getScrollAmount(),

            behavior: "smooth"

        });

    });

});

const modalDetalle =
    document.getElementById("modalDetalle");

if (modalDetalle) {

    modalDetalle.addEventListener(
        "show.bs.modal",
        function (event) {

            const card = event.relatedTarget;

            const titulo =
                card.getAttribute("data-titulo");

            const año =
                card.getAttribute("data-año");

            const genero =
                card.getAttribute("data-genero");

            const duracion =
                card.getAttribute("data-duracion");

            const img =
                card.getAttribute("data-img");

            const descripcion =
                card.getAttribute("data-descripcion");

            modalDetalle.querySelector(
                "#modalDetalleLabel"
            ).textContent = titulo;

            modalDetalle.querySelector(
                "#modal-año"
            ).textContent = año;

            modalDetalle.querySelector(
                "#modal-genero"
            ).textContent = genero;

            modalDetalle.querySelector(
                "#modal-duracion"
            ).textContent = duracion;

            modalDetalle.querySelector(
                "#modal-descripcion"
            ).textContent = descripcion;

            modalDetalle.querySelector(
                "#modal-img"
            ).src = img;

            modalDetalle.querySelector(
                "#modal-img"
            ).alt = "Portada de " + titulo;

        }

    );

}

const contenedorSeries = document.querySelector("#apiSeries");
const apiEstado = document.querySelector("#apiEstado");

function crearCardSerie(item) {
    const serie = item.show;

    const columna = document.createElement("article");
    columna.className = "col-12 col-md-6 col-lg-4";

    const card = document.createElement("div");
    card.className = "card card-pelicula h-100";

    const imagen = document.createElement("img");
    imagen.className = "card-img-top";
    imagen.alt = "Portada de " + serie.name;
    imagen.loading = "lazy";
    if (serie.image && serie.image.medium) {

        imagen.src = serie.image.medium;
    
    } else {
    
        imagen.src = "https://via.placeholder.com/300x450?text=Sin+Imagen";
    
    }
    imagen.onerror = function () {
        this.onerror = null;
        this.src = "./img/placeholder.webp";
    };

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const titulo = document.createElement("h3");
    titulo.className = "card-title";
    titulo.textContent = serie.name;

    const genero = document.createElement("p");
    genero.className = "card-text";
    genero.textContent = serie.genres.length > 0
        ? "Género: " + serie.genres.join(", ")
        : "Género no disponible";

    const idioma = document.createElement("p");
    idioma.className = "card-text";
    idioma.textContent = "Idioma: " + (serie.language || "No disponible");

    cardBody.appendChild(titulo);
    cardBody.appendChild(genero);
    cardBody.appendChild(idioma);

    card.appendChild(imagen);
    card.appendChild(cardBody);

    columna.appendChild(card);

    return columna;
}

async function renderizarSeries() {
    if (!contenedorSeries || !apiEstado) return;

    apiEstado.textContent = "Cargando series desde TVMaze...";

    const series = await obtenerSeries();

    contenedorSeries.textContent = "";

    if (series.length === 0) {
        apiEstado.textContent = "No se pudieron cargar las series. Intenta nuevamente más tarde.";
        return;
    }

    apiEstado.textContent = "";

    series.forEach(function (serie) {
        const card = crearCardSerie(serie);
        contenedorSeries.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    renderizarSeries();
});