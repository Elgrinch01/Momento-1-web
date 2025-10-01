const fechaLimiteInput = document.getElementById('fechaLimite');
const diasExtraInput = document.getElementById('diasExtra');
const btnRenovar = document.getElementById('btnRenovar');
const resultado = document.getElementById('resultado');

btnRenovar.addEventListener('click', () => {
  const fechaLimiteValor = fechaLimiteInput.value;
  const diasExtraValor = parseInt(diasExtraInput.value, 10);

  if (!fechaLimiteValor || isNaN(diasExtraValor)) {
    resultado.textContent = 'Por favor ingresa la fecha de entrega y los días extra.';
    resultado.className = 'mt-4 text-center text-sm text-red-600';
    return;
  }

  if (diasExtraValor < 0 || diasExtraValor > 8) {
    resultado.textContent = 'Solo puedes renovar entre 0 y 8 días.';
    resultado.className = 'mt-4 text-center text-sm text-red-600';
    return;
  }

  const fechaEntrega = new Date(fechaLimiteValor);
  fechaEntrega.setHours(0, 0, 0, 0);

  const nuevaFecha = new Date(fechaEntrega);
  nuevaFecha.setDate(nuevaFecha.getDate() + diasExtraValor);

  const fechaEntregaFormateada = fechaEntrega.toLocaleDateString('es-ES');
  const nuevaFechaFormateada = nuevaFecha.toLocaleDateString('es-ES');

  resultado.innerHTML = `
    <p> Fecha de entrega original: <strong>${fechaEntregaFormateada}</strong></p>
    <p> Días extra solicitados: <strong>${diasExtraValor}</strong></p>
    <p> Nueva fecha de devolución: <strong>${nuevaFechaFormateada}</strong></p>
    <p class="mt-2 text-green-600">¡Renovación válida y confirmada!</p>
  `;
});