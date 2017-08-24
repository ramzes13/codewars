const Test = require('chai').assert;

const encodeResistorColors = require('../../../quiz/resistor_color_codes');

describe('resistor_color_codes', function () {
  it('resistor_color_codes1', function () {
    Test.equal(encodeResistorColors("10 ohms"), "brown black black gold")
    Test.equal(encodeResistorColors("47 ohms"), "yellow violet black gold")
    Test.equal(encodeResistorColors("100 ohms"), "brown black brown gold")
    Test.equal(encodeResistorColors("220 ohms"), "red red brown gold")
    Test.equal(encodeResistorColors("330 ohms"), "orange orange brown gold")
    Test.equal(encodeResistorColors("470 ohms"), "yellow violet brown gold")
    Test.equal(encodeResistorColors("680 ohms"), "blue gray brown gold")
    Test.equal(encodeResistorColors("1k ohms"), "brown black red gold")
    Test.equal(encodeResistorColors("4.7k ohms"), "yellow violet red gold")
    Test.equal(encodeResistorColors("10k ohms"), "brown black orange gold")
    Test.equal(encodeResistorColors("22k ohms"), "red red orange gold")
    Test.equal(encodeResistorColors("47k ohms"), "yellow violet orange gold")
    Test.equal(encodeResistorColors("100k ohms"), "brown black yellow gold")
    Test.equal(encodeResistorColors("330k ohms"), "orange orange yellow gold")
    Test.equal(encodeResistorColors("1M ohms"), "brown black green gold")
    // Test.equal(encodeResistorColors("2M ohms"), "red black green gold")
  })
})
