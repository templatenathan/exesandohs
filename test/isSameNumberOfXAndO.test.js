const isSameNumberOfXAndO = require("../src/isSameNumberOfXAndO");

describe("isSameNumberOfXAndO", () => {
  test.each`
    string | result
    ${"a"} | ${true}
  `("returns $result when string is '$string'", ({ string, result }) => {
    expect(isSameNumberOfXAndO(string)).toBe(result);
  });
});
