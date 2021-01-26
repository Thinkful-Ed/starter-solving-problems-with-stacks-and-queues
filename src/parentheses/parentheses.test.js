const match = require("./parentheses");

describe("Parentheses", () => {
  it("should return true for empty string", () => {
    const actual = match("");
    expect(actual).toEqual(true);
  });
  it("should return true for non-empty string with no parentheses", () => {
    const actual = match("a + b");
    expect(actual).toEqual(true);
  });

  it("should return true for expression with parentheses", () => {
    const actual = match("(a + b)");
    expect(actual).toEqual(true);
  });

  it("should return true for internal parentheses", () => {
    const actual = match("a + (b + c) + d");
    expect(actual).toEqual(true);
  });

  it("should return true for nested parentheses", () => {
    const actual = match("(a + (b + c)) + d");
    expect(actual).toEqual(true);
  });

  it("should return true for multiple sets of parentheses", () => {
    const actual = match("(b + c) + (d + e)");
    expect(actual).toEqual(true);
  });

  it("should return true for arbitrary nested parentheses", () => {
    const actual = match("a + (((b + c))) + d");
    expect(actual).toEqual(true);
  });

  it("should return false for missing open parentheses", () => {
    const actual = match("a + b + c) + d");
    expect(actual).toEqual(false);
  });

  it("should return false for missing close parentheses", () => {
    const actual = match("a + (b + c + d");
    expect(actual).toEqual(false);
  });

  it("should return false for nested missing open parentheses", () => {
    const actual = match("a + ((b + c) + d");
    expect(actual).toEqual(false);
  });

  it("should return false for out of order parentheses", () => {
    const actual = match("a + b + c) + (d");
    expect(actual).toEqual(false);
  });
});
