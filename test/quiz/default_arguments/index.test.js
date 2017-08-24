const Test = require('chai').assert;

const defaultArguments = require('../../../quiz/default_arguments');

describe('default_arguments', () => {
  it('default_arguments_1', () => {
    function add(a, b) { return a + b; }
    // var add_ = defaultArguments(add, { b: 9 });
    // Test.equal(add_(10), 19);
    // Test.equal(add_(10, 5), 15);
    // var add_ = defaultArguments(add_, { b: 3 });
    // Test.equal(add_(10), 13);
  });
});