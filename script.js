const CALCULATE = {
    sum: (a, b) => a + b,
    sub: (a, b) => a - b,
    prod: (a, b) => a * b,
    div: (a, b) => (b == 0 ? "ERROE" : a / b),
};

console.log(CALCULATE.sub(4, 2));
console.log(CALCULATE.sum(4, 4));
console.log(CALCULATE.prod(3, 2));
console.log(CALCULATE.div(4,2));