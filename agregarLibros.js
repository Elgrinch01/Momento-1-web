let cantidad = parseInt(prompt("¿Cuántos libros vas agregar?"));

for (let i = 1; i <= cantidad; i++) {
    let titulo = prompt("Ingresa el título del libro:");
    let autor = prompt("Ingresa el autor del libro:");
    let anio = parseInt(prompt("Ingresa el año de publicación:"));
    agregarLibro(titulo, autor, anio);
}

function agregarLibro(titulo, autor, anio) {
    if (titulo && autor && anio) {
        console.log("Libro agregado correctamente");
        console.log("Libro: " + titulo + " - " + autor + " (" + anio + ")");
    } else {
        console.log("Datos inválidos, no se agregó el libro.");
    }
}