const {expect} = require('chai');

const Calculator = require('../../app/calculator');

const calc = new Calculator();

describe('addition', function() {
  const testData = [
    {num1:2, num2:4, result:6},
    {num1:-2, num2:-4, result:-6},
    {num1:23, num2:0, result:23},
    {num1:0, num2:-42, result:-42},
    {num1:77, num2:-22, result:55},
    {num1:24, num2:-40, result:-16},
  ];

  testData.forEach(({num1, num2, result}) => {
    it(`should return ${result} when called with numbers ${num1} and ${num2}`, function() {
      expect(calc.add(num1, num2)).to.be.equal(result);
    });
  });

  it('should throw an error if provided with not a number', function() {
    expect(() => calc.add('a', 'b')).to.throw();
  });
});
