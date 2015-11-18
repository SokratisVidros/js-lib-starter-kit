var Random = require('random-js');

var MIN = 0, MAX = 100;

module.exports = {
  bingo: function () {
    return Random.integer(MIN, MAX)(Random.engines.nativeMath);
  }
};
