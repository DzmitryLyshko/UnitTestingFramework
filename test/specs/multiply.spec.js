const {expect} = require('chai');

const Calculator = require('../../app/calculator');

const calc = new Calculator();

describe('multiplication', function() {
  const testData = [
    {num1: 2, num2: 4, result: 8},
    {num1: -3, num2: 5, result: -15},
    {num1: -11, num2: 0, result: 0},
    {num1: 7, num2: 0, result: 0},
  ];

  testData.forEach(({num1, num2, result}) => {
    it(`should return ${result} when called with numbers ${num1} and ${num2}`, function() {
      expect(calc.multiply(num1, num2)).to.be.equal(result);
    });
  });
 
  it('should throw an error if provided with not a number', function() {
    expect(() => calc.multiply('a', 'b')).to.throw();
  });
});