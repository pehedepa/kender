const tableRowMin = 0;
let tableRowMax = 0;
const tableColumnMin = 0;
let tableColumnMax = 0;
let tableArr = [];
//ELEMENTS
const generateGrid = document.getElementById('button__generate-grid')
const tableContainer = document.getElementById("board__table");




window.addEventListener('DOMContentLoaded', function() {
    generateGrid.addEventListener('click', createMatrix)

})

//DEFINE CLASS OBJECT CELL
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
    changeStatus() {
        if (this.state === 1) this.state = 0
        else this.state = 1;
    }
}
// CREATE tableArr FROM USER INPUT
function createMatrix() {
    const manyRows = Number(document.getElementById('row__textbox').value);
    const manyColumns = Number(document.getElementById('column__textbox').value);
    tableRowMax = manyRows;
    tableColumnMax = manyColumns;
    for (let i = 0; i < manyRows; i++) {
        tableArr.push([]);
        tableArr[i].push(new Array(manyColumns))
        for (let j = 0; j < manyColumns; j++) {
            tableArr[i][j] = new cell (0, i, j);
        }
    }
    createTable();
}
// CREATE TABLES IN HTML FROM tableArr      
function createTable() {
    let createTable = document.createElement("table");
    let addRow = createTable.insertRow();
    for (let i = 0; i < tableArr.length; i++) {
        let counter = 0;
        addRow = createTable.insertRow();
        addRow.className = `row_${i}`
        for (let value of tableArr[i]) {
            let addCell = addRow.insertCell();
            addCell.className = `cell`;
            addCell.id = `cell_${i}_${counter}`;
            addCell.onclick = () => changeCellStatus(addCell.id);
            addCell.innerHTML = value;
            
            counter++;
        }
        tableContainer.appendChild(createTable);
    }
}

function changeCellStatus(idCell) {
// CAMBIO DE STATUS A VIVO
    document.getElementById(`${idCell}`).style.backgroundColor="black"; // CASILLA NEGRA
    console.log
    


}





