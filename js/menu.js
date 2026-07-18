// Obtener el elemento donde se mostrará el saldo
let saldoCuenta = document.getElementById("saldoCuenta");

// Buscar el saldo guardado en localStorage
let saldo = localStorage.getItem("saldo");

// Si no existe saldo, crear uno inicial de $70.000
if (saldo === null) {
    saldo = 70000;
    localStorage.setItem("saldo", saldo);
} else {
    // Convertir el saldo recuperado a número
    saldo = Number(saldo);
}

// Mostrar el saldo en formato chileno
saldoCuenta.textContent = "$" + saldo.toLocaleString("es-CL");