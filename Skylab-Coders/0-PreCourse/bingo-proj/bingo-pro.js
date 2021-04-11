// DECLARACION VARIABLES GLOBALES
let bingoCard = [];
let arrNumbersGenerated = [];
let arrHighScore = [];
let line = false;
let lineTurn;
let bingo = false;
let user = { name: '', points: 0};

// MAIN
function main() {
    let recreateBingoCard = true;
    let isThereRanking = loadUserDataInLocalStorage();
    if (isThereRanking === 1) printHighScoreTable();
    let notOkUsername = askUsername();
    if (notOkUsername === null) return;
    createBingoCard();
    printBingoCard();
    while (recreateBingoCard) {
        recreateBingoCard = window.confirm (`¿Desea jugar con otro cartón, ${user.name}?`);
        if (!recreateBingoCard) break;
        createBingoCard();
        printBingoCard();
    }
    alert ('Empieza a rodar el tambor...');
    let exit = false;
    while (!exit) {
        let ask;
        turnSequence();
        if (bingo) {
            printBingoArchieved();
            calculateScore();
            saveUserDataInLocalStorage();
            exit = true;
        }
        else ask = window.confirm (`¿Desea jugar otro turno, ${user.name}?`);
        if (!ask) {
            console.log (`Gracias por jugar, ${user.name}`);
            exit = true;
        }
    }
}

// FUNCIONES OPERACIONALES
function askUsername() {
    let exit = false;
    while (!exit) {
        ask = window.prompt ('Por favor, introduzca su nombre');
        if (ask === null) return null;
        if (ask.length === 0 || !Number.isNaN(Number(ask))) { 
            alert ('Por favor, introduzca un nombre válido.');
        } else {  
            user.name = ask;
            exit = true;
        }
    }
}
function createBingoCard() {
    bingoCard = [];
    for (let i = 0; bingoCard.length <= 14; i++) {
        bingoCard.push ({
            number: generateRandomNumber(1,45, true),
            matched: false
        });
    }
}
function generateRandomNumber(minimum, maximum, defineBingoCard) {
    minimum = Math.ceil(minimum);
    maximum = Math.floor(maximum);
    let numberGenerated = 0;
    let exists = true;
    while (exists) {
        numberGenerated = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
        if (defineBingoCard) {
            exists = (bingoCard.findIndex(f => f.number === numberGenerated) >= 0);
        } else {
            exists = (arrNumbersGenerated.findIndex(f => f === numberGenerated) >= 0);
            if (!exists) arrNumbersGenerated.push (numberGenerated);
        }
    }
    return numberGenerated;
}
function turnSequence() {
    let matchingNumber = false;
    let indexOfMatchingNumber = -1;
    printBingoCard();
    numberGenerated = generateRandomNumber(1, 45, false);
    indexOfMatchingNumber = bingoCard.findIndex(f => f.number === numberGenerated);
    if (indexOfMatchingNumber === -1) {
        printResultNumbers(numberGenerated, matchingNumber);
        return;
    } else {
        bingoCard[indexOfMatchingNumber].matched = true, matchingNumber = true;
        printResultNumbers(numberGenerated, matchingNumber);
        if (!line) isThereLine();
        bingo = isThereBingo();
    }   
}
function isThereLine() {
    line1Counter = 0;
    line2Counter = 0;
    line3Counter = 0;
    for (let i = 0; i < bingoCard.length -10; i++) {
        if (bingoCard[i].matched === true) line1Counter += 1;
    }
    for (let j = 5; j < bingoCard.length -5; j++) {
        if (bingoCard[j].matched === true) line2Counter += 1;
    }    
    for (let k = 10; k < bingoCard.length; k++) {
        if (bingoCard[k].matched === true) line3Counter += 1;
    }
    if (line === false && line1Counter === 5 || line2Counter === 5 || line3Counter === 5) {
        console.log ('Señoras y señores, tenemos LINEA!');
        lineTurn = arrNumbersGenerated.length;
        return line = true;
    }
}
function isThereBingo() {
    return bingoCard.filter(f=> f.matched === true).length === 15;
}
function calculateScore() {
    let bingoStartingPoints = 1000;
    let lineStartingPoints = 200;
    let minTurnsForBingo = 15;
    let minTurnsForLine = 5;
    let maxTurnsForBingo = 45;
    let finalPointsAfterCalc;
    bingoTurn = arrNumbersGenerated.length;
    bingoStartingPoints += bingoStartingPoints * (1-(bingoTurn - minTurnsForBingo) / (maxTurnsForBingo - minTurnsForBingo));
    lineStartingPoints += lineStartingPoints * (1-(lineTurn - minTurnsForLine) / (maxTurnsForBingo - minTurnsForBingo));
    finalPointsAfterCalc = bingoStartingPoints + lineStartingPoints -1000;
    console.log ('Total de puntos obtenidos: ' + Math.floor(finalPointsAfterCalc));
    console.log('La Linea se obtuvo con ' + lineTurn + ' números jugados.');
    console.log('El número total de turnos jugados ha sido de: ' + bingoTurn);
    user.points = Math.floor(finalPointsAfterCalc);
}
function saveUserDataInLocalStorage() {
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
function loadUserDataInLocalStorage() {
    if (localStorage.length === 0) {
        alert ('Aún no hay un ranking establecido.');
        return -1;
    } else {
        let retrieveArrHighScoreFromLocalStorage = JSON.parse(window.localStorage.getItem("playerScore"));
        for (let i = 0; i < retrieveArrHighScoreFromLocalStorage.length; i++) {
            arrHighScore.push(retrieveArrHighScoreFromLocalStorage[i]);
        }
    return 1;
    }
}

// FUNCIONES GLOBALES
function printBingoCard() {
    console.clear();
    let line1 = '';
    let line2 = '';
    let line3 = '';
    for (let i = 0; i < bingoCard.length -10; i++) {
        if (bingoCard[i].matched === true) line1 += ' X ';
        else line1 += ' ' + String(bingoCard[i].number);
    }
    for (let j = 5; j < bingoCard.length -5; j++) {
        if (bingoCard[j].matched === true) line2 += ' X ';
        else line2 += ' ' + String(bingoCard[j].number);
    }    
    for (let k = 10; k < bingoCard.length; k++) {
        if (bingoCard[k].matched === true) line3 += ' X ';
        else line3 += ' ' + String(bingoCard[k].number);
    }
    console.log('\n_____________________\n>> CARTON DE BINGO <<\n_____________________\n\n----------------\n',line1,'\n',line2,'\n',line3,'\n----------------');
}
function printResultNumbers (numberGenerated, matchingNumber) {
    let txt = '';
    printBingoCard();
    if (!matchingNumber) txt = 'y no ha sido premiado.';
    else txt = 'y ha sido PREMIADO !!!';
    console.log('\nEl número extraido del bombo es: ' + numberGenerated, txt);   
}
function printBingoArchieved() {
    console.log(`%c    ________________________________________
    < mooooooooooo-BINGOOOOOO !!!! >
    ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`, "font-family:monospace");
}
function printHighScoreTable() {
    console.clear();
    console.log('\n----- >> ALL-TIME BINGO HIGHSCORE << -----\n\n>> TOP 10\n');
    for (let i = 0; i < arrHighScore.length; i++) {
        console.log('  ||  Score:  ' + arrHighScore[i].points + '   Player:  ' + arrHighScore[i].name);
    }
}
// EXECUTE MAIN
main();