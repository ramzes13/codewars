const Test = require('chai').assert;

const deNico = require('../../../quiz/basic_de_nico');

describe('basic_de_nico', function () {
    it('basic_de_nico_1', function () {
        Test.equal(deNico("crazy","cseerntiofarmit on  " ),"secretinformation" );
        Test.equal(deNico("crazy","cseerntiofarmit on" ),"secretinformation" );
        Test.equal(deNico("abc", "abcd"),"abcd" );
        Test.equal(deNico("ba","2143658709" ), "1234567890");
        Test.equal(deNico("a", "message"),"message" );
        Test.equal(deNico("key", "eky"),"key" );
        Test.equal(deNico("bf1", "d wa5b72ba7ag9h t ")," wd5ba2b77aa9hgt" );
    });
});
