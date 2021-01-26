const postfix = require("./postfix");

describe("Postfix", () => {
  it("should return empty string for empty string", () => {
    const actual = postfix("");
    expect(actual).toEqual("");
  });

  it("should transform simple expressions", () => {
    const actual = postfix("a + b");
    expect(actual).toEqual("a b +");
  });

  it("should transform equal precedence operators correctly", () => {
    const actual = postfix("a + b - c");
    expect(actual).toEqual("a b + c -");
  });

  it("should transform unequal precedence operators correctly", () => {
    const actual = postfix("a + b * c");
    expect(actual).toEqual("a b c * +");
  });

  it("should remove parentheses", () => {
    const actual = postfix("(a + b)");
    expect(actual).toEqual("a b +");
  });

  it("should interpret parentheses correctly", () => {
    const actual = postfix("(a + b) * c");
    expect(actual).toEqual("a b + c *");
  });

  it("should handle complex expressions", () => {
    const actual = postfix("(((a + b) * (c - d))/(a - b) + (c / d))");
    expect(actual).toEqual("a b + c d - * a b - / c d / +");
  });
});
