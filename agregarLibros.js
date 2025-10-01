const cantidadInput = document.getElementById('cantidad');
const contenedorLibros = document.getElementById('contenedor-libros');
const btnAgregar = document.getElementById('btnAgregar');
const librosAgregados = document.getElementById('libros-agregados');


cantidadInput.addEventListener('change', function() {
    generarFormularioLibros(this.value);
});

btnAgregar.addEventListener('click', function() {
    procesarLibros();
});

function generarFormularioLibros(cantidad) {
    contenedorLibros.innerHTML = '';
    
    for (let i = 1; i <= cantidad; i++) {
        const libroDiv = document.createElement('div');
        libroDiv.className = 'libro-form space-y-3';
        libroDiv.innerHTML = `
            <h3 class="font-semibold text-gray-700">Libro ${i}</h3>
            <div>
                <label class="block text-sm font-medium text-gray-700">Título</label>
                <input type="text" class="libro-titulo w-full px-4 py-2 rounded-xl border border-gray-300 bg-white/60" required>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700">Autor</label>
                <input type="text" class="libro-autor w-full px-4 py-2 rounded-xl border border-gray-300 bg-white/60" required>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700">Fecha de publicación</label>
                <input type="date" class="libro-fecha w-full px-4 py-2 rounded-xl border border-gray-300 bg-white/60" required>
            </div>
        `;
        contenedorLibros.appendChild(libroDiv);
    }
}

function procesarLibros() {
    const librosFormas = document.getElementsByClassName('libro-form');
    let librosAgregadosCount = 0;

    for (let forma of librosFormas) {
        const titulo = forma.querySelector('.libro-titulo').value;
        const autor = forma.querySelector('.libro-autor').value;
        const fechaPublicacion = new Date(forma.querySelector('.libro-fecha').value);

        if (agregarLibro(titulo, autor, fechaPublicacion)) {
            librosAgregadosCount++;
        }
    }

    if (librosAgregadosCount > 0) {
        alert(`¡Se agregaron ${librosAgregadosCount} libros correctamente!`);
        // Limpiar el formulario después de agregar los libros
        contenedorLibros.innerHTML = '';
        cantidadInput.value = '';
    }
}

function agregarLibro(titulo, autor, fechaPublicacion) {
    if (titulo && autor && fechaPublicacion) {
        // Formatear la fecha como dd/mm/yyyy
        const fecha = fechaPublicacion.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    
        const libroElement = document.createElement('div');
        libroElement.className = 'bg-white/90 p-4 rounded-xl shadow-md';
        libroElement.innerHTML = `
            <h4 class="font-bold text-gray-800">${titulo}</h4>
            <p class="text-gray-600">Autor: ${autor}</p>
            <p class="text-gray-600">Fecha de publicación: ${fecha}</p>
        `;
    
        librosAgregados.appendChild(libroElement);
        return true;
    } else {
        alert("Por favor complete todos los campos del libro.");
        return false;
    }
}