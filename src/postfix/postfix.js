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
1. Declare a variable named `stack` and initialize it to a new stack
2. Declare a variable named `result` and initialize it to an empty array
3. Iterate through each character in the expression ignoring spaces
   1. If the current character is ‘(‘, push it unto the stack.
   2. Otherwise if the current character is ‘)’ then, start popping characters off the stack and add each character to the `result` until you find a ‘(‘. Do not add the parentheses to the `result`.
   3. Otherwise if the current character is an operator,
      1. Look at the operator at the top of the stack
         1. If the stack is empty, or if the top of the stack is ‘(‘, or if the current operator has higher precedence than the operator on the top of the stack, then push the current operator unto the stack
         2. Otherwise, start popping operators off the stack while the stack is not empty and the popped operator has higher or equal precedence to the current operator. Each poppoed operator is added to the `result`.
         3. Push the current operator unto the stack.
   4. If the current character is an operand, add it to the `result`
4. Pop any remaining operators from the stack and add them to the `result`
5. Return the `result` as a string
*/
