import Random from 'random-js';

const MIN = 0,
      MAX = 100;

export function bingo () {
  return Random.integer(MIN, MAX)(Random.engines.nativeMath);
}
