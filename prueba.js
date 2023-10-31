/**
 * TODO: Reto 1: Fibonacci
 */
/**
 ** 1. Escriba un programa que reciba como entrada un número entero n, y entregue como salida el n-
 **ésimo número de Fibonacci:
*/

/*let numeroEntrada = parseInt(prompt("Numero entero de entrada"));
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
let numeroEntrada = parseInt(prompt("Numero entero de entrada"));;
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

/*let numeroEntrada =  parseInt(prompt("Numero entero de entrada"));;
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

/*let multiplicador =  parseInt(prompt("Numero entero de multiplicador"));;
let multiplicando =  parseInt(prompt("Numero entero de multiplicando"));;
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

/*
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
*/

/**
 * TODO Reto 4: Votaciones de la CONFECH
    **La CONFECH, en su afán de agilizar el proceso de recuento de las votaciones, le ha encargado el
    desarrollo de un programa de registro de votación por universidades.
        Primero, el programa debe solicitar al usuario ingresar la cantidad de universidades que participan
        en el proceso.
        Luego, para cada una de las universidades, el usuario debe ingresar el nombre de la universidad y
        los votos de sus alumnos, que pueden ser: aceptar (A), rechazar (R), nulo (N) o blanco (B). El término
        de la votación se indica ingresando una X, tras lo cual se debe mostrar los totales de votos de la
        universidad, con el formato que se muestra en el ejemplo.
        Finalmente, el programa debe mostrar el resultado de la votación, indicando la cantidad de
        universidades que aceptan, que rechazan y en las que hubo empate entre estas dos opciones.
 */

        /*
let cantidadUniversidades = parseInt(prompt("Ingrese la cantidad de universidades"));
let universidadesA = 0;
let universidadesR = 0;
let universidadesE = 0;

for (let i = 0; i < cantidadUniversidades; i++){
    let nombreUniversidad = prompt("Ingrese el nombre de la universidad");
    let alumnosA = 0;
    let alumnosR = 0;
    let alumnosN = 0;
    let alumnosB = 0;
    let voto = "";
    while(voto!= "X"){
        voto = prompt("Ingrese el voto de la universidad");
        switch(voto){
            case "A":
                alumnosA++
                break;
            case "R":
                alumnosR++
                break;
            case "N":
                alumnosN++
                break;
            case "B":
                alumnosB++
                break;
        }
    }
    if(alumnosA > alumnosR){
        universidadesA++;
    }else if(alumnosR > alumnosA){
        universidadesR++;
    }else{
        universidadesE++;
    }
    let respuesta = `${nombreUniversidad}: ${alumnosA} aceptan, ${alumnosR} rechazan, ${alumnosB} blanco, ${alumnosN} nulos`
    console.log(respuesta);
}

let respuestaFinal = `Universidades que aceptan: ${universidadesA}
    Universidades que rechazan: ${universidadesR}
    Universidades que hubo empate: ${universidadesE}`
console.log(respuestaFinal);*/

/**
 * TODO Reto 5: Question Description
 * Function Description
Complete the function minNum in the editor below.
MinNum has the following parameter(s):
SamDaily: Number of problems Sam solves in a day
KellyDaily: Number of problems Kelly solves in a day
Difference: Number of problems Sam isa head to begin
Return
Int: the minimum number of days needed by Kelly to exceed Samm, or -1 if it is imposible
Constraints
 1 ≤ samDaily, kellyDaily ≤ 100
 0 ≤ difference ≤ 100
 */

/*
let SamDaily = parseInt(prompt("Ingrese el numero de ejercicios diarios de sam, debe estar entre 1 y 100"));
let KellyDaily = parseInt(prompt("Ingrese el numero de ejercicios diarios de kelly, debe estar entre 1 y 100"));
let Difference = parseInt(prompt("Ingrese el numero de diferencia entre ellos al inicio"));

if(SamDaily >= 1 && SamDaily <= 100 && KellyDaily >=1 && KellyDaily <=100 && Difference >=1 && Difference<=100){
    let DifferenceKelly = KellyDaily - SamDaily;
    if(DifferenceKelly > 0){
        let samSolved = SamDaily + Difference;
        let KellySolved = KellyDaily;
        let contadorDias = 1;
        while(true){
            if(KellySolved > samSolved){
                break;
            }
            else{
                samSolved = samSolved + SamDaily;
                KellySolved = KellySolved + KellyDaily;
                contadorDias++;
            }
        }
        let respuesta = `El minimo numero de dias que necesita Kelly para superar a Sam son ${contadorDias}`
        console.log(respuesta);
    }else{
        console.log(-1);
    }
}else{
    alert("Ingreso numeros fuera del rango")
}*/

/**
 * TODO QUESTION DESCRIPTION
Consider every susequence of an array of integers.
 Sort the subsequence in increasing order.
 Determine the sum of differences of elements in the subsequence.
 Return the length of the longest subsequence where this sum is even.
 */

let tamañoArray = parseInt(prompt("Ingresa el tamaño del array mayor a 3 y menor a 10 elevado a la 5"))
let arrayNumeros = [];
let arrayDiferencias = 0;
let arraySort = []
let validate = "";
if(tamañoArray >= 3 && tamañoArray <= Math.pow(5,10)){
    for(let i=0; i< tamañoArray; i++){
        while(true){
            let numeroEntrada = parseInt(prompt("Ingrese numero entero"));
            if(numeroEntrada >= 0 && numeroEntrada <=Math.pow(9,10)){
                arrayNumeros.push(numeroEntrada);
                break;  
            }else{
                alert("Ingreso numero fuera del rango")
            }
        }
    }
    arraySort = arrayNumeros.sort();
    for(let i=0; i<tamañoArray-1; i++){
       arrayDiferencias = arraySort[i+1] - arraySort[i] + arrayDiferencias;
    }
    if(arrayDiferencias % 2 ===0){
        validate = "Is Valid"
    }
    else{
        validate = "Not Valid"
    }
    let respuesta = `El array en orden ascendente es ${arraySort}
    La diferencia de los numeros es ${arrayDiferencias},
    el array ${validate},
    el tamaño del array es ${tamañoArray}`
    console.log(respuesta)
}else{
    alert("Ingreso numeros fuera del rango")
}

