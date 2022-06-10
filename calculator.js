let storage = [];
const opMap = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
};
let opSelected = false;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(op, a, b) {
    return op(a, b);
}

function evaluate() {
    if (storage.length != 3) { return; }
    const a = storage.shift();
    const op = storage.shift();
    const b = storage.shift();
    console.log(`Evaluating ${a} ${op} ${b}`);
    const result = operate(opMap[op], a, b)
    storage.push(result);
    const p = document.querySelector('p');
    p.textContent = result;
    console.log(storage);
}

function numInput() {
    const p = document.querySelector('p');
    if (opSelected) {
        p.textContent = "";
        opSelected = false;
    }
    p.textContent += this.textContent;
    //minus must precede a number + no repeats
    //only one decimal per number
}

function opInput() {
    if (opSelected) { return; }
    const p = document.querySelector('p');
    const op = this.textContent;
    if (op != "=" || (op == "=" && storage.length == 2)) {
        storage.push(parseFloat(p.textContent));
    }
    if (storage.length == 3) {
        evaluate();
    }
    if (op == "=") {
        storage.pop();
    }
    if (op != "=") {
        storage.push(op);
        opSelected = true;
    }
    console.log(storage);
}

function clear() {
    document.querySelector('p').textContent = '';
    storage = [];
    console.log(storage);
}

/*  When an operator is clicked, save current display into a variable
    Also save what operator was used
    If operator clicked and last char in display is an operator, ignore
    Map chars to functions (+ = add, * = multiply, etc)
    */

const numbers = document.querySelectorAll('.number button');
numbers.forEach(button => button.addEventListener('click', numInput));

const operators = document.querySelectorAll('.operator button');
[...operators].slice(1, 6)
    .forEach(button => button.addEventListener('click', opInput));
operators[0].addEventListener('click', clear);
