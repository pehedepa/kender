// DECLARACION VARIABLES GLOBALES
let user = ''
let flights = [
    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } 
];

function main() {
    let exit = false
    while (!exit) {
        user = window.prompt ('Por favor, Introduzca su nombre');
        if (user === null) return;
        if (user.length === 0 || !Number.isNaN(Number(user))) { 
            alert ('Por favor, introduzca un nombre válido.');
        } else {     
            exit = true;
        }
    }
    exit = false;
    console.clear();
    menuPrincipal();      
    while (!exit) {
        let ask = window.prompt('Introduzca el nº correspondiente a la opción deseada');
        switch(ask) {
            case '1': 
                mostrarTodosVuelos();
                break;
            case '2':
                mostrarEscala();
                break;
            case '3':
                mostrarUltimosDestinos();
                break;
            case '4':
                mostrarCosteMedio();
                break;
            case '0':
            case null:
                console.log('Muchas gracias por su consulta, ' + user + '.');
                exit = true;
                break;
            default:
                alert('Por favor, introduzca una opción válida para proseguir con su consulta');
        }
    }          
}

// FUNCIONES MENU
function mostrarTodosVuelos() { 
    menuPrincipal();
    console.log ('---- Listado de todos los vuelos disponibles ----');
    for (let i = 0; i < flights.length; i++) {
        if (!flights[i].scale) {
            console.log('El vuelo nº ' + flights[i].id + ' con origen: ' + flights[i].from + ' y destino: ' + flights[i].to + ' tiene un coste de ' + flights[i].cost + ' y no realiza escala');
        } else {
            console.log('El vuelo nº ' + flights[i].id + ' con origen: ' + flights[i].from + ' y destino: ' + flights[i].to + ' tiene un coste de ' + flights[i].cost + ' y hace escala');
        }   
    }
}

function mostrarEscala() {
    menuPrincipal();
    console.log('----- Los siguientes vuelos efectuan escala -----');
        for (let i = 0; i < flights.length; i++) {
            if (flights[i].scale) {   
            console.log('El vuelo nº ' + flights[i].id + ' con origen: ' + flights[i].from + ' y destino: ' + flights[i].to + ' tiene un coste de ' + flights[i].cost);
            }
        }
}

function mostrarUltimosDestinos() {
    menuPrincipal();
    console.log ('---- Últimos destinos del día actual ----');
    for (let i = flights.length -1; i > flights.length -6; i--) { 
        if (flights[i].scale) {
            console.log('El vuelo nº ' + flights[i].id + ' con origen: ' + flights[i].from + ' y destino: ' + flights[i].to + ' tiene un coste de ' + flights[i].cost + ' y hace escala');
        } else {
            console.log('El vuelo nº ' + flights[i].id + ' con origen: ' + flights[i].from + ' y destino: ' + flights[i].to + ' tiene un coste de ' + flights[i].cost + ' y no realiza escala');
        }
    }
}

function mostrarCosteMedio() {
    menuPrincipal();
    let precioMedio =  0;
    for (i = 0; i < flights.length; i++) {
        precioMedio += flights[i].cost;
    }
    console.log ('---- Cálculo de precio medio de los vuelos del día actual ----\nEl precio medio de los vuelos es de: ' + precioMedio / Number(flights.length -1) + '€');
}

function menuPrincipal() {
    console.clear();
    console.log ('Bienvenido/a, ' + user + '.' +'\n\n---- Menú principal de Aerolíneas Macuto ----\n\n1. Consulta de vuelos.\n2. Consulta de vuelos con escala.\n3. Consulta de los últimos 5 vuelos del dia.\n4. Cálculo de coste medio de todos los vuelos.\n----------------------------------------------\n0. Finalizar');
}

// FUNCTION CALL
main()