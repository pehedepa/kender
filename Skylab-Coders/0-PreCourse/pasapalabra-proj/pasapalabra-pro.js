// DECLARACION VARIABLES GLOBALES
const arrDefaultQuestions = [
    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien."},
    { letter: "a", answer: "aquiles", status: 0, question: "CON LA A. Personaje de la mitologia griega quien posee un punto débil localizado en su talón."},
    { letter: "a", answer: "astrologia", status: 0, question: "CON LA A. Pseudo-ciencia. En ocasiones confundida con la Astronomía."},
    { letter: "a", answer: "anfitrion", status: 0, question: "CON LA A. Persona o entidad que recibe en su país o en su sede habitual a invitados o visitantes."},
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    { letter: "b", answer: "balcon", status: 0, question: "CON LA B. Elemento mobiliario el cual es usado por los turístas ingleses para dar aplicación práctica a la ley Darwin."},
    { letter: "b", answer: "bucefalo", status: 0, question: "CON LA B. Nombre del caballo de Alejandro Magno."},
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
    { letter: "c", answer: "ciro", status: 0, question: "CON LA C. Nombre del fundador de la dinastía aqueménida persa."},
    { letter: "c", answer: "cesar", status: 0, question: "CON LA C. Nombre propio. Sinónimo de kaiser y zar."},
    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida."},
    { letter: "d", answer: "donostia", status: 0, question: "CON LA D. Ciudad reconocida a su vez por el nombre San Sebastián."},
    { letter: "d", answer: "dulcinea", status: 0, question: "CON LA D. Nombre. Personaje femenino e imaginario de 'Don Quijote de la Mancha', originaria de El Toboso."},
    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación."},
    { letter: "e", answer: "eureka", status: 0, question: "CON LA E. Proviene del griego. Expresión de júbilo al producirse un hallazgo."},
    { letter: "e", answer: "einstein", status: 0, question: "CON LA E. Nombre. Desarrolló la teoría de la relatividad."},
    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad."},
    { letter: "f", answer: "fosforo", status: 0, question: "CON LA F. Elemento de la tabla periódica. Sinónimo de cerilla."},
    { letter: "f", answer: "filatelia", status: 0, question: "CON LA F. Afición por coleccionar y clasificar sellos, sobres y otros documentos postales."},
    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas."},
    { letter: "g", answer: "goliat", status: 0, question: "CON LA G. Personaje bíblico quien sucumbe ante David por el tiro de su honda."},
    { letter: "g", answer: "gilipollas", status: 0, question: "CON LA G. Insulto proviniente de la interacción del Sr. Gil con sus dos hijas."},
    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento."},
    { letter: "h", answer: "hegira", status: 0, question: "CON LA H. Dicho del año en el que empieza el calendario musulmán."},
    { letter: "h", answer: "holocausto", status: 0, question: "CON LA H. Acción sufrida por el pueblo judio durante la II Guerra Mundial."},
    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano."},
    { letter: "i", answer: "imaginacion", status: 0, question: "CON LA I. Sinónimo. Capacidad de abstracción que, por desgracia, va mermando con el paso de los años."},
    { letter: "i", answer: "inflamable", status: 0, question: "CON LA I. Dícese de un objeto no flamable."},
    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba."},
    { letter: "j", answer: "jerico", status: 0, question: "CON LA J. Urbe bíblica famosa por su alta muralla."},
    { letter: "j", answer: "jeroglifico", status: 0, question: "CON LA J. Pictograma. Forma primitiva de escritura."},
    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria."},
    { letter: "k", answer: "kilogramo", status: 0, question: "CON LA K. Unidad básica de masa del Sistema Internacional de Unidades."},
    { letter: "k", answer: "karaoke", status: 0, question: "CON LA K. Diversión consistente en interpretar una canción sobre un fondo musical grabado."},
    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo."},
    { letter: "l", answer: "liguria", status: 0, question: "CON LA L. Región. Nombre por el cual era conocido el terrorio circundante a la ciudad de Génova."},
    { letter: "l", answer: "locomotora", status: 0, question: "CON LA L. Máquina que, montada sobre ruedas y movida de ordinario por vapor, arrastra los vagones de un tren."},
    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas."},
    { letter: "m", answer: "mimo", status: 0, question: "CON LA M. Intérprete teatral que actúa sirviéndose exclusiva o preferentemente de gestos y movimientos corporales."},
    { letter: "m", answer: "mamifero", status: 0, question: "CON LA M. Clasificación del reino animal. El ser humano pertenece a ella."},
    { letter: "m", answer: "mecano", status: 0, question: "CON LA M. Grupo de música español de los 80, formado por Ana Torroja y los hermanos Cano."},
    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia."},
    { letter: "n", answer: "nicho", status: 0, question: "CON LA N. Hueco practicado en un muro para alojar algo dentro, especialmente para depositar cadáveres o sus cenizas."},
    { letter: "n", answer: "nagasaki", status: 0, question: "CON LA N. Segunda ciudad japonesa en ser bombardeada con una bomba atómica."},
    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
    { letter: "ñ", answer: "señorita", status: 0, question: "CONTIENE LA Ñ. Como tratamiento de cortesía aplicado a la mujer soltera."},
    { letter: "ñ", answer: "muñeco", status: 0, question: "CONTIENE LA Ñ. Figura de persona, hecha generalmente de plástico, trapo o goma, que sirve de juguete o de adorno."},
    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien."},
    { letter: "o", answer: "oslo", status: 0, question: "CON LA O. Capital de Noruega."},
    { letter: "o", answer: "ostrogodo", status: 0, question: "CON LA O. Del pueblo godo que estuvo establecido al oriente del Dniéper y que fundó un reino en Italia."},
    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft."},
    { letter: "p", answer: "particula", status: 0, question: "CON LA P. Parte pequeña de materia."},
    { letter: "p", answer: "pizpireta", status: 0, question: "CON LA P. Dícese de una persona alegre, vivaz y algo coqueta."},
    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche."},
    { letter: "q", answer: "quechua", status: 0, question: "CON LA Q. De un pueblo indígena que al tiempo de la colonización del Perú habitaba la región del Cuzco."},
    { letter: "q", answer: "quiche", status: 0, question: "CON LA Q. Pastel hecho con una base de pasta sobre la que se pone una mezcla de huevos, leche y otros ingredientes y se cuece al horno."},
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor."},
    { letter: "r", answer: "rumiante", status: 0, question: "CON LA R. Dicho de un mamífero que se alimenta de vegetales, carecen de incisivos en la mandíbula superior y tienen el estómago compuesto de cuatro cavidades."},
    { letter: "r", answer: "recesion", status: 0, question: "CON LA R. Depresión de las actividades económicas en general que tiende a ser pasajera."},
    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático."},
    { letter: "s", answer: "supernova", status: 0, question: "CON LA S. Explosión de una estrella súper gigante roja en sus capas externas."},
    { letter: "s", answer: "sarampion", status: 0, question: "CON LA S. Enfermedad febril, contagiosa y muchas veces epidémica, que se manifiesta por multitud de manchas pequeñas y rojas."},
    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984."},
    { letter: "t", answer: "testificar", status: 0, question: "CON LA T. Verbo. Afirmar o probar de oficio algo, con referencia a testigos o documentos auténticos."},
    { letter: "t", answer: "terremoto", status: 0, question: "CON LA T. Sacudida violenta de la corteza y manto terrestres, ocasionada por fuerzas que actúan en el interior de la Tierra."},
    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914."},
    { letter: "u", answer: "unicornio", status: 0, question: "CON LA U. Animal fabuloso que fingieron los antiguos poetas, con forma de caballo y con un cuerno recto en mitad de la frente."},
    { letter: "u", answer: "agur", status: 0, question: "CONTIENE LA U. Del euskera. Usado como fórmula de despedida."},
    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa."},
    { letter: "v", answer: "victor", status: 0, question: "CON LA V. Nombre propio masculino. Dicho de quien vence."},
    { letter: "v", answer: "volcan", status: 0, question: "CON LA V. Apertura en la tierra, y más comúnmente en una montaña, por donde salen humo, llamas y materias encendidas o derretidas."},
    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso."},
    { letter: "w", answer: "washington", status: 0, question: "CON LA W. Apellido del primer presidente de los EEUU."},
    { letter: "w", answer: "wolframio", status: 0, question: "CON LA W. Nombre alternativo con el que se conoce al elemento químico Tungsteno."},
    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética."},
    { letter: "x", answer: "xilofono", status: 0, question: "CON LA X. Instrumento musical de percusión formado por láminas ordenadas horizontalmente, que se hacen sonar golpeándolas con dos baquetas."},
    { letter: "x", answer: "xenofobo", status: 0, question: "CON LA X. Dicho de una persona que siente o manifiesta aversión al extranjero."},
    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos."},
    { letter: "y", answer: "yesca", status: 0, question: "CON LA Y. Materia muy seca, comúnmente de trapo quemado, cardo u hongos secos, y preparada de suerte que cualquier chispa prenda en ella."},
    { letter: "y", answer: "yihad", status: 0, question: "CON LA Y. Guerra santa de los musulmanes."},
    { letter: "y", answer: "cipayo", status: 0, question: "CONTIENE LA Y. Soldado indio de los siglos XVIII y XIX al servicio de Francia, Portugal y Gran Bretaña."},
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional."},
    { letter: "z", answer: "zerg", status: 0, question: "CON LA Z. Raza insectoide controlada por una Supermente en el videojuego StarCraft."},
    { letter: "z", answer: "zodiaco", status: 0, question: "CON LA Z. Raza insectoide controlada por una Supermente en el videojuego StarCraft."},
    { letter: "z", answer: "zangano", status: 0, question: "CON LA Z. Zona celeste por cuyo centro pasa la eclíptica y que comprende las doce constelaciones que recorre el Sol en su curso anual aparente."}
]
let arrDefinedQuestions = [];
let arrCurrentQuestions = [];
let arrHighScore = [];
let passingCounter = 0;
let user = { name: '', points: 0, matches: 0};

