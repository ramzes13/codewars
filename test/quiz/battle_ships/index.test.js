const Test = require('chai').assert;

const damagedOrSunk = require('../../../quiz/battle_ships');

describe('Some simple multiplications', function () {
  it('battle_ship_1', function () {
    var board = [[0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0]];

    var attacks = [[3, 1], [3, 2], [3, 3]];
    var result = damagedOrSunk(board, attacks);

    Test.equal(result.sunk, 1, "There should be 1 ship sunk");
    Test.equal(result.damaged, 0, "There should be 0 ship damaged");
    Test.equal(result.notTouched, 0, "There should be 0 ship notTouched");
    Test.equal(result.points, 1, "there should be a 1 point score");

  });

  it('battle_ships 2', function () {
      var board = [[3, 0, 1],
      [3, 0, 1],
      [0, 2, 1],
      [0, 2, 0]];

      var attacks = [[2, 1], [2, 2], [3, 2], [3, 3]]
      var result = damagedOrSunk(board, attacks);

      Test.equal(result.sunk, 1, "There should be 1 ship sunk");
      Test.equal(result.damaged, 1, "There should be 1 ship damaged");
      Test.equal(result.notTouched, 1, "There should be 1 ship notTouched");
      Test.equal(result.points, 0.5, "there should be a 0.5 point score");
    });
});