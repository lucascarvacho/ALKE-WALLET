let listaContactos = document.getElementById("listaContactos");

let contactosGuardados = localStorage.getItem("contactos");

if (contactosGuardados === null) {
    contactosGuardados = [];
} else {
    contactosGuardados = JSON.parse(contactosGuardados);
}

contactosGuardados.forEach(function (contacto, index) {
    let nuevoContacto = document.createElement("li");
    nuevoContacto.classList.add("contacto");

    nuevoContacto.innerHTML = `
        <h3>${contacto.nombre} ${contacto.apellido}</h3>
        <p>Rut: ${contacto.rut}</p>
        <p>Banco: ${contacto.banco}</p>
        <p>Alias: ${contacto.alias}</p>
        <p>Número de cuenta: ${contacto.numeroCuenta}</p>

        <div class="acciones-contacto">
            <button class="btn-transferir">Transferir</button>
            <button class="btn-eliminar">Eliminar</button>
        </div>
    `;

    listaContactos.appendChild(nuevoContacto);

    let botonEliminar = nuevoContacto.querySelector(".btn-eliminar");

    botonEliminar.addEventListener("click", function () {
        contactosGuardados.splice(index, 1);
        localStorage.setItem("contactos", JSON.stringify(contactosGuardados));
        nuevoContacto.remove();
    });

    let botonTransferir = nuevoContacto.querySelector(".btn-transferir");

    botonTransferir.addEventListener("click", function () {

        localStorage.setItem(
            "contactoSeleccionado",
            JSON.stringify(contacto)
        );

        window.location.href = "/sendmoney.html";

    });
});

