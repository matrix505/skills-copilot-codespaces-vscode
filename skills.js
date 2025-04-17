function calculateNumber(var1,var2){
    return {
        addition: var1 + var2,
        subtraction: var1 - var2,
        multiplication: var1 * var2,
        division: var2 !== 0 ? var1 / var2 : 'Division by zero is not allowed'
    };
}

console.log(calculateNumber(10, 5)); // { addition: 15, subtraction: 5, multiplication: 50, division: 2 }