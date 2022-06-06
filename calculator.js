let storage = [];

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
    if (storage.length == 1) { return storage[0]};
    const p = document.querySelector('p');
    const values = p.textContent.split(' ');
    // const numbers = [];
    // const operators = [];
    // values.forEach((element) => {
    //     if ('+-*/'.includes(element)) {
    //         operators.push(element);
    //     } else {
    //         numbers.push(element);
    //     }
    // });
    // console.log(numbers);
    // console.log(operators);
}

function numInput() {
    const p = document.querySelector('p');
    p.textContent += this.textContent;
}

function opInput() {
    const p = document.querySelector('p');
    const op = this.textContent;
    storage = p.textContent.split(' ');

    if (storage[storage.length-1] === "") { return; }

    if (op === '=') {
        result = evaluate();
        p.textContent = result;
    } else {
        p.textContent += ` ${op} `;
    }
}

function clear() {
    document.querySelector('p').textContent = '';
    storage = [];
}

/*  When an operator is clicked, save current display into a variable
    Also save what operator was used
    If operator clicked and last char in display is an operator, ignore
    Map chars to functions (+ = add, * = multiply, etc)
    */

const numbers = document.querySelectorAll('.number button');
numbers.forEach(button => button.addEventListener('click', numInput));

const operators = document.querySelectorAll('.operator button');
[...operators].slice(1, 5)
    .forEach(button => button.addEventListener('click', opInput));
operators[0].addEventListener('click', clear);
