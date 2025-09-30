
// DOM Elements
const recuperarUsuario = document.getElementById('recuperar-usuario');
const btnRecuperar = document.getElementById('btn-recuperar');
const mensaje = document.getElementById('mensaje');

// Verificar si ya hay una sesión activa
window.addEventListener('load', () => {
    const sesionActiva = localStorage.getItem('sesionActiva');
    if (sesionActiva) {
        recuperarUsuario.value = sesionActiva;
    }
});

// Function to show password recovery result
function mostrarResultadoRecuperacion(usuario, contrasena) {
    // Crear el contenedor del resultado
    const resultadoDiv = document.createElement('div');
    resultadoDiv.className = 'p-4 bg-green-100 rounded-xl mt-4';
    resultadoDiv.innerHTML = `
        <h3 class="font-bold text-green-800 mb-2">Contraseña Recuperada</h3>
        <p class="text-gray-700">Usuario: ${usuario}</p>
        <p class="text-gray-700 mt-1">Contraseña: ${contrasena}</p>
        <div class="flex space-x-4 mt-4">
            <button id="btn-ir-login" class="flex-1 py-2 px-4 bg-black text-white font-medium rounded-xl hover:bg-gray-900 transition-colors">
                Ir a Iniciar Sesión
            </button>
            <button id="btn-auto-login" class="flex-1 py-2 px-4 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-colors">
                Iniciar Sesión Automáticamente
            </button>
        </div>
    `;
    
    mensaje.innerHTML = '';
    mensaje.appendChild(resultadoDiv);

    // Agregar evento al botón de ir a login
    document.getElementById('btn-ir-login').addEventListener('click', () => {
        // Guardar los datos temporalmente para auto-completar el formulario de login
        localStorage.setItem('tempLoginUser', usuario);
        window.location.href = 'login.html';
    });

    // Agregar evento para inicio de sesión automático
    document.getElementById('btn-auto-login').addEventListener('click', () => {
        // Guardar la sesión como activa
        localStorage.setItem('sesionActiva', usuario);
        localStorage.setItem('loginAutomatico', 'true');
        
        // Mostrar mensaje de éxito
        const successDiv = document.createElement('div');
        successDiv.className = 'p-4 bg-green-100 rounded-xl mt-4';
        successDiv.innerHTML = `
            <p class="text-green-800 font-medium">¡Iniciando sesión automáticamente!</p>
            <p class="text-green-600 mt-1">Redirigiendo...</p>
        `;
        mensaje.innerHTML = '';
        mensaje.appendChild(successDiv);

        // Redireccionar después de un breve delay
        setTimeout(() => {
            window.location.href = 'agregarLibros.html';
        }, 1500);
    });
}

// Function to recover password
btnRecuperar.addEventListener('click', () => {
    console.log('Botón de recuperar contraseña clickeado');
    const usuario = recuperarUsuario.value.trim();
    
    if (usuario === '') {
        mensaje.textContent = 'Por favor ingrese un usuario';
        mensaje.className = 'mt-4 text-center text-sm text-red-600';
        return;
    }

    // Recuperar datos del localStorage
    const usuarioGuardado = localStorage.getItem('usuarioRegistrado');
    const contrasenaGuardada = localStorage.getItem('contrasenaRegistrada');
    
    console.log('Usuario ingresado:', usuario);
    console.log('Usuario guardado:', usuarioGuardado);
    console.log('Contraseña guardada:', contrasenaGuardada);

    if (usuario === usuarioGuardado) {
        console.log('Usuario encontrado, mostrando recuperación');
        mostrarResultadoRecuperacion(usuario, contrasenaGuardada);
    } else {
        console.log('Usuario no encontrado');
        // Crear mensaje de error
        const errorDiv = document.createElement('div');
        errorDiv.className = 'p-4 bg-red-100 rounded-xl mt-4';
        errorDiv.innerHTML = `
            <p class="text-red-800 font-medium">Usuario no encontrado</p>
            <p class="text-red-600 mt-1">Por favor, verifique el usuario ingresado</p>
        `;
        mensaje.innerHTML = '';
        mensaje.appendChild(errorDiv);
    }
});