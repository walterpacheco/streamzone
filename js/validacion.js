const formulario = document.querySelector("#formulario-suscripcion");
const planes = document.querySelectorAll(".plan-item");

const inputNombre = document.querySelector("#sub-nombre");
const inputApellido = document.querySelector("#sub-apellido");
const inputEmail = document.querySelector("#sub-correo");
const inputClave = document.querySelector("#sub-clave");
const inputTarjeta = document.querySelector("#sub-tarjeta");
const inputTitular = document.querySelector("#sub-titular");
const inputVencimiento = document.querySelector("#sub-vencimiento");
const inputCVV = document.querySelector("#sub-cvv");

const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function marcarError(input) {
    if (input) {
        input.classList.add("is-invalid");
    }
}

function quitarError(input) {
    if (input) {
        input.classList.remove("is-invalid");
    }
}

function validarTexto(input) {
    if (!input || input.value.trim() === "") {
        marcarError(input);
        return false;
    }

    quitarError(input);
    return true;
}

function validarEmail() {
    if (
        !inputEmail ||
        inputEmail.value.trim() === "" ||
        !patronEmail.test(inputEmail.value.trim())
    ) {
        marcarError(inputEmail);
        return false;
    }

    quitarError(inputEmail);
    return true;
}

function validarPlanSeleccionado() {
    let planSeleccionado = false;

    planes.forEach(function (plan) {
        if (plan.classList.contains("activo")) {
            planSeleccionado = true;
        }
    });

    if (!planSeleccionado) {
        console.log("Debes seleccionar un plan");
    }

    return planSeleccionado;
}

function seleccionarPlan(plan) {
    planes.forEach(function (item) {
        item.classList.remove("activo");
        item.setAttribute("aria-checked", "false");
    });

    const planElegido = document.querySelector("#plan-" + plan);

    if (planElegido) {
        planElegido.classList.add("activo");
        planElegido.setAttribute("aria-checked", "true");
    }
}

if (formulario) {
    formulario.addEventListener("submit", function (e) {
        const formularioValido =
            validarPlanSeleccionado() &&
            validarTexto(inputNombre) &&
            validarTexto(inputApellido) &&
            validarEmail() &&
            validarTexto(inputClave) &&
            validarTexto(inputTarjeta) &&
            validarTexto(inputTitular) &&
            validarTexto(inputVencimiento) &&
            validarTexto(inputCVV);

        if (!formularioValido) {
            e.preventDefault();
        }
    });
}