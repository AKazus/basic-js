const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(boxes) {
  let count = 0;
  for(let row of boxes) {
    for (let box of row ) {
      if (box === '^^'){
        count++;
      }
    }
  }
  return count;
}

module.exports = {
  countCats
};
