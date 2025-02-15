// CALLENGE_AMIGO_SECRETO Maucho6340 feb 2025

const inputField = document.querySelector('#amigo'); // Selecciona input con id "amigo" y lo almacena en inputField
const addButton = document.querySelector('.button-add'); // Selecciona botón clase "button-add" y lo almacena en AddButton
const listaAmigos = document.querySelector('#listaAmigos'); //selecciona el contenedor <ul> con id listaAmigos
const resultado = document.getElementById('resultado'); // Selecciona el contenedor para el resultado del sorteo
const participantes = []; //crea array para almacenar nombres


function agregarAmigo() {
    const inputValue = inputField.value.trim(); // Captura nombre agregado y elimina espacios en blanco
    if (inputValue === '') {  // Valida que inputValue no esté vacío
      alert('Por favor, inserte un nombre.'); // Si está vacío muestra mensaje
    } else {
      participantes.push (inputValue); //añade nombre validado al array amigos
      console.log ('Participantes', participantes); // muestra participantes en consola
      actualizarListaDeAmigos ();
      inputField.value = ''; // Deja limpio el campo de entrada una vez capturado el valor por id "amigo"
    }
}
function actualizarListaDeAmigos (){
  listaAmigos.innerHTML=''; // Asigna cadena vacía al contenido HTML del contenedor <ul> con id "listaAmigos"
  participantes.forEach((amigo,index)=>{ //Recorre cada elemento del array 
    const amigoElement = document.createElement ('li'); // Añade uno nuevo elemento "li" a la lista
    amigoElement.textContent = `${index + 1}. ${amigo}`; // Crea la cadena de nombres
    listaAmigos.appendChild(amigoElement);  //añade nuevo elemento al contenedor
    });
  }

function sortearAmigo () {  // Función para sortear amigo al azar
  if (participantes.length === 0){ // Si el array está vacío
    alert ('No hay mas nombres para sortear'); //Imprime mensaje
    resultado.innerHTML=''; // Limpia el resultado anterior
    return; //si no, devuelve el valor 
  }
const randomIndex = Math.floor(Math.random()*participantes.length); //Genera índice aleatorio
const amigoSorteado = participantes[randomIndex]; //Obtiene el nombre sorteado
participantes.splice(randomIndex, 1); // Elimina el nombre sorteado del array "participantes"
resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`; //Muestra el resultado del sorteo
actualizarListaDeAmigos (); //Actualiza la lista de amigos después de eliminar al sorteado
}

addButton.addEventListener('click', agregarAmigo); // Asigna la función al evento click del botón

