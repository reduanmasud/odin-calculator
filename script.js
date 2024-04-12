let operand = 0;
let operand_2 = 0;
let operator = null;


const CALCULATE = {
    sum: (a, b) => a + b,
    sub: (a, b) => a - b,
    prod: (a, b) => a * b,
    div: (a, b) => {
        if(b == 0) 
        {
            operand = 0;
            operand_2 = 0;
            operator = null;

            return "Math Error";
            
        }

        return a / b;

    },
};

const BTN = {
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
        if(operand >= 0)
            operand = operand * 10 + parseInt(element);
        else
            operand = operand * 10 - parseInt(element)
        DISPLAY.innerHTML = operand;
    }
    else 
    {
        if(operand_2 >= 0)
            operand_2 = operand_2 * 10 + parseInt(element);
        else
            operand_2 = operand_2 * 10 + parseInt(element);
        DISPLAY.innerHTML = operand_2;
    }
    
}

BTN.equal().addEventListener('click', ()=> {

    switch (operator) {
        case "+":
            operand = CALCULATE.sum(operand, operand_2);
            DISPLAY.innerHTML = operand;
            break;
        case "-":
            operand = CALCULATE.sub(operand, operand_2);
            DISPLAY.innerHTML = operand;
            break;
        case "*":
            operand = CALCULATE.prod(operand, operand_2);
            DISPLAY.innerHTML = operand;
            break;
        case "/":
            operand = CALCULATE.div(operand, operand_2);
            DISPLAY.innerHTML = operand;
            break;
        default:
            break;
            
    }
})

BTN.back().addEventListener("click", ()=>{
    operand /= 10;
    DISPLAY.innerHTML = parseInt(operand);
})

BTN.ac().addEventListener("click", () => {
    operator = null;
    operand = 0;
    DISPLAY.innerHTML = 0;
})

BTN.plus().addEventListener('click', () => {
    operator = "+";
    operand_2 = 0;
})
BTN.minus().addEventListener('click', () => {
    operator = "-";
    operand_2 = 0;
})
BTN.multiply().addEventListener('click', () => {
    operator = "*";
    operand_2 = 0;
})
BTN.div().addEventListener('click', () => {
    operator = "/";
    operand_2 = 0;
})
BTN.plus_minus().addEventListener('click', () => {
    operand = parseInt(operand) * -1;
    DISPLAY.innerHTML = operand;
})