/*selector de campos de textos*/

$("input").focus(function () {
    $(this).css({
        "outline": "none",
        "border": "2px solid #4da6ff",
        "box-shadow": "0 0 12px rgba(77, 166, 255, 0.8)"
    });
});

$("input").blur(function () {
    $(this).css({
        "border": "1px solid #ccc",
        "box-shadow": "none"
    });
});

/*acceso con rut y clave*/

const button = document.getElementById("botonIniciarSesion");
button.addEventListener("click", function () {
    const rut = document.getElementById("exampleInpRut").value;
    const password = document.getElementById("exampleInputPassword1").value;

    if (rut === "18.799.599-9" && password === "1234") {
        alert("Inicio de sesión exitoso");
        window.location.href = "menu.html";
    }
    else {
        alert("rut o contraseña incorrectos");
    }

});