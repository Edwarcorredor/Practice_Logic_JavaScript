/**
 * TODO: Reto 1: Fibonacci
 */
/**
 ** 1. Escriba un programa que reciba como entrada un número entero n, y entregue como salida el n-
 **ésimo número de Fibonacci:
*/

/*let numeroEntrada = 11;
let numeroFibonacci = 0;
let numeroAnterior = 1;
let prevAnterior = 0;
if(numeroEntrada > numeroAnterior){
    for (let i = 2; i <= numeroEntrada; i++){ 
        numeroFibonacci = numeroAnterior + prevAnterior;
        prevAnterior = numeroAnterior;
        numeroAnterior = numeroFibonacci;
       
    }
    console.log(numeroFibonacci);
}else{
    console.log(numeroEntrada);
}*/

/**
 * *2. Escriba un programa que reciba como entrada un número entero e indique si es o no un número
**  de Fibonacci:
*/

/*let calculoFibonacci = 0;
let numeroEntrada = 88;
let numeroAnterior = 1;
let prevAnterior = 0;
while(calculoFibonacci < numeroEntrada){
    calculoFibonacci = numeroAnterior + prevAnterior;
    prevAnterior = numeroAnterior;
    numeroAnterior = calculoFibonacci;
}

if(calculoFibonacci == numeroEntrada){
    console.log("Es un número de Fibonacci");
}else{
    console.log("No es un número de Fibonacci");
}*/

/**
 **3. Escriba un programa que muestres los m primeros números de Fibonacci, donde m es un número
**ingresado por el usuario: 
*/

/*let numeroEntrada = 11;
let numeroFibonacci = 0;
let numeroAnterior = 0;
let prevAnterior = 0;

for (let i = 0; i <= numeroEntrada; i++){ 
    if(i === 1){
        numeroAnterior++;
    }
    numeroFibonacci = numeroAnterior + prevAnterior;
    if(i > 1){
        prevAnterior = numeroAnterior;
    }
    numeroAnterior = numeroFibonacci;
    console.log(numeroFibonacci);
}*/

/**
 * TODO Reto 2: Multiplicación Rusa
 * *Desarrolle un programa que reciba como entrada el multiplicador y el multiplicando, y entregue
  **como resultado el producto de ambos, calculado mediante el método de multiplicación rusa.
 */

/*let multiplicador = 59;
let multiplicando = 46;
let suma = 0;

while(multiplicador >= 1){
    if(multiplicador % 2 === 0){
    }else{
        suma = suma + multiplicando; 
    }
    multiplicador = parseInt(multiplicador/2);
    multiplicando = multiplicando * 2;
}
console.log(suma); */

/**
 * TODO Reto 3: Números amistosos
 * *Desarrolle un programa que permita encontrar dicho par.
 */

let limiteinferior = 1000;
let limitesuperior = 1500;
let objetoNumeroSuma = {};
for (let i = limiteinferior; i <= limitesuperior; i++){
    let suma = 0;
    for(let j = 1 ; j < i; j++){
        if(i % j === 0){
            suma = suma + j;
        }
    }
    objetoNumeroSuma[i] = suma;
}
for(let i = limiteinferior; i <= limitesuperior; i++){
    if(objetoNumeroSuma[i] >= limiteinferior && objetoNumeroSuma[i] <= limitesuperior){
        if(i == objetoNumeroSuma[objetoNumeroSuma[i]]){
            console.log("numero amistoso", i);
        }    
    }
}
