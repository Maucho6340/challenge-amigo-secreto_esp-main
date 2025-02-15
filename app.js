
/*1ro: Capturar el valor del campo de entrada: Utilizar document.getElementById 
o document.querySelector para obtener el texto ingresado por el usuario.*/

/*2do: Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. 
Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."*/

const inputField = document.querySelector ('#amigo'); //captura el valor del campo con id amigo
const AddButton = documento.querySelector ('.button-add') //captura el botón con clase button-add

function agregarAmigo() { //declara función para ingresar nombre
   const inputValue = inputField.value.trim(); //captura valor ingresado y lo guarda en inputValue sin espacios en blanco
   if (inputValue == ''){ //verifica que inputValue no esté vacío
      alert ('Por favor, inserte un nombre.'); //si está vacío, emite mensaje
   } else {
      console.log ('valor ingresado:', inputValue); // o si no: mensaje en consola con el valor agregado
      inputField = ''; //deja limpio el campo para un nuevo ingreso
   }
}
