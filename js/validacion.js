const formulario = document.querySelector("#formulario-suscripcion");
const planes = document.querySelectorAll(".plan-item");
const inputNombre = document.querySelector("#sub-nombre");
const inputApellido = document.querySelector("#sub-apellido")
const inputEmail = document.querySelector("#sub-correo")
const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const inputClave = document.querySelector("#sub-clave")
const inputTarjeta = document.querySelector("#sub-tarjeta")
const inputTitular = document.querySelector("#sub-titular")
const inputVencimiento = document.querySelector("#sub-vencimiento")
const inputCVV = document.querySelector("#sub-cvv")

//Aqui se valida que haya un plan seleccionado//
if (formulario && planes.length > 0) {

    formulario.addEventListener("submit", function (e) {

        let planSeleccionado = false;

        planes.forEach(function (plan) {

            if (plan.classList.contains("activo")) {

                planSeleccionado = true;
            }

        });

        if (!planSeleccionado) {

            e.preventDefault();
            console.log("Debes seleccionar un plan");

        }

    });
}

//Selecciona el plan al que se le hace clic//
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

//aqui se validara el nombre//
if (formulario && inputNombre) {

    formulario.addEventListener("submit", function (e) {

        if (inputNombre.value.trim() === "") {

            e.preventDefault();
            inputNombre.classList.add("is-invalid");

        } else {

            inputNombre.classList.remove("is-invalid");
        }

    });

}

//Aqui se validara el appeldio//
if (formulario && inputApellido) {

    formulario.addEventListener("submit", function (e) {

        if (inputApellido.value.trim() === "") {

            e.preventDefault();
            inputApellido.classList.add("is-invalid");

        } else {

            inputApellido.classList.remove("is-invalid");
        }

    });

}

//Aqui se validara el email//
if (formulario && inputEmail) {

    formulario.addEventListener("submit", function (e) {

        if (inputEmail.value.trim() === "" || !patronEmail.test(inputEmail.value.trim())) {

            e.preventDefault();
            inputEmail.classList.add("is-invalid");

        } else {

            inputEmail.classList.remove("is-invalid");
        }

    });

}

//Aqui se valida la contraseña//
if (formulario && inputClave) {

    formulario.addEventListener("submit", function (e) {

        if (inputClave.value.trim() === "") {

            e.preventDefault();
            inputClave.classList.add("is-invalid");

        } else {

            inputClave.classList.remove("is-invalid");
        }

    });

}

//Aqui se valida el numeor de tarjeta//
if (formulario && inputTarjeta) {

    formulario.addEventListener("submit", function (e) {

        if (inputTarjeta.value.trim() === "") {

            e.preventDefault();
            inputTarjeta.classList.add("is-invalid");

        } else {

            inputTarjeta.classList.remove("is-invalid");
        }

    });

}

//Aqui se validara el nombre del titular de la tarjeta//
if (formulario && inputTitular) {

    formulario.addEventListener("submit", function (e) {

        if (inputTitular.value.trim() === "") {

            e.preventDefault();
            inputTitular.classList.add("is-invalid");

        } else {

            inputTitular.classList.remove("is-invalid");
        }

    });

}

//Aqui se validara el mes y año de vencimiento de la tarjeta//
if (formulario && inputVencimiento) {

    formulario.addEventListener("submit", function (e) {

        if (inputVencimiento.value.trim() === "") {

            e.preventDefault();
            inputVencimiento.classList.add("is-invalid");

        } else {

            inputVencimiento.classList.remove("is-invalid");
        }

    });

}

//Aqui se validara el CVV de la tarjeta//
if (formulario && inputCVV) {

    formulario.addEventListener("submit", function (e) {

        if (inputCVV.value.trim() === "") {

            e.preventDefault();
            inputCVV.classList.add("is-invalid");

        } else {

            inputCVV.classList.remove("is-invalid");
        }

    });

}