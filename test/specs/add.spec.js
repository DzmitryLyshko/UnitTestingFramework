const Calculator = require('../../app/calculator');
const {expect} = require('chai');

describe('add', function() {
  let calc;

  beforeEach(function() {
    calc = new Calculator();
  });

  afterEach(function() {
    calc = null;
  });

  it('should throw an error if provided with not a number', function() {
    expect(() => calc.add('a','b')).to.throw();
  });

  it('should return 6 when called with numbers 2 and 4', function() {
    expect(calc.add(2, 4)).to.be.equal(6);
  });

  it('should return -6 when called with numbers -2 and -4', function() {
    expect(calc.add(-2, -4)).to.be.equal(-6);
  });

  it('should return 23 when called with numbers 23 and 0', function() {
    expect(calc.add(23, 0)).to.be.equal(23);
  });

  it('should return -42 when called with numbers 0 and -42', function() {
    expect(calc.add(0, -42)).to.be.equal(-42);
  });

  it('should return 55 when called with numbers 77 and -22', function() {
    expect(calc.add(77, -22)).to.be.equal(55);
  });

  it('should return -16 when called with numbers 24 and -40', function() {
    expect(calc.add(24, -40)).to.be.equal(-16);
  });
});
