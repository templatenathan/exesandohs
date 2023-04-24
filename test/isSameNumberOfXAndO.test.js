const isSameNumberOfXAndO = require("../src/isSameNumberOfXAndO");

describe("isSameNumberOfXAndO", () => {
  test.each`
    string                  | result
    ${"a"}                  | ${true}
    ${"x"}                  | ${false}
    ${"o"}                  | ${false}
    ${"abcdoooxxxabcd"}     | ${true}
    ${"abcdoooxxxabcdoooo"} | ${false}
  `("returns $result when string is '$string'", ({ string, result }) => {
    expect(isSameNumberOfXAndO(string)).toBe(result);
  });
});
