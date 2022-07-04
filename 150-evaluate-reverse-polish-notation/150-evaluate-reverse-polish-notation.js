/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let ariths = '+-/*'
    if(tokens.length === 1) return Number(tokens[0])
    function calc(num1,num2,operation){
        switch(operation){
            case '+':
                return num1 + num2
            case '-':
                return num1 - num2
            case '*':
                return num1 * num2
            default:
                let res = num1 / num2
                return res > 0?Math.floor(res):Math.ceil(res)
        }
    }
    
    while(tokens.length !== 1) {
        for(let i = 0; i < tokens.length;i++){
            if(ariths.includes(tokens[i])){
                tokens[i] = calc(Number(tokens[i - 2]),Number(tokens[i - 1]),tokens[i]).toString()
                tokens.splice(i - 2,2)
                break;
            }
        }
    }
    return Number(tokens[0])
};