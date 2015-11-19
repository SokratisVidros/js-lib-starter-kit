'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bingo = bingo;

var _randomJs = require('random-js');

var _randomJs2 = _interopRequireDefault(_randomJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MIN = 0,
    MAX = 100;

function bingo() {
  return _randomJs2.default.integer(MIN, MAX)(_randomJs2.default.engines.nativeMath);
}

//# sourceMappingURL=index.js.map