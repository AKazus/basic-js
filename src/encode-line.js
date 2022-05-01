const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let numbers = [];
  for (let i = 1; i < str.length + 1; i++) {
    if (str[i] === str[i - 1]) {
      count += 1;
    } else {
      if (count === 1) {
        numbers.push(str[i - 1]);
      } else {
        numbers.push(count + str[i - 1]);
      }
      count = 1;
    }
  }
  return numbers.join('');
}


module.exports = {
  encodeLine
};