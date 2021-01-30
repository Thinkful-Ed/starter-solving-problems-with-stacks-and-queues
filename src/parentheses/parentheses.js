const Stack = require("../lib/stack");

const match = (expression) => {
  const stack = new Stack();

  for (let index = 0, limit = expression.length; index < limit; index++) {
    if (expression[index] === "(") {
      stack.push("(");
    } else {
      if (expression[index] === ")") {
        if (stack.top) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  return !stack.top;
};

module.exports = match;
