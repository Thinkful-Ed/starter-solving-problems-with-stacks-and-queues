const connected = require("./connected_friends");

describe("Connected Friends", () => {
  const graph = {
    A: ["B", "C"],
    B: ["F", "D"],
    C: ["E"],
    D: ["C", "B"],
    E: ["D", "F"],
    F: [],
  };

  it("should return true for empty graph", () => {
    const actual = connected(graph, "A", "F");
    expect(actual).toEqual(true);
  });

  it("should return false for empty graph", () => {
    const actual = connected({}, "A", "B");
    expect(actual).toEqual(false);
  });

  it("should return true for same start and end user", () => {
    const actual = connected(graph, "A", "A");
    expect(actual).toEqual(true);
  });

  it("should return true for direct connection", () => {
    const actual = connected(graph, "A", "B");
    expect(actual).toEqual(true);
  });

  it("should return false for reverse connection", () => {
    const actual = connected(graph, "B", "A");
    expect(actual).toEqual(false);
  });

  it("should return true for multi-step connection", () => {
    const actual = connected(graph, "B", "E");
    expect(actual).toEqual(true);
  });
});
