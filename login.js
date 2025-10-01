
const registroForm = document.getElementById('registro-form');
const loginForm = document.getElementById('login-form');
const mensaje = document.getElementById('mensaje');

const registroUsuario = document.getElementById('registro-usuario');
const registroContrasena = document.getElementById('registro-contrasena');
const btnRegistro = document.getElementById('btn-registro');

const loginUsuario = document.getElementById('login-usuario');
const loginContrasena = document.getElementById('login-contrasena');
const btnLogin = document.getElementById('btn-login');


let ingresoNombre = '';
let ingresoContrasena = '';
let intentos = 3;

btnRegistro.addEventListener('click', () => {
    const nombre = registroUsuario.value.trim();
    const contrasena = registroContrasena.value.trim();
    
    if (nombre && contrasena) {
        ingresoNombre = nombre;
        ingresoContrasena = contrasena;
        localStorage.setItem('usuarioRegistrado', nombre);
        localStorage.setItem('contrasenaRegistrada', contrasena);
        
        mensaje.textContent = `¡Registro exitoso! Bienvenido/a ${nombre}, ahora puedes iniciar sesión`;
        mensaje.className = 'mt-4 text-center text-sm text-green-600';

        registroUsuario.value = '';
        registroContrasena.value = '';
        registroForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    } else {
        mensaje.textContent = 'Por favor complete todos los campos';
        mensaje.className = 'mt-4 text-center text-sm text-red-600';
    }
});


window.addEventListener('load', () => {
    const usuarioGuardado = localStorage.getItem('usuarioRegistrado');
    const contrasenaGuardada = localStorage.getItem('contrasenaRegistrada');
    const tempLoginUser = localStorage.getItem('tempLoginUser');
    const loginAutomatico = localStorage.getItem('loginAutomatico');
    
    if (usuarioGuardado && contrasenaGuardada) {
        ingresoNombre = usuarioGuardado;
        ingresoContrasena = contrasenaGuardada;

        if (tempLoginUser) {
            loginUsuario.value = tempLoginUser;
            registroForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
      
            localStorage.removeItem('tempLoginUser');
        }

        
        if (loginAutomatico) {
            loginUsuario.value = usuarioGuardado;
            loginContrasena.value = contrasenaGuardada;
            localStorage.removeItem('loginAutomatico');
           
            btnLogin.click();
        }
    }
});

btnLogin.addEventListener('click', () => {
    const nombre = loginUsuario.value.trim();
    const contrasena = loginContrasena.value.trim();
    
    if (nombre === ingresoNombre && contrasena === ingresoContrasena) {
        
        const bienvenidaDiv = document.createElement('div');
        bienvenidaDiv.className = 'p-4 bg-green-100 rounded-xl';
        bienvenidaDiv.innerHTML = `
            <h3 class="font-bold text-green-800">¡Bienvenido/a ${nombre}!</h3>
            <p class="text-green-600 mt-2">Inicio de sesión exitoso</p>
        `;
        mensaje.innerHTML = '';
        mensaje.appendChild(bienvenidaDiv);
        
     
        localStorage.setItem('sesionActiva', nombre);
        
        setTimeout(() => {
            window.location.href = 'agregarLibros.html';
        }, 2000);
    } else {
        intentos--;
        if (intentos > 0) {
            mensaje.textContent = `Usuario o contraseña incorrecta. Te quedan ${intentos} intentos.`;
            mensaje.className = 'mt-4 text-center text-sm text-red-600';
        } else {
            mensaje.textContent = 'Usuario bloqueado por seguridad. Por favor, intenta más tarde.';
            mensaje.className = 'mt-4 text-center text-sm text-red-600';
            btnLogin.disabled = true;
            btnLogin.classList.add('opacity-50');
        }
    }
});

