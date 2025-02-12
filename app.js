/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
   Aquí deberás desarrollar la lógica para resolver el problema.*/

/* Inicializar el array de participantes
let participantes = [];

// Función para agregar un nuevo participante
function agregarParticipante(nombre) {
  // Agrega el nombre al array de participantes
  participantes.push(nombre);
}



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
*/

let listaDeNombres = [], sorteoRealizado = false;

function agregarAmigo() {
  if (sorteoRealizado) return alert("Debe ingresar todos los nombres de una sola vez"), document.getElementById("amigo").value = "";
  let nombre = document.getElementById("amigo").value;
  if (!isNaN(nombre)) return alert("solo nombres"), document.getElementById("amigo").value = "";
  if (nombre) listaDeNombres.push(nombre), alert(`Nombre agregado: ${nombre}`), document.getElementById("amigo").value = "", document.getElementById("listaAmigos").innerHTML += `<li>${nombre}</li>`;
}

function sortearAmigo() {
  if (!sorteoRealizado) {
    if (listaDeNombres.length < 4) return alert("Se necesita al menos cuatro nombres.");
    if (listaDeNombres.length % 2 !== 0) return alert("Se necesita una cantidad par de nombres.");
  }
  sorteoRealizado = true;
  if (listaDeNombres.length < 2) return alert("No hay suficientes nombres para sortear.");
  const indice1 = Math.floor(Math.random() * listaDeNombres.length);
  const nombre1 = listaDeNombres.splice(indice1, 1)[0];
  const indice2 = Math.floor(Math.random() * listaDeNombres.length);
  const nombre2 = listaDeNombres.splice(indice2, 1)[0];
  alert(`Los nombres sorteados son: ${nombre1} - ${nombre2}`);
  document.getElementById("listaAmigos").innerHTML = listaDeNombres.map(n => `<li>${n}</li>`).join("");
  document.getElementById("resultado").innerHTML += `<li>${nombre1} - ${nombre2}</li>`;
}