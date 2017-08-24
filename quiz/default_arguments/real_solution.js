function defaultArguments(func, params) {
  var names = func.names || func.toString()
    .replace(/\/\/.*$|\/\*.*?\*\/|\s/gm, '')
    .match(/(?:[\w]+(?:,[\w]+)*)?(?=\))/m)[0].split(',');
  
  var detour = function () {
    var input = arguments;
    return func.apply(this, names.map(function (val, i) {
      return i < input.length ? input[i] : params[names[i]];
    }));
  };
  
  detour.names = names;
  return detour;
}