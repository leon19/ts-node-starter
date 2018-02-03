import { expect } from 'chai';
import { sum } from '../../src';

describe('sum()', function() {
  it('should sum two values', function() {
    expect(sum(1, 2)).to.be.equals(1 + 2);
  });

  it('should sum three values', function() {
    expect(sum(1, 2, 3)).to.be.equals(1 + 2 + 3);
  });

  it('should sum negative values', function() {
    expect(sum(1, -1)).to.be.equal(0);
  });
});
