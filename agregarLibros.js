// DOM Elements
const cantidadInput = document.getElementById('cantidad');
const contenedorLibros = document.getElementById('contenedor-libros');
const btnAgregar = document.getElementById('btnAgregar');
const librosAgregados = document.getElementById('libros-agregados');

// Event listener for quantity input
cantidadInput.addEventListener('change', function() {
    generarFormularioLibros(this.value);
});

// Event listener for add button
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
                <label class="block text-sm font-medium text-gray-700">Año de publicación</label>
                <input type="number" class="libro-anio w-full px-4 py-2 rounded-xl border border-gray-300 bg-white/60" required>
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
        const anio = parseInt(forma.querySelector('.libro-anio').value);

        if (agregarLibro(titulo, autor, anio)) {
            librosAgregadosCount++;
        }
    }

    if (librosAgregadosCount > 0) {
        alert(`¡Se agregaron ${librosAgregadosCount} libros correctamente!`);
    }
}

function agregarLibro(titulo, autor, anio) {
    if (titulo && autor && anio) {
        // Create new book element
        const libroElement = document.createElement('div');
        libroElement.className = 'bg-white/90 p-4 rounded-xl shadow-md';
        libroElement.innerHTML = `
            <h4 class="font-bold text-gray-800">${titulo}</h4>
            <p class="text-gray-600">Autor: ${autor}</p>
            <p class="text-gray-600">Año: ${anio}</p>
        `;
        
        // Add to the display area
        librosAgregados.appendChild(libroElement);
        return true;
    } else {
        alert("Por favor complete todos los campos del libro.");
        return false;
    }
}