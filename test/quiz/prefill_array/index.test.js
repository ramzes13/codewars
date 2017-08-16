const Test = require('chai').assert;

const prefill = require('../../../quiz/prefill_array');

describe('prefill array', function () {
  it('prefill array 1', function () {
    Test.deepEqual(prefill(3, 1), [1, 1, 1]);
    Test.deepEqual(prefill(2, 'abc'), ['abc', 'abc']);
    Test.deepEqual(prefill('1', 1), [1]);
    Test.deepEqual(prefill(3, prefill(2, '2d')), [['2d', '2d'], ['2d', '2d'], ['2d', '2d']]);
  })

  it('prefill array exception', function () {
    var errorThrown = false;
    try {
      prefill('xyz', 1)
    } catch (e) {
      Test.equal(e.name, "TypeError");
      Test.equal(e.message, "xyz is invalid");
      errorThrown = true;
    }

    Test.isTrue(errorThrown, "prefill did not throw an error");
  })

  it('prefill array parse float', function () {
    var errorThrown = false;
    try {
      prefill('2.9337654012390226', 1)
    } catch (e) {
      Test.equal(e.name, "TypeError");
      Test.equal(e.message, "2.9337654012390226 is invalid");
      errorThrown = true;
    }

    Test.isTrue(errorThrown, "prefill did not throw an error");
  })

})
