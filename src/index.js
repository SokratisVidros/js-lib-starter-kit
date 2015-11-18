var Random = require('random-js');

module.exports = {
  bingo: function () {
    console.log('#' + Random.integer(0,100)(Random.engines.nativeMath));
  }
};
