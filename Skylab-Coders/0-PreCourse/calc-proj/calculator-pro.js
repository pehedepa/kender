// DECLARACION VARIABLES GLOBALES
let arrayResultados = [];

function calc() {
    let resultSuma;
    let resultResta;
    let resultMultip;
    let resultDiv;
    let resultRaiz;
    let operadores = arguments;
    if (operadores.length === 1) {
        resultRaiz = raizCuadradaCalculo(operadores);
        console.log(`La raíz cuadrada de : ${arguments[0]} es ${resultRaiz}`);
        arrayResultados.push({
            'Cifra': operadores[0],
            'Raiz Cuadrada': resultRaiz.toFixed(3)
        });
    } else {
        resultSuma = sumaCalculo(operadores);
        resultResta = restaCalculo(operadores);
        resultMultip = multipCalculo(operadores);
        resultDiv = divCalculo(operadores);
        imprimirResultadosPorConsola(operadores, resultSuma, resultResta, resultMultip, resultDiv);
        guardarResultadosEnArray(operadores, resultSuma, resultResta, resultMultip, resultDiv);
    }
}

// FUNCIONES OPERACIONALES

function sumaCalculo(nArgumentos) {
    let calculo = 0;
    let arraySuma = Array.from(nArgumentos);
    arraySuma.forEach(function(valorActual, indiceArray) {
        calculo += Number(arraySuma[indiceArray]);
    });
    return calculo;
}

function restaCalculo(nArgumentos) {
    let calculo = 0;
    let arrayResta = Array.from(nArgumentos); 
    arrayResta.forEach(function(valorActual, indiceArray) {
        if (indiceArray === 0) calculo = valorActual;
        else calculo -= valorActual;
    });
    return calculo;
}

function multipCalculo(nArgumentos) {
    let calculo = 1;
    let arrayMultip = Array.from(nArgumentos);
    arrayMultip.forEach(function(valorActual, indiceArray) {
        calculo *= Number(arrayMultip[indiceArray]);
    });
    return calculo;
}

function divCalculo(nArgumentos) {
    let calculo = 0;
    let arrayDiv = Array.from(nArgumentos);
    arrayDiv.forEach(function(valorActual, indiceArray) {
        if (indiceArray === 0) calculo = valorActual;
        else calculo /= valorActual;
    });
    return calculo;
}

function raizCuadradaCalculo (argumento) {
    let calculo = Math.sqrt(argumento[0]);
    return calculo;
}

// FUNCIONES GLOBALES

function imprimirResultadosPorConsola(operadores, resultSuma, resultResta, resultMultip, resultDiv) {
    console.log('Resultado Suma: ' + resultSuma.toFixed(3));
    console.log('Resultado Resta: ' + resultResta.toFixed(3));
    console.log('Resultado Multiplicacion: ' + resultMultip.toFixed(3));
    console.log('Resultado Division: ' + resultDiv.toFixed(3));
    console.log('El nº de argumentos es de: ' + operadores.length);
}

function guardarResultadosEnArray (operadores, resultSuma, resultResta, resultMultip, resultDiv) {
        arrayResultados.push({
            'Agumentos': operadores,
            'Suma': resultSuma.toFixed(3),
            'Resta': resultResta.toFixed(3),
            'Multiplicacion': resultMultip.toFixed(3),
            'Division': resultDiv.toFixed(3),
        });
}