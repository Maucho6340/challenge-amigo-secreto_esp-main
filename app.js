/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
   Aquí deberás desarrollar la lógica para resolver el problema.*/

/* Inicializar el array de participantes
let participantes = [];

// Función para agregar un nuevo participante
function agregarParticipante(nombre) {
  // Agrega el nombre al array de participantes
  participantes.push(nombre);
}
*/


// Función para verificar que el length del array >=4 y par
let listaDeNombres = [];

function agregarNombre() {
  let nombre = document.getElementById("nombreInput").value;
  if (nombre) listaDeNombres.push(nombre), console.log(`Nombre agregado: ${nombre}`), document.getElementById("nombreInput").value = "", document.getElementById("nombresLista").textContent = listaDeNombres.join(", ");
}

function verificarListaDeNombres() {
  console.log("Lista actual de nombres:", listaDeNombres);
  if (listaDeNombres.length < 4) return console.log("No se puede sortear con menos de 4 participantes."), false;
  if (listaDeNombres.length % 2 !== 0) return console.log("Debe haber una cantidad de participantes par."), false;
  return console.log("La lista cumple con las condiciones."), true;
}






// Función para realizar el sorteo
function realizarSorteo() {
  // Mezclar aleatoriamente el array de participantes
  participantes = mezclarArray(participantes);

  // Crear un objeto con los pares de amigos secretos
  let paresAmigosSecretos = {};

  // Lógica para asignar a cada participante un amigo secreto
  for (let i = 0; i < participantes.length; i++) {
    let amigosecreto = participantes[(i + 1) % participantes.length];
    paresAmigosSecretos[participantes[i]] = amigosecreto;
  }

  return paresAmigosSecretos;
}

// Función auxiliar para mezclar un array de forma aleatoria
function mezclarArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}



   