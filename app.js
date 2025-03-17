// El principal objetivo de este desafío es 
// fortalecer tus habilidades en lógica de 
// programación. Aquí deberás desarrollar la 
// lógica para resolver el problema.
let amigosSecretos = [];
let amigosGanadores = [];


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function mostrarListaAmigos(vector, lista) {
    let mostrarLista = ' ' ;
    vector.forEach(misAmigos => {
        mostrarLista=mostrarLista + `<li>${misAmigos}</li>`
        asignarTextoElemento(`${lista}`,`${mostrarLista}`);
        
      });
      return;
}

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
  
    if (nombreAmigo !== '') {
        amigosSecretos.push(nombreAmigo);
        console.log(amigosSecretos);
        mostrarListaAmigos(amigosSecretos, 'listaAmigos');
    } else {
        alert('No hay un nombre para agregar a la lista. \rIngrese uno por favor!!');
    }
    document.getElementById('amigo').value=""
    return;
};


function sortearAmigo() {
    let numeroAmigos= amigosSecretos.length;
    let numeroGanadores=amigosGanadores.length; 
    
    if (numeroAmigos !== numeroGanadores) {
        let numeroSorteo=generarNumero();        
        console.log('Sorteo numero '+numeroSorteo+' Amigos '+numeroAmigos);
        
        amigosGanadores.push(amigosSecretos[numeroSorteo]);
        mostrarListaAmigos(amigosGanadores, 'resultado');
        document.getElementById('amigo').value=""
        return;;
    }else{
        alert('Todos tus amigos son ganadores!!!');
    }        
    
};


function generarNumero() {
    let numeroAmigos= amigosSecretos.length;
    let numeroGenerado =  Math.floor(Math.random()*numeroAmigos);
    
    if (numeroAmigos == numeroGenerado) {
        console.log('Ya se sortearon todos los números posibles');
    } else {
        if (amigosGanadores.includes(amigosSecretos[numeroGenerado])) {
            //console.log('Incluido pido otro '+numeroGenerado);
            return generarNumero();
        } else {
            //console.log('Retorno Numero '+numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

