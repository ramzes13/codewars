Function.prototype.pipe = function (fn) {
  console.log(arguments)
  return () => {
    // return fn.call(this, arguments);
    console.log(arguments[0])
    // return fn(a);
    return arguments[0].apply(this, arguments);
  }
};

var addOne = function (e) {
  return e + 1;
};

var square = function (e) {
  return e * e;
};

// var result = [1, 2, 3, 4, 5].map(addOne.pipe(square))
var result = [1, 2].map(addOne.pipe(square))
console.log(result)
// console.log(addOne.pipe(square))