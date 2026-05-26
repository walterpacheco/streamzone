const API_URL = "https://api.tvmaze.com/search/shows?q=superhero";

export async function obtenerSeries() {
    try {
        const respuesta = await fetch(API_URL);

        if (!respuesta.ok) {
            throw new Error("Error al obtener datos de TVMaze");
        }

        const datos = await respuesta.json();

        return datos;
    } catch (error) {
        console.error("Error en la API:", error);
        return [];
    }
}