var expect = require('chai').expect;
var bingo = require('../src/index').bingo;

describe('bingo', function () {
  it('sanity check', function () {
    expect(bingo).to.exist;
  });

  it('returns a random number between 0 and 100', function () {
    var number = parseInt(bingo(), 10);
    expect(number).to.be.below(101);
    expect(number).to.be.above(-1);
  });
});
