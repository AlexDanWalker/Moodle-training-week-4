// Agrega un listener al botón "Guardar" que se ejecuta al hacer clic
document.getElementById('saveButton').addEventListener('click', () => {
    // Obtiene las referencias de los campos de entrada
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');

    // Verifica que los elementos del formulario existan en el DOM
    if (!nameInput || !ageInput) {
        console.error('Los elementos del formulario no existen.');
        return;
    }

    // Obtiene y limpia los valores ingresados por el usuario
    const userName = nameInput.value.trim();
    const userAge = parseInt(ageInput.value);

    // Validación: asegúrate de que el nombre no esté vacío y la edad sea un número válido
    if (userName && !isNaN(userAge) && userAge > 0) {
        // Guarda los datos en el almacenamiento local
        localStorage.setItem('userName', userName);
        localStorage.setItem('userAge', userAge);

        // Muestra los datos almacenados en pantalla
        displayUserData();

        // Mensaje personalizado opcional
        alert(`¡Datos guardados! Bienvenido/a, ${userName}.`);
    } else {
        // Muestra una alerta si los datos son inválidos
        alert('Por favor, ingresa un nombre válido y una edad numérica positiva.');
    }
});

// Función que muestra los datos almacenados en localStorage
function displayUserData() {
    const storedName = localStorage.getItem('userName');
    const storedAge = localStorage.getItem('userAge');
    const outputDiv = document.getElementById('output');

    // Verifica si hay datos almacenados
    if (storedName && storedAge) {
        outputDiv.textContent = `Hola ${storedName}, tienes ${storedAge} años.`;
    } else {
        outputDiv.textContent = 'No hay datos almacenados.';
    }
}

// Llama a la función de mostrar datos cuando la página carga
window.onload = displayUserData;

// Inicializa el contador de interacciones en sessionStorage si aún no existe
if (!sessionStorage.getItem('interactionCount')) {
    sessionStorage.setItem('interactionCount', 0);
}

// Función que actualiza y muestra el número de interacciones durante la sesión
function updateInteractionCount() {
    let currentCount = parseInt(sessionStorage.getItem('interactionCount'));
    currentCount++;
    sessionStorage.setItem('interactionCount', currentCount);
    console.log(`Interacciones en esta sesión: ${currentCount}`);
}

// Asocia la función de interacción a los botones
document.getElementById('saveButton').addEventListener('click', updateInteractionCount);
document.getElementById('clearButton').addEventListener('click', updateInteractionCount);

// Agrega un listener al botón "Limpiar" que borra los datos almacenados
document.getElementById('clearButton').addEventListener('click', () => {
    localStorage.clear();        // Limpia todos los datos del almacenamiento local
    displayUserData();           // Actualiza la vista para reflejar los datos eliminados
    alert('Datos eliminados correctamente.');
});
