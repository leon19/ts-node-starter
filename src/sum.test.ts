import { describe, it } from 'node:test';
import { expect } from 'chai';
import { sum } from './sum.js';

describe('sum()', () => {
  it('should sum two values', () => {
    expect(sum(1, 2)).to.be.equals(1 + 2);
  });

  it('should sum three values', () => {
    expect(sum(1, 2, 3)).to.be.equals(1 + 2 + 3);
  });

  it('should sum negative values', () => {
    expect(sum(1, -1)).to.be.equal(0);
  });
});
