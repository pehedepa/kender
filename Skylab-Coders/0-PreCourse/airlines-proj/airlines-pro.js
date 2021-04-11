// DECLARACION VARIABLES GLOBALES
let user = '';
let root = false;
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
    let exit = false;
    while (!exit) {
        user = checkPromptRulesString ('Por favor, Introduzca su nombre (o ROOT para acceder como Administrador).');
        if (user === null) return;
        if (user.toLowerCase() === 'root') {
            alert ('Tiene acceso a las opciones de administrador.');
            root = true;
            exit = true;
        } else {     
            exit = true;
            break;
        }
    }
    exit = false;
    menuPrincipal();      
    while(!exit) {
        let ask = checkPromptRulesNumber('Introduzca el nº correspondiente a la opción deseada', false);
        if (ask !== 9) menuPrincipal();
        switch(ask) {
            case 1:
                mostrarTodosVuelos();
                break;
            case 2:
                mostrarEscala();
                break;
            case 3:
                mostrarUltimosDestinos();
                break;
            case 4:
                mostrarCosteMedio();
                break;
            case 5:
                mostrarVuelosPorPrecio();
                break;
            case 6: 
                mostrarVueloPorId(true);
                break;
            case 9:
                if (root) adminMain();
                else alert('Permiso denegado.');
                break;
            case 0:
            case null:
                console.log('Muchas gracias por su consulta, ' + user + '.');
                exit = true;
                break;
            default:
                alert('Por favor, introduzca una opción válida para proseguir con la consulta.');
                break;
        }
    }          
}

// FUNCIONES MENU PRINCIPAL
function mostrarTodosVuelos() {
    console.log ('----- Listado de todos los vuelos disponibles -----');
    for (let i = 0; i < flights.length; i++) {
        imprimirVueloEnConsola(i, true);   
    }
}

function mostrarEscala() {
    console.log('----- Los siguientes vuelos efectuan escala -----');
        for (let i = 0; i < flights.length; i++) {
            if (flights[i].scale) imprimirVueloEnConsola(i, false);
        }
}

function mostrarUltimosDestinos() {
    console.log ('----- Últimos destinos del día actual -----');
    for (let i = flights.length -5; i < flights.length; i++) { 
        imprimirVueloEnConsola(i, true);
    }
}

function mostrarCosteMedio() {
    let precioMedio =  0;
    for (i = 0; i < flights.length; i++) {
        precioMedio += flights[i].cost;
    }
    let resultPrecioMedio = Math.round((Number(precioMedio) / Number(flights.length -1)) * 100) / 100;
    console.log ('----- Cálculo de precio medio de los vuelos del día actual -----\nEl precio medio de los vuelos es de: ' + Number(resultPrecioMedio.toFixed(2)) + '€');
}

function mostrarVuelosPorPrecio() { 
    let exit = false;
    let askTipoOperacion = '';
    let askCantidadOperacion = 0;
    while (!exit) {
        askTipoOperacion = checkPromptRulesString('Introduzca el término MENOR, MAYOR o IGUAL para determinar el criterio de búsqueda respecto al precio del vuelo.');
        if (askTipoOperacion === null) return;
        askCantidadOperacion = checkPromptRulesNumber('Introduzca la cantidad para inicializar la búsqueda de vuelos que cumplan el criterio especificado anteriormente.', true);
        if (askCantidadOperacion === null) return;
        else if (askTipoOperacion.toLowerCase() === 'menor' || askTipoOperacion.toLowerCase() === 'mayor' || askTipoOperacion.toLowerCase() === 'igual') {
            exit = true;
            break;
        }
    }
    console.log('----- Los siguientes vuelos cumplen el criterio de búsqueda ' + askTipoOperacion.toUpperCase() + ' que ' + askCantidadOperacion + '€ -----');
    for (let i = 0; i < flights.length; i++) {
        switch (askTipoOperacion.toLowerCase()) {
            case 'menor' :
                if (flights[i].cost < askCantidadOperacion) imprimirVueloEnConsola(i, true);
                    exit = true;
                    break;
            case 'mayor' :
                if (flights[i].cost > askCantidadOperacion) imprimirVueloEnConsola (i, true);
                    exit = true;
                    break;
            case 'igual':
                if (flights[i].cost == askCantidadOperacion) imprimirVueloEnConsola (i, true);
                    exit = true;
                    break;
            case null:
            case 'default':
                break; 
        }
    }    
}

function mostrarVueloPorId(check) {
    console.log('----- A continuación se mostrará el vuelo por su ID -----');
    let ask = checkPromptRulesNumber('Introduzca el ID del vuelo.', false);
    if (ask === null) return;
    for (i = 0; i < flights.length; i++) {
        if (flights[i].id === Number(ask)) {
            let vueloIdEncontrado = Number(ask);
            imprimirVueloEnConsola(i, true);
            if (root && !check) {
                eliminarVueloPorId(vueloIdEncontrado);
            } else if (!root && check || root && check) alert ('Muchas gracias por su compra.');
            return;
        }
    }
    alert ('No se encuentran vuelos con esta referencia.');
}

