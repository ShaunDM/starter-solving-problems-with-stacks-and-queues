const Stack = require("../lib/stack");

const match = (expression) => {
    const newStack = new Stack();
    console.log(expression.length);
    for(let i = 0; i < expression.length; i++){
        if(expression[i] === '('){
            newStack.push('(');
        } else if(expression[i] === ')'){
            if(!newStack.top){
                return false;
            } else{
                newStack.pop();
            }
        }
        console.log("Stack Length: ", newStack.length);
    }
    if(newStack.top){
        return false;
    }
    return true;
};

module.exports = match;
