import {expect} from 'chai';
import {bingo} from '../src/index';

describe('bingo', () => {
  it('sanity check', () => {
    expect(bingo).to.exist;
  });

  it('returns a random number between 0 and 100', () => {
    const number = parseInt(bingo(), 10);
    expect(number).to.be.below(101);
    expect(number).to.be.above(-1);
  });
});
