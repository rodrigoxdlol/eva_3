function validar() {
    var retorno_nombre_usuario = validar_nombre_usuario();
    var retorno_contraseña = validar_contraseña();
    var retorno_confirmacion_contraseña = validar_confirmacion_contraseña();
    var retorno_telefono = validar_telefono();
    var retorno_comuna = validar_comuna();
    var retorno_direccion = validar_direccion();
    var retorno_aficiones = validar_aficiones();
    var retorno_url = validar_url();
    return retorno_nombre_usuario && retorno_contraseña && retorno_confirmacion_contraseña && retorno_telefono && retorno_comuna &&retorno_direccion && retorno_aficiones && retorno_url;
}

function validar_nombre_usuario() {
    var input_nombre_usuario = document.getElementById('input-nombre-usuario');
    var div_error_nombre_usuario = document.getElementById('error-nombre-usuario');
    var nombre_usuario = input_nombre_usuario.value;

    if (nombre_usuario === '') {
        div_error_nombre_usuario.innerHTML = 'El nombre de usuario es obligatorio';
        div_error_nombre_usuario.className = 'text-danger small mt-1';
        return false;
    } else if (nombre_usuario.length < 5) {
        div_error_nombre_usuario.innerHTML = 'El nombre de usuario no puede tener menos de 5 caracteres';
        div_error_nombre_usuario.className = 'text-danger small mt-1';
        return false;
    } else if (nombre_usuario.length > 10) {
        div_error_nombre_usuario.innerHTML = 'El nombre de usuario no puede tener más de 10 caracteres';
        div_error_nombre_usuario.className = 'text-danger small mt-1';
        return false;
    }

    var primer_caracter = nombre_usuario.charAt(0);
    if (!esLetra(primer_caracter)) {
        div_error_nombre_usuario.innerHTML = 'El nombre de usuario debe comenzar con una letra';
        div_error_nombre_usuario.className = 'text-danger small mt-1';
        return false;
    }

    var encontradoNumero = false;
    for (var i = 1; i < nombre_usuario.length; i++) {
        var caracter = nombre_usuario.charAt(i);
        if (!esLetra(caracter) && !esDigito(caracter)) {
            div_error_nombre_usuario.innerHTML = 'El nombre de usuario solo puede contener letras y dígitos';
            div_error_nombre_usuario.className = 'text-danger small mt-1';
            return false;
        }
        if (esDigito(caracter)) {
            encontradoNumero = true;
        } else if (encontradoNumero && esLetra(caracter)) {
            div_error_nombre_usuario.innerHTML = 'Los numeros solamente pueden ir al final';
            div_error_nombre_usuario.className = 'text-danger small mt-1';
            return false;
        }
    }

    div_error_nombre_usuario.innerHTML = '';
    return true;
}

function esLetra(caracter) {
    return (caracter >= 'A' && caracter <= 'Z') || (caracter >= 'a' && caracter <= 'z');
}

function esDigito(caracter) {
    return caracter >= '0' && caracter <= '9';
}

function validar_contraseña() {
    var input_contraseña = document.getElementById('input-contraseña');
    var div_error_contraseña = document.getElementById('error-contraseña');
    var input_nombre_usuario = document.getElementById('input-nombre-usuario');
    var nombre_usuario = input_nombre_usuario.value;
    var contraseña = input_contraseña.value;

    if (contraseña === '') {
        div_error_contraseña.innerHTML = 'La contraseña es obligatoria';
        div_error_contraseña.className = 'text-danger small mt-1';
        return false;
    } else if (contraseña.length < 6) {
        div_error_contraseña.innerHTML = 'La contraseña debe tener al menos 6 caracteres';
        div_error_contraseña.className = 'text-danger small mt-1';
        return false;
    } else if (contraseña.includes(nombre_usuario)) {
        div_error_contraseña.innerHTML = 'La contraseña no puede ser igual al nombre de usuario';
        div_error_contraseña.className = 'text-danger small mt-1';
        return false;
    } else {
        div_error_contraseña.innerHTML = '';
        return true;
    }
}

function validar_confirmacion_contraseña() {
    var input_contraseña = document.getElementById('input-contraseña');
    var input_confirmacion_contraseña = document.getElementById('input-confirmar-contraseña');
    var div_error_confirmacion_contraseña = document.getElementById('error-confirmar-contraseña');
    var contraseña = input_contraseña.value;
    var confirmacion_contraseña = input_confirmacion_contraseña.value;

   if (confirmacion_contraseña !== contraseña) {
        div_error_confirmacion_contraseña.innerHTML = 'Las contraseñas no coinciden';
        div_error_confirmacion_contraseña.className = 'text-danger small mt-1';
        return false;
    } else {
        div_error_confirmacion_contraseña.innerHTML = '';
        return true;
    }
}

function validar_telefono() {
    var input_telefono = document.getElementById('input-telefono');
    var div_error_telefono = document.getElementById('error-telefono');
    var telefono = input_telefono.value;

    if (telefono === '') {
        div_error_telefono.innerHTML = 'El teléfono es obligatorio';
        div_error_telefono.className = 'text-danger small mt-1';
        return false;
    } else if (telefono.length < 9) {
        div_error_telefono.innerHTML = 'El teléfono debe tener al menos 9 caracteres';
        div_error_telefono.className = 'text-danger small mt-1';
        return false;
    } else {
        div_error_telefono.innerHTML = '';
        return true;
    }
}

function validar_comuna() {
    var select_comuna = document.getElementById("comun");
    var div_error_comuna = document.getElementById("error-comuna");
    var comuna = select_comuna.value;
    console.log("Validando comuna:", comuna);

    if (comuna === "default") {
        div_error_comuna.innerHTML = 'Debe seleccionar una comuna';
        div_error_comuna.className = 'text-danger small mt-1';
        return false;
    } else {
        div_error_comuna.innerHTML = '';
        return true;
    }
} 

function validar_direccion() {
    var input_direccion = document.getElementById('input-direccion');
    var div_error_direccion = document.getElementById('error-direccion');
    var direccion = input_direccion.value;

    if (direccion === '') {
        div_error_direccion.innerHTML = 'La dirección es obligatoria';
        div_error_direccion.className = 'text-danger small mt-1';
        return false;
    }

    div_error_direccion.innerHTML = '';
    return true;
}
function validar_aficiones() {
    var input_aficiones = document.getElementById('input-aficiones');
    var input_aficiones_2 = document.getElementById('input-aficiones_2');
    var div_error_aficiones = document.getElementById('error-aficiones');
    var aficiones = input_aficiones.value;
    var aficiones2 = input_aficiones_2.value;

    if (aficiones === '' || aficiones2 === '') {
        div_error_aficiones.innerHTML = 'deben ser almenos 2 aficiones';
        div_error_aficiones.className = 'text-danger small mt-1';
        return false;
    } else if (aficiones.length < 5) {
        div_error_aficiones.innerHTML = 'Las aficiones deben tener al menos 5 caracteres';
        div_error_aficiones.className = 'text-danger small mt-1';
        return false;
    } else {
        div_error_aficiones.innerHTML = '';
        return true;
    }
}

function validar_url() {
    var input_url = document.getElementById('input-url');
    var div_error_url = document.getElementById('error-url');
    var url = input_url.value;

    if (!url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('www.')) {
        div_error_url.innerHTML = 'La URL debe comenzar con "http://" , "https://" o "www."';
        div_error_url.className = 'text-danger small mt-1';
        return false;
    } else {
        div_error_url.innerHTML = '';
        return true;
    }
}

