

let usuario = prompt(`Ingrese su usuario:`);


const saludarflecha = (usuario) =>
    console.log(`Bienvenido al sistema de Reserva de libros, ${usuario}`);

saludarflecha(usuario);

let libro = prompt(`Ingrese el título del libro que desea reservar: `);

let fechaReserva = prompt(`Ingrese la fecha de hoy: (En letras)`);

let fechaDevolucion = prompt(`(Cuente 15 días a partir de hoy e ingrésela:(En letras)  )`);
let lugarEntrega;
let domicilio;

lugarEntrega = prompt(`Desea entrega a domicilio?: (Responda si o no)`);

const lugarEntregaFlecha = () => {
    if (lugarEntrega.toLowerCase() == 'si' || lugarEntrega.toLowerCase() == 'sí') {
        domicilio = prompt(`Ingrese la dirección del domicilio en el cual desea recibir los/el  libro(s):`);
        console.log(`El libro será entregado en: ${domicilio}`);
    } else {
        alert(`El lugar de entrega será con retiro en la biblioteca. Lo esperamos en los siguientes dias. `)
    }
}


lugarEntregaFlecha();

alert(`El libro deberá ser entregado antes de ${fechaDevolucion}`);

console.log(`Resumen de la reserva`);
console.log(`Usuario: ${usuario}`);
console.log(`libro reservado: ${libro}`);
console.log(`Fecha de reserva: ${fechaReserva}`);
console.log(`Fecha de devolución: ${fechaDevolucion}`);
if (domicilio) {
    console.log(`Dirección de entrega: ${domicilio}`)
} else {
    console.log(`Modalidad de entrega con retiro en biblioteca. `)
}



