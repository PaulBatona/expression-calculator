function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here
    let openBrackets = expr.split('').filter(e=>e==='(').length;
    let closeBrackets = expr.split('').filter(e=>e===')').length;
    let noSpace = expr.split('').filter(e=>e!==' ').join('');
    if(openBrackets!==closeBrackets){
        throw new Error('ExpressionError: Brackets must be paired')
    }
    if(noSpace.includes('/0')){
        throw new Error('TypeError: Division by zero.')
    }

    function calc(i1, operator, i2){
        if(operator=='+'){
            return i1+i2;
        }
        else if(operator=='-'){
            return i1-i2;
        }
        else if(operator=='*'){
            return i1*i2;
        }
        else if(operator=='/'){
            return i1/i2
        }
    }
}

module.exports = {
    expressionCalculator
}