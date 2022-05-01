const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(date == null) {
    return 'Unable to determine the time of year!';
  }
  try {
    date.getUTCDay();
    if(date.getMonth() < 2 || date.getMonth() == 11) {
      return 'winter';
    } else if (date.getMonth() < 5) {
      return 'spring';
    } else if (date.getMonth() < 8) {
      return 'summer';
    } else if (date.getMonth() < 11) {
      return 'autumn';
    }
  }
  catch (e) {
    throw new Error('Invalid date!');
  }
}

console.log(() => new Date());
module.exports = {
  getSeason
};
