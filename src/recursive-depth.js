const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let maxDeep = 1, curDeep = 1;
    arr.map(e => {
      if (Array.isArray(e)) {
        curDeep += this.calculateDepth(e);
        if (curDeep > maxDeep) maxDeep = curDeep;
        curDeep = 1;
      }
    })
    return maxDeep;
  }
}

module.exports = {
  DepthCalculator
};
