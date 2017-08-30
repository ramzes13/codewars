
const Test = require('chai').assert;
Test.assertEquals = Test.equal;
Test.assertSimilar = Test.deepEqual;

const { innerEdgesOf, outerEdgesOf, grow, shrink } = require('../../../quiz/simple_image_processing_part_i_edges_feature_growing_and_shrinking');

describe('simple_image_processing_part_i_edges_feature_growing_and_shrinking', () => {
    it('simple_image_processing_part_i_edges_feature_growing_and_shrinking_1', function () {
        var b = [[0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]]

        var grow_b = [[0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0]]

        var shrink_b = [[0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]]

        var inner_edges_b = [[0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]]

        var outer_edges_b = [[0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 0, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0]]

        Test.assertSimilar(grow(b), grow_b)
        Test.assertSimilar(shrink(b), shrink_b)
        Test.assertSimilar(innerEdgesOf(b), inner_edges_b)
        Test.assertSimilar(outerEdgesOf(b), outer_edges_b)
    });
});

