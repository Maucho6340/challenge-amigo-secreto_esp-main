// Código creado por Maucho6340 12 feb 2025.

let listaDeNombres = [], sorteoRealizado = false;

// No permite agregar mas nombres una vez iniciado el sorteo
function agregarAmigo() {
  if (sorteoRealizado) return alert ("Debes ingresar todos los nombres de una sola vez"), document.getElementById("amigo").value = "";
  let nombre = document.getElementById("amigo").value;
  //Solo permite ingresar strings
  if (!isNaN(nombre)) return alert("Sólo puedes ingresar nombres"), document.getElementById("amigo").value = "";
  if (nombre) listaDeNombres.push(nombre), console.log(`Nombre agregado: ${nombre}`), document.getElementById("amigo").value = "", document.getElementById("listaAmigos").innerHTML += `<li>${nombre}</li>`;
}

function sortearAmigo() {
  if (!sorteoRealizado) {
   // Permite sortear solo si hay cuatro o mas nombres y en cantidad par. 
    if (listaDeNombres.length < 4) return alert ("Se necesita al menos cuatro nombres.");
    if (listaDeNombres.length % 2 !== 0) return alert ("Se necesita una cantidad par de nombres.");
  }
  sorteoRealizado = true;
  // aviso cuando se han acabado los nombres de la lista
  if (listaDeNombres.length < 2) return alert("No hay suficientes nombres para sortear.");
  const indice1 = Math.floor(Math.random() * listaDeNombres.length);
  const nombre1 = listaDeNombres.splice(indice1, 1)[0];
  const indice2 = Math.floor(Math.random() * listaDeNombres.length);
  const nombre2 = listaDeNombres.splice(indice2, 1)[0];
  // publicación de parejas
  console.log(`Los nombres sorteados son: ${nombre1} - ${nombre2}`);
  document.getElementById("listaAmigos").innerHTML = listaDeNombres.map(n => `<li>${n}</li>`).join("");
  document.getElementById("resultado").innerHTML += `<li>${nombre1} - ${nombre2}</li>`;
}
