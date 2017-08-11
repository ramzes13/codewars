const Test = require('chai').assert;

const multiplying_numbers_as_strings = require('../../../quiz/multiplying_numbers_as_strings');

const multiplyObj = new multiplying_numbers_as_strings();

describe('Some simple multiplications', function () {
  it('simple', function () {
    Test.equal(multiplyObj.multiply("2", "3"), "6");
    Test.equal(multiplyObj.multiply("30", "69"), "2070");
  });
});