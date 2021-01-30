const Stack = require("../lib/stack");

const precedence = {
  "+": 0,
  "-": 0,
  "*": 1,
  "/": 1,
};

const postfix = (expression) => {

  const stack = new Stack();
  const result = [];

  expression = expression.replace(/\s/g, "");

  expression.split("").forEach((character) => {
    if (character === "(") {
      stack.push(character);
    } else {
      if (character === ")") {
        let top = stack.pop();
        while (top !== "(") {
          result.push(top);
          top = stack.pop();
        }
      } else {
        if ("+-*/".includes(character)) {
          if (
            !stack.top ||
            stack.top.value === "(" ||
            precedence[character] > precedence[stack.top.value]
          ) {
            stack.push(character);
          } else {
            while (stack.top && precedence[stack.top.value] >= precedence[character]) {
              result.push(stack.pop());
            }

            stack.push(character);
          }
        } else {
          result.push(character);
        }
      }
    }
  });

  while (stack.top) {
    result.push(stack.pop());
  }

  return result.join(" ");
};

postfix("(((a + b) * (c - d))/(a - b) + (c / d))");

module.exports = postfix;

/*
1. Declare a variable named `result` and initialize it to the empty string
1. Iterate through each character in the expression ignoring spaces
   1. If the current character is an operand, add it to the `result`
   1. otherwise if it is an operator
      1. Look at the operator at the top of the stack
      1. If the current operator has higher precedence than the operator on the top of the stack or if the stack is empty or the top of the stack is ‘(‘ then push the current operator unto the stack
      1. otherwise, start popping operators off the stack until either you find an operator that is not higher or equal precedence to the current operator, or if you find a parenthesis. Each operator that is popped from the stack is added to the `result`. Push the current operator unto the stack.
   1. Otherwise if the current character is ‘(‘, push it unto the stack.
   1. Otherwise if the current character is ‘)’ then, start popping characters off the stack and add each character to the `result` until you find a ‘(‘. Do not put the parentheses on the `result`.
1. Pop any remaining operators from the stack and place them on the `result`
1. Return the `result`
*/
