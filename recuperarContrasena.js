
alert(`RECUPERA TU CONTRASEÑA`);


function recuperarContrasena() {

    let usuario = prompt(`Ingresa tu nombre de usuario para recuperar tu contraseña: `);

    if (usuario == ingresoNombre) {
        alert(`Su contraseña es: ${ingresoContrasena}`);

    } else {
        alert("Usuario no encotrado.")
    }
}

recuperarContrasena();