const renovarLibro = () => {
  let fechaLimite = Number(prompt("Ingresa la fecha límite en días (ej: 10 dias):"));
  let renovaciones = 0;
  const maxRenovaciones = 2;

  while (renovaciones < maxRenovaciones) {
    let renovar = prompt(`Tu libro vence en el día ${fechaLimite} :(. ¿Deseas renovarlo? si o no`);

    if (renovar.toLowerCase() === "si") {
      let diasExtra = Number(prompt("¿Cuántos días deseas agregar?"));

      if (diasExtra > 0 && !isNaN(diasExtra)) {
        fechaLimite += diasExtra;
        renovaciones++;
        alert(`Nueva fecha de devolución: día ${fechaLimite} (renovaciones: ${renovaciones}`);

        if (renovaciones === maxRenovaciones) {
          alert("Has alcanzado el máximo de renovaciones.");
          break;
        }
      } else {
        alert("Días inválidos, intenta de nuevo.");
      }
    } else {
      alert("No renovaste tu libro.");
      break;
    }
  }
}

renovarLibro();