module.exports = function countCats(matrix) {
  return matrix
    .reduce((x, y) => x.concat(y), [])
    .filter(x => x === "^^")
    .length;
};
