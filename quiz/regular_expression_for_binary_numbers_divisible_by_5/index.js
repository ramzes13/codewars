
// const divisibleByFive = /^0|(101(0)*)$/; // partial solution
const divisibleByFive = /^(((0|(10)1)|(11)(01)*((1|00)1))|(((10)0)|(11)(01)*((1|00)0))(1|0(01)*((1|00)0))*(0(01)*((1|00)1)))+$/; // partial solution
module.exports = divisibleByFive;

