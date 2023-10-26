function simpleCalculator(numOne, numTwo, operation){
    let add = (a, b) => a + b;
    let subtrack = (a, b) => a - b;
    let divide = (a, b) => a / b;
    let multiply = (a, b) => a * b;

    switch (operation) {
        case 'add': return add(numOne, numTwo); 
        case 'subtrack': return subtrack(numOne, numTwo); 
        case 'divide': return divide(numOne, numTwo); 
        case 'multiply': return multiply(numOne, numTwo);                 
    }

}

console.log(simpleCalculator(3, 5, 'add'));