const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n.toString();
  let array = [];
  for (let i = 1; i <= str.length; i++) {
    array.push(str.slice(0, i - 1) + str.slice(i));
  }
  array = array.map((item) => Number(item)).sort((a, b) => a - b);
  return array[str.length - 1]
}

module.exports = {
  deleteDigit
};