//MAIN
function main() {
    let iteration;
    let actualResult;
    let exit = false;
    console.clear();
    askUserName(); 
    defineRandomQuestions();
    printRosco(true);
    while (!exit) {
        iteration = iterateQuestionsArray();
        if (iteration === 'exit') break;
        printRosco(false);
        actualResult = promptAskQuestion(iteration);
        changeStatusArray(iteration, actualResult);
        printRosco(false);
        if (actualResult === -1) {
            showStats();
            return;
        } else if (actualResult === 1) passingCounter += 1;
    }
    console.clear();
    showStats();
    calculateScore(howManySucceed, howManyMistaken);
    loadUserData();
    saveUserData();
    printRanking();
}

//FUNCIONES OPERACIONALES
function generateRandomNumber(minimum, maximum) {
    let numberGenerated;
    minimum = Math.ceil(minimum);
    maximum = Math.floor(maximum);
    numberGenerated = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
    return numberGenerated;
}
function iterateQuestionsArray() {
    arrCurrentQuestions = arrDefinedQuestions.filter(element => element.status === 0);
    if (arrCurrentQuestions.length === 0) {
        let input = isRoscoTrulyDone();
            if (input) arrCurrentQuestions = arrDefinedQuestions.filter(element => element.status === 0);
            else if (!input) return 'exit';
    }
    for (let i = 0; i < arrCurrentQuestions.length; i++) {
        return i;
    }
}
function isRoscoTrulyDone() {
    arrPassedWords = arrDefinedQuestions.filter(element => element.status === 3);
    if (arrPassedWords.length !== 0) {
       for (let i = 0; i < arrPassedWords.length; i++) {
            arrPassedWords[i].status = 0;
        }
    return true;
    }
    return false;
}
function promptAskQuestion(iteration) {
    let question = arrCurrentQuestions[iteration].question;
    let answer = arrCurrentQuestions[iteration].answer;
    let typedAnswer = window.prompt(question);
    if (typedAnswer === null) return false;
    if (typedAnswer.toUpperCase() === 'END') return -1;
    else if (typedAnswer.toUpperCase() === 'PASAPALABRA') return 1;
    else if (typedAnswer.toLowerCase() === answer) return true;
    else return false;
}
function changeStatusArray(iteration, actualResult) {
    if (actualResult === -1) return -1;
    if (actualResult === 1) {
        alert ('PASAPALABRA en la letra: [' + arrCurrentQuestions[iteration].letter.toUpperCase() + '] > (-5p.)');
        arrCurrentQuestions[iteration].status = 3;
        return;
    } else if (actualResult) {
        alert('Acierto en la letra: [' + arrCurrentQuestions[iteration].letter.toUpperCase() + '] > (+50p.)');
        arrCurrentQuestions[iteration].status = 1;
    } else {
        alert ('MEEEEEC !! Error en la letra: [' + arrCurrentQuestions[iteration].letter.toUpperCase() + '] > (-35p.)');
        arrCurrentQuestions[iteration].status = 2;
    }
}

