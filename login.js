alert(`! CREA UNA NUEVA CUENTA ¡`);
let ingresoNombre = prompt("Crea un nombre de usuario o correo: ");

let ingresoContrasena = prompt("Crea tu contraseña: ");

alert(`! REGISTRO EXITOSO ¡`);
alert(` INICIO DE SESIÓN:`);

const login = (nombre, contrasena) =>

    nombre === ingresoNombre && contrasena === ingresoContrasena

let intentos = 3;

while (intentos > 0) {

    let nombre = prompt("Ingresa tu nombre de usuario");
    let contrasena = prompt("Ingresa tu contraseña");


    if (login(nombre, contrasena)) {
        alert(`Bienvenido ${nombre}`);
        break;
    } else {
        intentos--;
        if (intentos > 0) {
            alert(`Contraseña o usuario incorrecto, intente nuevamente. (Tienes ${intentos} más)`);

        } else {
            alert("Usuario o contraseña incorrecta. Usuario bloqueado.")
        }

    }
}
