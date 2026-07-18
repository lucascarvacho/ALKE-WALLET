

let saldoDisponible = document.getElementById("saldoDisponible");

let saldo = localStorage.getItem("saldo");

if (saldo === null) {
    saldo = 70000;
} else {
    saldo = Number(saldo);
}

saldoDisponible.textContent =
    "Saldo disponible: $" + saldo.toLocaleString("es-CL");


let formularioDepositar =
    document.getElementById("formularioDepositar");
let formularioRetirar =
    document.getElementById("formularioRetirar");

formularioDepositar.addEventListener("submit", function (event) {

    event.preventDefault();
    let montoDepositar =
        Number(document.getElementById("depositarFondos").value);

    if (montoDepositar <= 0) {
        alert("Ingresa un monto válido");
        return;
    }

    saldo = saldo + montoDepositar;

    localStorage.setItem("saldo", saldo);

    let movimientos =
        JSON.parse(localStorage.getItem("movimientos")) || [];

    movimientos.push({
        tipo: "Depósito",
        monto: montoDepositar,
        fecha: new Date().toLocaleString("es-CL")
    });

    localStorage.setItem("movimientos", JSON.stringify(movimientos));

    saldoDisponible.textContent =
        "Saldo disponible: $" + saldo.toLocaleString("es-CL");
    alert("Depósito realizado correctamente");
    document.getElementById("depositarFondos").value = "";


});


//para retiro

formularioRetirar.addEventListener("submit", function (event) {

    event.preventDefault();

    let montoRetirar =
        Number(document.getElementById("retirarFondos").value);

    if (montoRetirar <= 0) {
        alert("Ingresa un monto válido");
        return;
    }

    if (montoRetirar > saldo) {
        alert("No tienes saldo suficiente");
        return;
    }

    saldo = saldo - montoRetirar;

    localStorage.setItem("saldo", saldo);

    let movimientos =
        JSON.parse(localStorage.getItem("movimientos")) || [];

    movimientos.push({
        tipo: "Retiro",
        monto: montoRetirar,
        fecha: new Date().toLocaleString("es-CL")
    });

    localStorage.setItem("movimientos", JSON.stringify(movimientos));

    saldoDisponible.textContent =
        "Saldo disponible: $" + saldo.toLocaleString("es-CL");

    alert("Retiro realizado correctamente");

    document.getElementById("retirarFondos").value = "";

});