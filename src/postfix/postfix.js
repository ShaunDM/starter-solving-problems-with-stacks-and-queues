const Stack = require("../lib/stack");

const postfix = (expression) => {
    const newStack = new Stack();
    const result = [];
    for(let i = 0; i < expression.length; i++){
        const char = expression[i];
        switch(char){
            case '(':{
                newStack.push(char);
                break;
            }
            case ')':{
                while(newStack.top.value !== '('){
                    result.push(newStack.pop());
                }
                newStack.pop();
                break;
            }
            case '-': {

            }
            case '+': {
                while(newStack.top && newStack.top.value !== '('){
                    result.push(newStack.pop());
                }
                newStack.push(char);
                console.log(newStack.top.value, "result: ", result, "expression: ", expression);
                break;
            }
            case '/': {

            }
            case '*': {
                while(newStack.top && (newStack.top.value === '*' || newStack.top.value === '/') && newStack.top.value !== '('){
                    result.push(newStack.pop());
                }
                newStack.push(char);
                break;
            }
            case ' ': {
                break;
            }
            default: {
                result.push(char);
                break;
            }
        }
    }
    while(newStack.top){
        result.push(newStack.pop());
    }
    return result.join(' ');
};

module.exports = postfix;
