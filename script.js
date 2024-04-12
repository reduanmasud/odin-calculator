const CALCULATE = {
    sum: (a, b) => a + b,
    sub: (a, b) => a - b,
    prod: (a, b) => a * b,
    div: (a, b) => (b == 0 ? "ERROE" : a / b),
};

let operand = 0;
let operand_2 = 0;
let operator = null;

const BTN = {
    zero : () => document.querySelector('#zero'),
    one : () => document.querySelector('#one'),
    two : () => document.querySelector('#two'),
    three : () => document.querySelector('#three'),
    four : () => document.querySelector('#four'),
    five : () => document.querySelector('#five'),
    six : () => document.querySelector('#six'),
    seven : () => document.querySelector('#seven'),
    eight : () => document.querySelector('#eight'),
    nine : () => document.querySelector('#nine'),
    dot : () => document.querySelector('#dot'),
    back : () => document.querySelector('#back'),
    plus : () => document.querySelector('#plus'),
    minus : () => document.querySelector('#minus'),
    div : () => document.querySelector('#div'),
    multiply : () => document.querySelector('#multiply'),
    ac : () => document.querySelector('#ac'),
    plus_minus : () => document.querySelector('#plus_minus'),
    equal : () => document.querySelector('#equal'),
    percent : () => document.querySelector('#percent')
}

const DISPLAY = document.querySelector('#calc-typed');


function display(element)
{
    //operand = element;
    console.log(element);
    console.log(operator)
    if(operator == null)
    {
        operand = parseInt(operand) * 10 + parseInt(element);
        DISPLAY.innerHTML = operand;
    }
    else 
    {
        operand_2 = parseInt(operand_2) * 10 + parseInt(element);
        DISPLAY.innerHTML = operand_2;
    }
    
}
