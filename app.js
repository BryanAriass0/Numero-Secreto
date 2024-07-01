//variables
let Nombre = "Brayan"
let LenguajeUsuario = 0;
let Valor1 = 2;
let valor2 = 3;
let Resultado = Valor1 + valor2;
let edad = 0;
let Numero = 0;
let Bucle = 1;
let Nota = 6;


//aleatorio
console.log(Math.floor(Math.random()*1000));

//lenguaje
alert(`¡Hola ${Nombre}!` );
LenguajeUsuario = prompt("Cual es el lenguaje de Programacion que mas te gusta?");
//edad
edad = prompt("Ingresa tu edad");
if (edad >= 18) {
    console.log("Es mayor de edad");
    } else {
        console.log ("Es menor de edad");
    }

Numero = prompt("Ingresa un numero");
//numero
if(Numero > 0) {
    console.log("Numero Positivo");
} else if(Numero < 0) {
    console.log("Numero Negativo");
} else {
    console.log ("Es cero");
}
   
  
//nota
if ( Nota >= 7){
    console.log("aprobaste");
}else{
    console.log("reprobaste");
}

//Bucle
while(Bucle <= 10) {
    console.log(Bucle);
    Bucle++;
}


// Consola
console.log("bienvenido");
console.log(`Hola ${Nombre}`);
console.log(LenguajeUsuario)
console.log (Resultado);
