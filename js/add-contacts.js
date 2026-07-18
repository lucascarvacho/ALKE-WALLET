//agregar contanto en html de contactos//
let formularioContacto = document.getElementById("formularioContacto");

formularioContacto.addEventListener("submit", function (event) {
    event.preventDefault();

    let nombre = document.getElementById("nombreContacto").value;
    let apellido = document.getElementById("apellidoContacto").value;
    let rut = document.getElementById("rutContacto").value;
    let banco = document.getElementById("bancoContacto").value;
    let numeroCuenta = document.getElementById("numeroCuentaContacto").value;
    let alias = document.getElementById("aliasContacto").value;

    let nuevoContacto = {
        nombre: nombre,
        apellido: apellido,
        rut: rut,
        banco: banco,
        numeroCuenta: numeroCuenta,
        alias: alias
    };

    let contactosGuardados = localStorage.getItem("contactos");

    if (contactosGuardados === null) {
        contactosGuardados = [];
    } else {
        contactosGuardados = JSON.parse(contactosGuardados);
    }

    contactosGuardados.push(nuevoContacto);

    localStorage.setItem("contactos", JSON.stringify(contactosGuardados));

    alert("Contacto agregado correctamente");

    window.location.href = "/contacts.html";
});