const Stack = require("../lib/stack");

const isPalindrome = (sentence) => {
  sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const half = Math.floor(sentence.length/2);
  const newStack = new Stack();
  for(let i = 0; i < half; i++){
    newStack.push(sentence[i]);
  }
  let i = 0;
  if(sentence.length % 2){
    i++;
  }
  for(i = half + i; i < sentence.length; i++){
    const poppedChar = newStack.pop();
    if(poppedChar !== sentence[i]){
      return false;
    }
  }
  // Your solution here
  return true;
};

module.exports = isPalindrome;
