const Calculator = require('../../app/calculator');
const {expect} = require('chai');

describe('multiply', function() {
  let calc;

  beforeEach(function() {
    calc = new Calculator();
  });

  afterEach(function() {
    calc = null;
  });

  it('should throw an error if provided with not a number', function() {
    expect(() => calc.multiply('a','b')).to.throw();
  });

  it('should return 8 when called with numbers 2 and 4', function() {
    expect(calc.multiply(2, 4)).to.be.equal(8);
  });

  it('should return -15 when called with numbers -3 and 5', function() {
    expect(calc.multiply(-3, 5)).to.be.equal(-15);
  });

  it('should return 0 when called with numbers -11 and 0', function() {
    expect(calc.multiply(-11, 0)).to.be.equal(0);
  });

  it('should return 0 when called with numbers 7 and 0', function() {
    expect(calc.multiply(7, 0)).to.be.equal(0);
  });
});