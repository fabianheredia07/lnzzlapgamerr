
function limpiarDato() { 

    document.getElementById('nombre').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('telefono').value= '';
    document.getElementById('text-area').value = '';
}


function enviarDato() {
    var correo = document.getElementById("correo").value;
    var emailError = document.getElementById("emailError");

    // Patrón para validar email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correo.trim() === " ") {
        emailError.textContent = "El campo de email no puede estar vacío";
        return false;
    } else if (!emailPattern.test(correo)) {
        emailError.textContent = "Ingrese un email válido";
        return false;
    } else {
        emailError.textContent = " ";
        limpiarDato()
        return true;

    }
    
}