// FUNCIONES GLOBALES
function askUserName() {
    let exit = false;
    while (!exit) {
        askPrompt = window.prompt ('Por favor, introduzca su nombre:');
        if (askPrompt === null) return null;
        if (askPrompt.length === 0 || !Number.isNaN(Number(askPrompt))) { 
            alert ('Por favor, introduzca un nombre válido.');
        } else {  
            user.name = askPrompt;
            exit = true;
        }
    }
}
function defineRandomQuestions() {
    let arrLetter = [];
    let iteratingLetter;
    let incrementIMaxRN;
    for (let i = 0; i < arrDefaultQuestions.length; i++) {
        iteratingLetter = arrDefaultQuestions[i].letter;
        arrLetter = arrDefaultQuestions.filter(char => char.letter === iteratingLetter);
        incrementIMaxRN = arrLetter.length -1;
        i += incrementIMaxRN;
        arrDefinedQuestions.push(arrLetter[generateRandomNumber(0,incrementIMaxRN)]);
    }
}
function printRosco(firstTime) {
    let arrIterating = arrDefinedQuestions;
    if (!firstTime) arrIterating = arrCurrentQuestions;
    console.clear();
    let drawPanel = 'PASAPALABRA: ' + '\n|-------------------------------------|\n'
    for(let i = 0; i < arrIterating.length; i++){
        let ini = i%9 == 0 ? "| " : "";
        let fin = i%9 == 8 ? "|\n" : "";
        let n = (arrIterating[i].letter).toString().padStart(1," ");
        drawPanel += ini + (arrIterating[i].letter ? "[" + n + "]" : " " + n + " ") + " " + fin;
    }
    drawPanel += "\n|-------------------------------------|\n";
    console.log(drawPanel);
}

