// DOM Elements
const fechaLimiteContainer = document.getElementById('fecha-limite-container');
const renovacionContainer = document.getElementById('renovacion-container');
const fechaLimiteInput = document.getElementById('fecha-limite');
const diasExtraInput = document.getElementById('dias-extra');
const btnConfirmarFecha = document.getElementById('btn-confirmar-fecha');
const btnRenovar = document.getElementById('btn-renovar');
const fechaActualText = document.getElementById('fecha-actual');
const renovacionesRestantesText = document.getElementById('renovaciones-restantes');
const mensaje = document.getElementById('mensaje');

// Variables de control
let fechaLimite = 0;
let renovaciones = 0;
const maxRenovaciones = 2;

// Confirmar fecha inicial
btnConfirmarFecha.addEventListener('click', () => {
    const dias = Number(fechaLimiteInput.value);
    
    if (dias > 0) {
        fechaLimite = dias;
        fechaLimiteContainer.classList.add('hidden');
        renovacionContainer.classList.remove('hidden');
        actualizarInformacion();
    } else {
        mensaje.textContent = 'Por favor ingrese un número válido de días';
        mensaje.className = 'mt-4 text-center text-sm text-red-600';
    }
});

// Renovar libro
btnRenovar.addEventListener('click', () => {
    if (renovaciones >= maxRenovaciones) {
        mensaje.textContent = 'Has alcanzado el máximo de renovaciones';
        mensaje.className = 'mt-4 text-center text-sm text-red-600';
        return;
    }

    const diasExtra = Number(diasExtraInput.value);

    if (diasExtra > 0) {
        fechaLimite += diasExtra;
        renovaciones++;
        actualizarInformacion();
        
        mensaje.textContent = `¡Renovación exitosa! Nueva fecha de devolución: día ${fechaLimite}`;
        mensaje.className = 'mt-4 text-center text-sm text-green-600';
        
        // Limpiar input
        diasExtraInput.value = '';
        
        if (renovaciones === maxRenovaciones) {
            btnRenovar.disabled = true;
            btnRenovar.classList.add('opacity-50');
        }
    } else {
        mensaje.textContent = 'Por favor ingrese un número válido de días';
        mensaje.className = 'mt-4 text-center text-sm text-red-600';
    }
});

// Función para actualizar la información mostrada
function actualizarInformacion() {
    fechaActualText.textContent = `Tu libro vence en el día ${fechaLimite}`;
    renovacionesRestantesText.textContent = `Renovaciones disponibles: ${maxRenovaciones - renovaciones}`;
}