const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  var arr = [];
  for (let index = 0; index < matrix.length; index++) {
    arr.push(new Array(matrix[index].length).fill(0));
  }
  for (let x1 = 0; x1 < matrix.length; x1++) {
    for (let x2 = 0; x2 < matrix[x1].length; x2++) {
      if (matrix[x1][x2]) {
        arr[x1][x2] = arr[x1][x2] - 1;
        for (let x3 = x1 - 1; x3 <= x1 + 1; x3++) {
          for (let x4 = x2 - 1; x4 <= x2 + 1; x4++) {
            if (
              x3 >= 0 &&
              x3 < matrix.length &&
              x4 >= 0 &&
              x4 < matrix[x1].length
            ) {
              arr[x3][x4] = arr[x3][x4] + 1;
            }
          }
        }
      }
    }
  }

  return arr;
}

module.exports = {
  minesweeper,
};