function printRanking() {
    console.log('\n----- >> ALL-TIME PASS-WORD HIGHSCORE << -----\n\n>> TOP 10\n');
    for (let i = 0; i < arrHighScore.length; i++) {
        console.log('||  Score:  ' + arrHighScore[i].points + '   Player:  ' + arrHighScore[i].name + '    Aciertos:  ' + arrHighScore[i].matches);
    }
}
function showStats() {
    playedWords = 27 - Number(arrCurrentQuestions.length);
    arrSucceed = arrDefinedQuestions.filter(element => element.status === 1);
    arrMistaken = arrDefinedQuestions.filter(element => element.status === 2);
    howManySucceed = Number(arrSucceed.length);
    howManyMistaken = Number(arrMistaken.length);
    console.log ('---------------------------\nPalabras Jugadas: ' + playedWords + '\nAciertos: ' + howManySucceed + '\n---------------------------\n');  
}
function calculateScore(howManySucceed, howManyMistaken) {
    score = 1000;
    let addPointsSucceed = 50;
    let subPointsMistake = 35;
    let subPointsPassingWord = 5;
    score += (addPointsSucceed * howManySucceed);
    score -= (subPointsMistake * howManyMistaken) + (subPointsPassingWord * passingCounter);
    user.points = score;
    user.matches = howManySucceed;
    console.log ('---------------------------\nPuntuación Total: ' + score + '\nErrores: ' + howManyMistaken + '\nPasapalabras: ' + passingCounter);
}
function saveUserData() {
    arrHighScore.push(user);
    arrHighScore.sort((a, b) => {
        return b.points - a.points;
    });
    if (arrHighScore.length <= 10) {
        window.localStorage.setItem("playerScore",JSON.stringify(arrHighScore));
    } else {
        arrHighScore.pop();
        window.localStorage.setItem("playerScore",JSON.stringify(arrHighScore));
    }
}
function loadUserData() {
    let retrieveArrHighScoreFromLocalStorage = JSON.parse(window.localStorage.getItem("playerScore"));
    for (let i = 0; i < retrieveArrHighScoreFromLocalStorage.length; i++) {
        arrHighScore.push(retrieveArrHighScoreFromLocalStorage[i]);
    }
}

main();
