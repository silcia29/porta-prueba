//Haz tú validación en javascript acá

function Enviar_mensaje() {
    // Obtener los valores de los campos
    var nombre = document.getElementsByName("nombre")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var asunto = document.getElementsByName("asunto")[0].value;
    var mensaje = document.getElementsByName("mensaje")[0].value;

    // Verificar si el campo de nombre contiene números
    if (/\d/.test(nombre)) {
        // Mostrar alerta de error en nombre
        alert("El campo Nombre no puede contener números.");
        return;
    }

    // Verificar si el campo de correo electrónico contiene el símbolo "@"
    if (!email.includes("@")) {
        // Mostrar alerta de error en correo electrónico
        alert("Por favor, ingrese un correo electrónico válido.");
        return;
    }

    // Verificar si algún campo está vacío
    if (nombre === '' || email === '' || asunto === '' || mensaje === '') {
        // Mostrar alerta de campos vacíos
        alert("Por favor, complete todos los campos.");
    } else {
        // Mostrar alerta de mensaje enviado
        alert("Se ha enviado su mensaje, nos comunicaremos lo antes posible.");
    }
}

