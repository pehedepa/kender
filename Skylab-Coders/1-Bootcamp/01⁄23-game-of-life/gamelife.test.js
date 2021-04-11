let tableArr = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
];

const tableRowMin = 0;
const tableRowMax = 5;
const tableColumnMin = 0;
const tableColumnMax = 5;

class cell {
    constructor(state, axisX, axisY) {
        this.state = state;
        this.axisX = axisX;
        this.axisY = axisY;
        this.neighbours = 0;
    }
    countNeighbours() {
        let isTop = this.axisX === 0,
            isLeft = this.axisY === 0,
            isBottom = this.axisX === tableRowMax,
            isRight = this.axisY === tableColumnMax,
            counter = 0;
        if(!isTop && (tableArr[this.axisX-1][this.axisY].state === 1)) counter++;
        if(!isTop && !isRight && (tableArr[this.axisX-1][this.axisY+1].state === 1)) counter++;
        if(!isRight && (tableArr[this.axisX][this.axisY+1].state === 1))  counter++;
        if(!isRight && !isBottom && (tableArr[this.axisX+1][this.axisY+1].state === 1)) counter++; 
        if(!isBottom && (tableArr[this.axisX+1][this.axisY].state === 1)) counter++;
        if(!isBottom && !isLeft && (tableArr[this.axisX+1][this.axisY-1].state === 1)) counter++;
        if(!isLeft && (tableArr[this.axisX][this.axisY-1].state === 1)) counter++;
        if(!isLeft && !isTop && (tableArr[this.axisX-1][this.axisY-1].state === 1)) counter++;
        return this.neighbours = counter;
    }
}

function generateRandomNumber(minimum, maximum) {
    let numberGenerated;
    minimum = Math.ceil(minimum);
    maximum = Math.floor(maximum);
    numberGenerated = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
    return numberGenerated;
}

function populateBoard() {
    for (let i = 0; i < tableArr.length; i++) {
        for (let j = 0; j < tableArr.length; j++) {
            let chance = generateRandomNumber(0,1);
            if (chance === 1) {
                tableArr[i][j] = new cell (1, i, j);
            } else {
                tableArr[i][j] = new cell (0, i, j);
            }
        }
    }
}

function cellStatus() {
    for (let i = 0; i < tableArr.length; i++) {
        for (let j = 0; j < tableArr.length; j++) {   
            tableArr[i][j].countNeighbours(); 
        }
    }  
}

function cellDeadOrAlive() {
    for (let i = 0; i < tableArr.length; i++) {
        for (let j = 0; j < tableArr.length; j++) {  
            if ((tableArr[i][j].state === 1) && (tableArr[i][j].neighbours > 3) || (tableArr[i][j].neighbours === 0)) {
                tableArr[i][j].state = 0;
            }
            else if ((tableArr[i][j].state === 0) && (tableArr[i][j].neighbours === 3)) {
                tableArr[i][j].state = 1;
            }
        }
    }
}

function resetTable() {
    for (let i = 0; i < tableArr.length; i++) {
        for (let j = 0; j < tableArr.length; j++) {
            tableArr[i][j] = 0;
        }
    }
}

describe('Given an array of 6x6 filled with zeroes', function() {
    describe('When filled with \'Cell\' objects with a \'neighbours\' property.', function() {
        test('Then the array position[5][0] will be a \'Cell\' object with its \'neighbours\' property at 0.', function() {
            //ARRANGE
            resetTable();
            //ACT
            populateBoard();
            //ASSERT
            expect(tableArr[5][0].neighbours).toEqual(0);
        })
    })

    describe('When the array is filled with \'Cells\' that its status is always alive(1).', function() {
        test('Then a positioned \'Cell\' in tableArr[0][3] should have \'state = 1\'', function() {
            //ARRANGE
            resetTable();
            function allCellsAlive() {
                for (let i = 0; i < tableArr.length; i++) {
                    for (let j = 0; j < tableArr.length; j++) {
                        tableArr[i][j] = new cell (1, i, j);
                    }
                }
            }
            //ACT
            allCellsAlive();
            //ASSERT
            expect(tableArr[0][3].state).toEqual(1);
        })
    })

    describe('When the array has been populated with \'Cell\' objects with its \'status = 1\'', function() {
        test('Then a \'Cell\' in tableArr[0][5] should have [3] neighbours after calculations.', function() {
            //ARRANGE
            resetTable();
            function allCellsAlive() {
                for (let i = 0; i < tableArr.length; i++) {
                    for (let j = 0; j < tableArr.length; j++) {
                        tableArr[i][j] = new cell (1, i, j);
                    }
                }
            }
            //ACT
            allCellsAlive();
            cellStatus();
            //ASSERT
            expect(tableArr[0][5].neighbours).toEqual(3);    
        })
    })
    
    describe('When an \'Cell\' with \'status = 1\' has \'neighbours = 0\'', function() {
        test('Then \'Cell state\' property value should change to 0', function() {
            //ARRANGE
            resetTable();
            tableArr[2][0] = new cell (1, 2, 0);
            //ACT
            tableArr[2][0].countNeighbours();
            cellDeadOrAlive();
            //ASSERT
            expect(tableArr[2][0].state).toEqual(0);
        })
    })

    describe('When an \'Cell\' with \'status = 1\' has \'neighbours > 3\'', function() {
        test('Then \'Cell\' [4][4] status property should change to 0', function() {
            //ARRANGE
            resetTable();
            tableArr[4][4] = new cell (1, 4, 4);
            tableArr[3][4] = new cell (1, 3, 4);
            tableArr[5][4] = new cell (1, 5, 4);
            tableArr[4][3] = new cell (1, 4, 3);
            tableArr[4][5] = new cell (1, 4, 5);
            //ACT
            tableArr[4][4].countNeighbours();
            cellDeadOrAlive();
            //ASSERT
            expect(tableArr[4][4].state).toEqual(0);
        })
    })

    describe('When an \'Cell\' in [4][4]  with \'status = 0\' has \'neighbours = 3\'', function() {
        test('Then \'Cell\' status property should change to 1', function() {
            //ARRANGE
            resetTable();
            tableArr[4][4] = new cell (0, 4, 4);
            tableArr[3][4] = new cell (1, 3, 4);
            tableArr[5][4] = new cell (1, 5, 4);
            tableArr[4][3] = new cell (1, 4, 3);
            //ACT
            tableArr[4][4].countNeighbours();
            cellDeadOrAlive();
            //ASSERT
            expect(tableArr[4][4].state).toEqual(1);
        })
    })
})