const Test = require('chai').assert;

const mergesorted = require('../../../quiz/merge_sort');

describe('merge sort', function () {
  it('merge sort test 1', function () {
    Test.deepEqual(mergesorted([1,2],[3,4]), [1,2,3,4]);
  });
  it('merge sort test 2', function () {
    Test.deepEqual(mergesorted([1,2,3],[1,2,3]), [1,1,2,2,3,3]);
  });
  it('merge sort test 3', function () {
    Test.deepEqual(mergesorted([4],[1,2,3]), [1,2,3,4]);
  });
  it('merge sort test 4', function () {
    Test.deepEqual(mergesorted([1],[1]), [1,1]);
  });
});