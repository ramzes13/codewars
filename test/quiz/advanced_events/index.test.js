
const Test = require('chai').assert;

const Event = require('../../../quiz/advanced_events');

describe('advanced_events', () => {
    it('advanced_events_1', function () {

        function l(arr) { arr.push('l'); }
        function o(arr) { arr.push('o'); }
        var e = new Event(),
            bucket = [];

        e.subscribe(l, o, l);
        e.emit(bucket);

        Test.deepEqual(bucket, ['l', 'o', 'l']);

        e.unsubscribe(o, l);
        bucket = [];

        e.emit(bucket);

        Test.deepEqual(bucket, ['l']);
    });
});

