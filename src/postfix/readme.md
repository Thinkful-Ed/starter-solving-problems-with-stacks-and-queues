# Infix to Postfix

An arithmetic expression is said to be in **infix** notation when it takes the form:

```
operand1 operator operand2
```

For example, the expressions `1 + 2` and `3 * 5` are infix expressions.

Sometimes, to avoid ambiguities with the precedence of operators, parentheses are used. The following are all valid infix expressions:

```
(2 + 3) * 4
(2 + (4 - 5) * 3)
8 / (6 + 2)
```

Parsing and evaluating expressions in this form is particularly slow. Your compiler would typically convert arithmetic expressions from infix notation to **postfix** notation.

An arithmetic expression is said to be in **postfix notation** when it takes the form:

```
operand1 operand2 operator
```

For example, the infix expression `2 + 3` may be written as `2 3 +` in postfix notation.

The following are all valid postfix forms or the expressions above:

```
2 3 + 4 *
2 4 5 - 3 * +
8 6 2 + /
```

Write an algorithm that will take an arithmetic expression in infix form as a string and return the expression in postfix form.

- Assume that the four operators: `+`, `-`, `/` and `*` are the only ones used.
- The precedence of the operators are `*` and `/` has the highest precedence followed by `+` and `-`.
- You may also assume that the operands provided would all be single digits.
- Assume that all expressions provided are valid arithmetic expressions (no need to validate them)
