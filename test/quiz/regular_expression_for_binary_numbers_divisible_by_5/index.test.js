
const Test = require('chai').assert;
Test.assertEquals = Test.equal;

const divisibleByFive = require('../../../quiz/regular_expression_for_binary_numbers_divisible_by_5');

describe('regular_expression_for_binary_numbers_divisible_by_5', () => {
    it('regular_expression_for_binary_numbers_divisible_by_5_1', function () {
        Test.assertEquals(divisibleByFive.test(''), false);

        Test.assertEquals(divisibleByFive.test('101'), true);
        Test.assertEquals(divisibleByFive.test('1010'), true);
        Test.assertEquals(divisibleByFive.test('10100'), true);
        Test.assertEquals(divisibleByFive.test((65020).toString(2)), true);

        Test.assertEquals(divisibleByFive.test('10110101'), false);
        Test.assertEquals(divisibleByFive.test('1110001'), false);

        Test.assertEquals(divisibleByFive.test((21).toString(2)), false);
        Test.assertEquals(divisibleByFive.test((15392).toString(2)), false);
        Test.assertEquals(divisibleByFive.test((23573).toString(2)), false);
        Test.assertEquals(divisibleByFive.test((19344).toString(2)), false);

        Test.assertEquals(divisibleByFive.test((43936).toString(2)), false);
        Test.assertEquals(divisibleByFive.test((32977).toString(2)), false);
        Test.assertEquals(divisibleByFive.test((328).toString(2)), false);

        Test.assertEquals(divisibleByFive.test((5729).toString(2)), false);
    });
});

