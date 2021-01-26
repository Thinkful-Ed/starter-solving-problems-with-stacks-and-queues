const isPalindrome = require("./palindromes");

describe("Palindrome", () => {
  it("should return true for empty string", () => {
    const actual = isPalindrome("");
    expect(actual).toEqual(true);
  });

  it("should return true for single character", () => {
    const actual = isPalindrome("a");
    expect(actual).toEqual(true);
  });

  it("should return true for string of repeating characters", () => {
    const actual = isPalindrome("aaaaaaa");
    expect(actual).toEqual(true);
  });

  it("should return true for palindrome including punctuations and case", () => {
    const actual = isPalindrome("Mr. Owl ate my metal worm");
    expect(actual).toEqual(true);
  });

  it("should return false for 2 distinct characters", () => {
    const actual = isPalindrome("ab");
    expect(actual).toEqual(false);
  });

  it("should return false for none palindromes", () => {
    const actual = isPalindrome("rabbit");
    expect(actual).toEqual(false);
  });

  it("should return true for odd length string", () => {
    const actual = isPalindrome("abcba");
    expect(actual).toEqual(true);
  });
});
