

// DOM Elements
const usuarioInput = document.getElementById('usuario');
const libroInput = document.getElementById('libro');
const fechaReservaInput = document.getElementById('fecha-reserva');
const entregaDomicilioSelect = document.getElementById('entrega-domicilio');
const domicilioContainer = document.getElementById('domicilio-container');
const domicilioInput = document.getElementById('domicilio');
const btnReservar = document.getElementById('btn-reservar');
const resumenReserva = document.getElementById('resumen-reserva');
const resumenContenido = document.getElementById('resumen-contenido');
const mensaje = document.getElementById('mensaje');

// Show/hide domicilio input based on selection
entregaDomicilioSelect.addEventListener('change', function() {
    if (this.value === 'si') {
        domicilioContainer.classList.remove('hidden');
    } else {
        domicilioContainer.classList.add('hidden');
        domicilioInput.value = '';
    }
});

// Handle reservation
btnReservar.addEventListener('click', () => {
    const usuario = usuarioInput.value.trim();
    const libro = libroInput.value.trim();
    const fechaReserva = fechaReservaInput.value;
    const entregaDomicilio = entregaDomicilioSelect.value;
    const domicilio = domicilioInput.value.trim();

    // Validate fields
    if (!usuario || !libro || !fechaReserva) {
        mensaje.textContent = 'Por favor complete todos los campos obligatorios';
        mensaje.className = 'mt-4 text-center text-sm text-red-600';
        return;
    }

    if (entregaDomicilio === 'si' && !domicilio) {
        mensaje.textContent = 'Por favor ingrese la dirección de entrega';
        mensaje.className = 'mt-4 text-center text-sm text-red-600';
        return;
    }

    // Calculate return date (15 days from reservation)
    const fechaDevolucion = new Date(fechaReserva);
    fechaDevolucion.setDate(fechaDevolucion.getDate() + 15);

    // Format dates for display
    const fechaReservaFormatted = new Date(fechaReserva).toLocaleDateString('es-ES');
    const fechaDevolucionFormatted = fechaDevolucion.toLocaleDateString('es-ES');

    // Show reservation summary
    resumenContenido.innerHTML = `
        <p><strong>Usuario:</strong> ${usuario}</p>
        <p><strong>Libro reservado:</strong> ${libro}</p>
        <p><strong>Fecha de reserva:</strong> ${fechaReservaFormatted}</p>
        <p><strong>Fecha de devolución:</strong> ${fechaDevolucionFormatted}</p>
        <p><strong>Modalidad de entrega:</strong> ${
            entregaDomicilio === 'si' 
            ? `Entrega a domicilio en: ${domicilio}`
            : 'Retiro en biblioteca'
        }</p>
    `;

    // Show success message and summary
    mensaje.textContent = '¡Reserva realizada con éxito!';
    mensaje.className = 'mt-4 text-center text-sm text-green-600';
    resumenReserva.classList.remove('hidden');
});



