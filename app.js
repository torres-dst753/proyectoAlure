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

function agregarAmigo() {
    //let nuevaLongitud = amigosSecretos.push("Naranja");
    //obtengo nombre del amigo ingresado en la caja de texto
    let nombreAmigo = document.getElementById('amigo').value;
    let mostrarLista = ' ' ;

    if (nombreAmigo !== '') {
        amigosSecretos.push(nombreAmigo);
        amigosSecretos.forEach(misAmigos => {
          mostrarLista=mostrarLista + `<li>${misAmigos}</li>`
          asignarTextoElemento('listaAmigos',`${mostrarLista}`);
          
        }); 
    } else {
        alert('No hay un nombre para agregar a la lista');
    }
    document.getElementById('amigo').value=""
    return;
};

function sortearAmigo() {
    let numeroAmigos= amigosSecretos.length;
    let numeroGanadores=amigosGanadores.length; 
    
    if (numeroAmigos !== numeroGanadores) || (numeroGanadores == 0 ) {
        let numeroSorteo=generarNumero();        
        console.log('Sorteo numero '+numeroSorteo+' Amigos '+numeroAmigos);
        let mostrarLista = ' ' ;

        amigosGanadores.push(amigosSecretos[numeroSorteo]);
        amigosGanadores.forEach(misAmigos => {
        mostrarLista=mostrarLista + `<li>${misAmigos}</li>`
        asignarTextoElemento('resultado',`${mostrarLista}`);
        
        });
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

