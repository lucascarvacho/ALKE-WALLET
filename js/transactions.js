let saldoDisponible = document.getElementById("saldoDisponible");

let saldo = localStorage.getItem("saldo");

if (saldo === null) {
    saldo = 70000;
} else {
    saldo = Number(saldo);
}

saldoDisponible.textContent =
    "Saldo disponible: $" + saldo.toLocaleString("es-CL");

//mostrar movimientos guardados

let listaMovimientos =
    document.getElementById("listaMovimientos");

let movimientos =
    JSON.parse(localStorage.getItem("movimientos")) || [];

// para que los movimientos aparescan desde el ultimo hecho
movimientos.reverse();
// Recorrer cada movimiento guardado
for (let movimiento of movimientos) {

    // Crear una tarjeta HTML para mostrar cada movimiento
    let tarjetaMovimiento =
        document.createElement("div");
    tarjetaMovimiento.innerHTML = `
        <h3>${movimiento.tipo}</h3>
        <p>Monto: $${movimiento.monto.toLocaleString("es-CL")}</p>
        <p>Fecha: ${movimiento.fecha}</p>
    `;

    listaMovimientos.appendChild(tarjetaMovimiento);

    tarjetaMovimiento.classList.add("movimiento");

    tarjetaMovimiento.innerHTML = `
    <h3>${movimiento.tipo}</h3>
    ${movimiento.destinatario ? `<p>Destinatario: ${movimiento.destinatario}</p>` : ""}
    <p>Monto: $${movimiento.monto.toLocaleString("es-CL")}</p>
    <p>Fecha: ${movimiento.fecha}</p>
`;

}