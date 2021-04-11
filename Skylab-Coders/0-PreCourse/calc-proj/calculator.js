
let num1 = 0;
let num2 = 0;
let listaResult = [];

function ask() {

    let exit = false;
    let n = 0;
    let max = 10;
    
    while (n < max && !exit) {
        num1 = Number(window.prompt('Introduzca el primer número')); 
        num2 = Number(window.prompt('Introduzca el segundo número')); 
            if (Number.isNaN(num1) || Number.isNaN(num2)) {
                alert ('Debe introducir exclusivamente números');
            } else if (num1 !== 0 && num2 === 0) {
                raizCuadrada(num1);
                exit = true;
            } else if (num1 === 0 && num2 === 0) {
                alert ('Sendos números no pueden ser 0');
            } else {
                calculadora(num1, num2);
                exit = true;
            }
    }
    retry();    
}

ask();

function calculadora(num1,num2) {
    let resultSuma = num1 + num2;
    let resultResta = num1 - num2;
    let resultMulti = num1 * num2;
    let resultDiv = num1 / num2;
    
    console.log(resultSuma.toFixed(3));
    console.log(resultResta.toFixed(3));
    console.log(resultMulti.toFixed(3));
    console.log(resultDiv.toFixed(3));
    listaResult.push({
        'Cifra1' : num1.toFixed(3),
        'Cifra2' : num2.toFixed(3), 
        'Suma' : resultSuma.toFixed(3), 
        'Resta' : resultResta.toFixed(3), 
        'Multiplicacion' : resultMulti.toFixed(3), 
        'Division' : resultDiv.toFixed(3)})
    }

function raizCuadrada(num1) {
    let resultRaiz = Math.sqrt(num1);
    console.log(resultRaiz.toFixed(3));
    listaResult.push({ 'Cifra1' : num1.toFixed(3),'Raiz Cuadrada' : resultRaiz.toFixed(3) })
    }

function retry() {
    let respuesta = window.confirm('¿Desea volver a ejecutar cálculos?');
    if (respuesta) {
        ask();
    } else {
        alert ('Gracias por utilizar nuestros servicios');
    }
}