module.exports = (string) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    const char = string[i].toLowerCase();
    if (char === "x") {
      count++;
    } else if (char === "o") {
      count--;
    }
  }
  return count === 0;
};
