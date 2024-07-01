let NumeroSecreto = 0;
let Intentos = 0;
console.log(NumeroSecreto);
let NumeroSorteado = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemeto, texto) {
    let Titulo = document.querySelector(elemeto);
    Titulo.innerHTML = texto;
    return;
}

function VerificarNumero() {
   let IntentoDeUsuario = parseInt(document.getElementById(`valorUsuario`).value);
 
   console.log(NumeroSecreto);
   if (IntentoDeUsuario === NumeroSecreto) {
    asignarTextoElemento("p",`Acertaste en ${Intentos} ${(Intentos==1)? `intento` : `intentos`}` );
    document.getElementById(`reiniciar`).removeAttribute(`disabled`);
   } else{ 
    //no acierta
    if(IntentoDeUsuario>NumeroSecreto){
        asignarTextoElemento("p","El numero es Menor");
    } else{
        asignarTextoElemento("p","El numero es Mayor");
    }
    Intentos++;
    LimpiarCaja();
   }
   return;
}

function LimpiarCaja(){
    document.getElementById(`valorUsuario`).value ="";
}

function GeneraCodigoSecreto() {
    let NumeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(NumeroGenerado);
    console.log(NumeroSorteado);
    // SI YA SORTEAMOS TODOS LOS NUMEROS
    if(NumeroSorteado.length == numeroMaximo){
        asignarTextoElemento("p",`Ya se sortearon todos los numeros podibles`);
    } else {
        // Si el número generado está en la lista
        if (NumeroSorteado.includes(NumeroGenerado)) {
            return GeneraCodigoSecreto();
        } else {
            NumeroSorteado.push(NumeroGenerado);
            return NumeroGenerado;
        }
    }
}

function CondicionesInicales(){
    asignarTextoElemento("h1", " Adivina el numero");
    asignarTextoElemento("p", `Dime un numero del 1 al ${numeroMaximo}`);
    NumeroSecreto = GeneraCodigoSecreto();
    Intentos = 1;
}

function reiniciaJuego(){
    //limpiar caja
    LimpiarCaja();
    //indicar mensaje de intervalo de numeros
    //Generar numero aleatorio
    //Inicializar el numero de Intentos
    CondicionesInicales();
    // Deshabilitar el boton
    document.querySelector(`#reiniciar`).setAttribute(`disabled`,`true`);
}

CondicionesInicales();