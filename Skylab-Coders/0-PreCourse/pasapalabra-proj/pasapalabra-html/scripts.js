//GLOBAL VARIABLES
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
let arrCurrentQuestion = [];
let arrConvertPassWord = [];
let arrHighScore = [];
let passingCounter = 0;
let user = {name: '', points: 0, matches: 0};

//DOM EVENT LISTENERS
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("input-name").addEventListener("keydown",function(e){
        if (e.key === 'Enter') {
            getUserName();
          }
    });
    document.getElementById("button-name").addEventListener("click",getUserName);
    document.getElementById("button-start").addEventListener("click",startGame);
    document.getElementById("input-answer").addEventListener("keydown",function(e){
        if (e.key === 'Enter') {
            checkAnswer();
          }
    });
    document.getElementById("button-answer").addEventListener("click",checkAnswer);
    document.getElementById("button-password").addEventListener("click",passWord);
});

//SEQUENCE
function getUserName(){
    let userName = document.getElementById("input-name").value;
    if (userName.length === 0 || !Number.isNaN(Number(userName))) { 
        document.getElementById("alert-name").classList.add("show");
        document.getElementById("enter-name").classList.remove("show");
    }
    else{
        user.name = userName;
        document.getElementById("intro").classList.remove("visible");
        document.getElementById("start").classList.add("visible");
        document.getElementById("user-name").innerHTML = user.name;
    }
}

function startGame(){
    document.getElementById("start").classList.remove("visible");
    document.getElementById("circle").classList.add("visible");
    document.getElementById("qa").classList.add("visible");
    defineRandomQuestions();
    arrCurrentQuestion = arrDefinedQuestions.filter(element => element.status === 0)[0];
    loadQuestion();
}

function loadQuestion() {
    document.getElementById("input-answer").value = "";
    document.getElementById("input-answer").focus();
    arrCurrentQuestion = arrDefinedQuestions.filter(element => element.status === 0)[0];
    if (arrCurrentQuestion === undefined) {
        areWeDone(); 
    } else {
    document.querySelector("#question").innerHTML = arrCurrentQuestion.question;
    let currentDiv = document.querySelector(`[data-letter="${arrCurrentQuestion.letter}"]`)
    currentDiv.classList.replace("inactive", "active");
    }
}

function checkAnswer() {
    let currentDiv = document.querySelector(`[data-letter="${arrCurrentQuestion.letter}"]`)
    if (document.getElementById("input-answer").value === arrCurrentQuestion.answer) {
        arrCurrentQuestion.status = 1
        currentDiv.setAttribute("data-status", 1)
        currentDiv.classList.replace("active", "inactive");
    } else {
        arrCurrentQuestion.status = 2
        currentDiv.setAttribute("data-status", 2)
        currentDiv.classList.replace("active", "inactive");
    }
    loadQuestion();
}

function areWeDone() {   
    arrConvertPassWord = arrDefinedQuestions.filter(element => element.status === 3);
    if (arrConvertPassWord.length === 0) {
        calcStats();
        loadUserData();
        saveUserData();
        showScoreRank();
        return;
    } else {
        for (let i = 0; i < arrConvertPassWord.length; i++) {
            arrConvertPassWord[i].status = 0
        }
    }
    arrConvertPassWord = [];
    loadQuestion();
}

function showScoreRank() {
    document.getElementById("circle").classList.remove("visible");
    document.getElementById("qa").classList.remove("visible");
    document.getElementById("ranking").classList.add("visible");
    document.getElementById("username").innerHTML = "Player: " + user.name;
    document.getElementById("score").innerHTML = "Points: " + user.points;
    document.getElementById("matched").innerHTML = "Matches: " + user.matches;
    document.getElementById("passed").innerHTML = "Passed: " + passingCounter;
    for (let i = 0; i < arrHighScore.length; i++) {
        document.getElementById(i+1).innerHTML = 'Top'+ (i+1) + '. ' + arrHighScore[i].name;
    }
}
    
//OPERATIVE FUNCTIONS
function generateRandomNumber(minimum, maximum) {
    let numberGenerated;
    minimum = Math.ceil(minimum);
    maximum = Math.floor(maximum);
    numberGenerated = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
    return numberGenerated;
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

function passWord() {
    let currentDiv = document.querySelector(`[data-letter="${arrCurrentQuestion.letter}"]`)
    passingCounter += 1;
    arrCurrentQuestion.status = 3
    currentDiv.setAttribute("data-status", 0)
    currentDiv.classList.replace("active", "inactive");
    loadQuestion();   
}

function calcStats() {
    playedWords = 27 - Number(arrDefinedQuestions.length);
    arrSucceed = arrDefinedQuestions.filter(element => element.status === 1);
    arrMistaken = arrDefinedQuestions.filter(element => element.status === 2);
    howManySucceed = Number(arrSucceed.length);
    howManyMistaken = Number(arrMistaken.length);
    calcScore(howManySucceed, howManyMistaken);
}

function calcScore(howManySucceed, howManyMistaken) {
    score = 1000;
    let addPointsSucceed = 50;
    let subPointsMistake = 35;
    let subPointsPassingWord = 5;
    score += (addPointsSucceed * Number(howManySucceed));
    score -= (subPointsMistake * Number(howManyMistaken)) + (subPointsPassingWord * passingCounter);
    user.points = Number(score);
    user.matches = Number(howManySucceed);
}

function saveUserData() {
    arrHighScore.push(user);
    arrHighScore.sort((a, b) => {
        return b.points - a.points; //RETURN FUCKER
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
