import assert from 'node:assert';
import { describe, it } from 'node:test';
import { sum } from './sum.js';

describe('sum()', () => {
  it('should sum two values', () => {
    assert.equal(sum(1, 2), 3);
  });

  it('should sum three values', () => {
    assert.equal(sum(1, 2, 3), 6);
  });

  it('should sum negative values', () => {
    assert.equal(sum(1, -1), 0);
  });
});
