const buttons = document.querySelectorAll("#buttons > div:not(.hideme)");
const outputlog = document.querySelector("#output-log");
const resultbox = document.querySelector("#resultbox");
const raiz = document.getElementById("root").innerHTML;
let operation = "";
let finalResult = "";
let decimal = true;
let arrResult = [];

for (let btn of buttons) {
  btn.addEventListener('click', function(event) {
    let val = this.innerHTML;
    switch(val) {
        case "AC": 
            operation = "";
            resultbox.innerHTML = "";
            break;
        case "C": 
            if (operation.length > 0) {
                operation = operation.substring(0, operation.length -1);
            }
            break;
        case "=":
            finalResult = eval(operation);
            resultbox.innerHTML = finalResult;
            saveResult(operation, finalResult);
            break;
        case raiz:
            if (operation.length === 1) {
                finalResult = Math.sqrt(Number(operation));
                resultbox.innerHTML = finalResult;
                saveResult(operation, finalResult);
            } else break;
        default:
            if (validInput(val)) operation += val;
            break;
    }
    outputlog.innerHTML = operation;
  });
}

function validInput(val) {
    const lastChar = operation[operation.length -1];
    if (Number.isNaN(Number(val)) && Number.isNaN(Number(lastChar))) return false;
    else if (Number.isNaN(Number(val)) && val != ",") decimal = true;
    else if (val === ",") {
        if (decimal) {
            decimal = false;
            return true;
        }
        return false;
    }
    return true;
}

function saveResult(operation, finalResult) {
    arrResult.push({
        'Operation': operation,
        'Result': finalResult.toFixed(3),
    });
}

