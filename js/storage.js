export function guardarTema(theme) {

    localStorage.setItem(
        "theme",
        theme
    );

}

export function obtenerTema() {

    return localStorage.getItem(
        "theme"
    );

}