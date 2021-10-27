/* eslint-disable linebreak-style */
/* Создайте класс калькулятора со следующими методами:
add - этот метод должен суммировать передаваемые в него параметры
и возвращать сумму как результат
multiply -  этот метод должен умножать передаваемые в него параметры
и возвращать произведение как результат
*/

/**
 *
 * A simple class containing methods for adding and multiplying numbers
 * @class Calculator
 */
class Calculator {
/**
 * Creates an instance of Calculator.
 * @memberof Calculator
 */
  constructor() {};

  /**
   *
   *
   * @param {Number} num1 number to add to
   * @param {Number} num2 number to be added
   * @return {Number} sum of two numbers
   * @memberof Calculator
   */
  add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new Error('Invalid input');
    } else {
      return num1 + num2;
    }
  }

  /**
   *
   *
   * @param {Number} num1 number to be multiplied
   * @param {Number} num2 number multiplied by
   * @return {Number} product of two numbers
   * @memberof Calculator
   */
  multiply(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new Error('Invalid input');
    } else {
      return num1 * num2;
    }
  }
}

module.exports = Calculator;
