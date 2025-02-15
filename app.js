
/*1ro: Capturar el valor del campo de entrada: Utilizar document.getElementById 
o document.querySelector para obtener el texto ingresado por el usuario.*/

/*2do: Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. 
Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."*/

const inputField = document.querySelector('#amigo'); // Selecciona input con id "amigo" y lo almacena en inputField
const addButton = document.querySelector('.button-add'); // Selecciona botón clase "button-add" y lo almacena en AddButton

function agregarAmigo() {
    const inputValue = inputField.value.trim(); // Captura nombre agregado y elimina espacios en blanco
    if (inputValue === '') {  // Valida que inputValue no esté vacío
      alert('Por favor, inserte un nombre.'); // Si está vacío muestra mensaje
    } else {
        inputField.value = ''; // Deja limpio el campo de entrada una vez capturado el valor por id "amigo"
    }
}
// Asigna la función al evento click del botón
addButton.addEventListener('click', agregarAmigo);