// FUNCIONES ESPECIFICAS DE ADMINISTRADOR
function adminMain() {
    let exit = false;
    while (!exit) {
        menuAdministrador();
        let ask = checkPromptRulesNumber('Introduzca el nº correspondiente a la opción deseada', false);        
        switch(ask) {
            case 1: 
                introducirNuevoVuelo();
                break;
            case 2:
                mostrarVueloPorId(false);
                break;  
            case 0:
            case null:
                menuPrincipal();
                exit = true;
                break;
            default:
                alert('Por favor, introduzca una opción válida para proseguir con su consulta.');
                break;
        }
    }          
}

function introducirNuevoVuelo() {
    let exit = false;
    let idNuevoVuelo;
    while (!exit) {
        idNuevoVuelo = checkPromptRulesNumber('Introduzca el ID del vuelo.', false);
        if (idNuevoVuelo === null) return;
        if (flights.findIndex(f => f.id === idNuevoVuelo) >= 0) {
            alert ('El ID introducido corresponde a un vuelo ya existente.');
        } else {
            exit = true;
        }
    }    
    let fromNuevoVuelo = checkPromptRulesString('Introduzca la ciudad de origen.');
    if (fromNuevoVuelo === null) return;
    let toNuevoVuelo = checkPromptRulesString('Introduzca la ciudad de destino.');        
    if (toNuevoVuelo === null || fromNuevoVuelo.toLowerCase() === toNuevoVuelo.toLowerCase()) return;
    let costNuevoVuelo = checkPromptRulesNumber('Introduzca el coste del vuelo.', true);
    if (costNuevoVuelo === null) return;
    else if (costNuevoVuelo < 0) {
        alert ('El precio del vuelo no puede ser un número negativo.');
        return;
    }
    let scaleNuevoVuelo = Boolean(window.confirm('¿Efectúa escala el vuelo? ACEPTAR(S)/CANCELAR(N).'));
    if (flights.length >= 15) alert ('Se ha llegado al máximo número de vuelos en una misma jornada.');
    else { 
    alert ('Nuevo vuelo creado de forma satisfactoria.');
    flights.push({
        id: idNuevoVuelo, 
        to: toNuevoVuelo, 
        from:fromNuevoVuelo, 
        cost:costNuevoVuelo, 
        scale:scaleNuevoVuelo
    });
    exit = true;
    }
}

function eliminarVueloPorId(vueloIdEncontrado) {
    let haceEscala = true;
    let encontrarIndicePorId = flights.findIndex(f => f.id === vueloIdEncontrado);
    if (flights[encontrarIndicePorId].scale) {
        haceEscala = true;
    } else {
        haceEscala = false;
    }
    alert('El vuelo seleccionado ha sido borrado de forma satisfactoria.');
    flights.splice(encontrarIndicePorId, 1);
}

// FUNCIONES GLOBALES
function menuPrincipal() {
    console.clear();
    console.log ('Bienvenido/a, ' + user + '.' +'\n\n---- Menú principal de Aerolíneas Macuto ----\n\n1. Consulta de vuelos.\n2. Consulta de vuelos con escala.\n3. Consulta de los últimos 5 vuelos del dia.\n4. Cálculo de coste medio de todos los vuelos.\n5. Buscar vuelos por precio.\n6. Compra de vuelo por ID\n----------------------------------------------\n9. Herramientas de administrador.\n0. Finalizar.');
}

function menuAdministrador() {
    console.clear();
    console.log ('Bienvenido/a, ' + user + '.' +'\n\n---- Menú de ADMINISTRADOR ----\n\n1. Introducir nuevo recorrido\n2. Eliminar vuelo por ID\n----------------------------------------------\n0. Volver al Menú Principal');
}

function imprimirVueloEnConsola (i,escala) {
    let txt = (escala) ? (flights[i].scale) ? " y hace escala." : " y no realiza escala." : "";
    console.log('El vuelo nº ' + flights[i].id + ' con origen: ' + flights[i].from + ' y destino: ' + flights[i].to + ' tiene un coste de ' + flights[i].cost + txt);
}

function checkPromptRulesString (promptString) {
    let exit = false;
    while (!exit) {
        let ask = window.prompt(promptString);
        if (ask === null) {
            return null;
        } else if (!Number.isNaN(Number(ask)) || ask === '') {
            alert('Debe introducir carácteres.');
        } else {
            exit = true;
            return ask;
            
        }
    }   
}

function checkPromptRulesNumber (promptNumero, decimal) {
    let exit = false;
    while (!exit) {
        let ask = window.prompt(promptNumero);
        if (ask === null) {
            return null;
        } else if (Number.isNaN(Number(ask))) {
            alert ('Debe introducir exclusivamente números.');
        } else if (Number(ask) % 1 != 0 && !decimal) {
            alert ('Debe introducir un número entero.');
        } else {
             exit = true;
             return Math.round (Number(ask) * 100) / 100;
        }
    }
}

// FUNCTION CALL
main();
