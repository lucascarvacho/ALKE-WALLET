let contactoSeleccionado =
    localStorage.getItem("contactoSeleccionado");

contactoSeleccionado =
    JSON.parse(contactoSeleccionado);

let datosContactoTransferencia = document.getElementById("datosContactoTransferencia");

datosContactoTransferencia.innerHTML = `
    <h3>${contactoSeleccionado.nombre} ${contactoSeleccionado.apellido}</h3>
    <p>Rut: ${contactoSeleccionado.rut}</p>
    <p>Banco: ${contactoSeleccionado.banco}</p>
    <p>Alias: ${contactoSeleccionado.alias}</p>
    <p>Número de cuenta: ${contactoSeleccionado.numeroCuenta}</p>
`;

let saldoDisponible = document.getElementById("saldoDisponible");

let saldo = localStorage.getItem("saldo");

if (saldo === null) {
    saldo = 70000;
} else {
    saldo = Number(saldo);
}

saldoDisponible.textContent =
    "Saldo disponible: $" + saldo.toLocaleString("es-CL");


// Lógica de transferencia de dinero y actualización de saldo
let formularioTransferencia = document.getElementById("formularioTransferencia");

formularioTransferencia.addEventListener("submit", function (event) {
    event.preventDefault();

    let montoTransferir = Number(document.getElementById("montoTransferir").value);

    if (montoTransferir <= 0) {
        alert("Ingresa un monto válido");
        return;
    }

    if (montoTransferir > saldo) {
        alert("No tienes saldo suficiente");
        return;
    }

    saldo = saldo - montoTransferir;
    localStorage.setItem("saldo", saldo);

    let movimientos =
        JSON.parse(localStorage.getItem("movimientos")) || [];



    movimientos.push({
        tipo: "Transferencia",
        monto: montoTransferir,
        destinatario: contactoSeleccionado.nombre + " " + contactoSeleccionado.apellido,
        fecha: new Date().toLocaleString("es-CL")
    });

    localStorage.setItem("movimientos", JSON.stringify(movimientos));

    alert("Transferencia realizada correctamente");

    window.location.href = "/menu.html";
});