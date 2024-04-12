let operand = "";
let operand_2 = "";
let operator = null;
let dot_flag = false;

const CALCULATE = {
    sum: (a, b) => a + b,
    sub: (a, b) => a - b,
    prod: (a, b) => a * b,
    div: (a, b) => {
        if(b == 0) 
        {
            operand = "";
            operand_2 = "";
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
    if(element === "." && dot_flag)
    {
        dot_flag = true;
        return;
    }

    if(element === ".") dot_flag = true;
    if(operator === null)
    {
        operand += element;
        DISPLAY.innerHTML = operand;
    }
    else 
    {
        operand_2 += element;
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

BTN.percent().addEventListener('click', () => {
    if(operator == null)
    {
        operand /= 100;
        DISPLAY.innerHTML = operand;
    }
    else 
    {
        operand_2 /= 100;
        DISPLAY.innerHTML = operand_2;
    }
})

BTN.back().addEventListener("click", ()=>{

   if(operator === null)
   {
        operand = operand.replace(/.$/,'');
        if(operand === "") DISPLAY.innerHTML = 0;
        else DISPLAY.innerHTML = operand;
   }
   else 
   {
        operand_2 = operand_2.replace(/.$/,'');
        if(operand_2 === "") DISPLAY.innerHTML = 0;
        else DISPLAY.innerHTML = operand_2;
   }
})

BTN.ac().addEventListener("click", () => {
    operator = null;
    operand = "";
    operand = "";
    DISPLAY.innerHTML = 0;
})

BTN.plus().addEventListener('click', () => {
    operator = "+";
    operand_2 = "";
})
BTN.minus().addEventListener('click', () => {
    operator = "-";
    operand_2 = "";
})
BTN.multiply().addEventListener('click', () => {
    operator = "*";
    operand_2 = "";
})
BTN.div().addEventListener('click', () => {
    operator = "/";
    operand_2 = "";
})
BTN.plus_minus().addEventListener('click', () => {
    if(operator == null)
    {
        operand = parseInt(operand) * -1;
        DISPLAY.innerHTML = operand;
    }
    else
    {
        operand_2 = parseInt(operand_2) * -1
        DISPLAY.innerHTML = operand_2;
    }

})