const defaultArguments = (func, defaultArg) => {
  debugger

  const regex = /\((.*?)\)/g;
  const m = regex.exec(func.toString());
  if (func.name == 'localCallback') {
    const positions = null;
  } else {
    const positions = m[1].split(',').map(a => a.trim())
  }

  function localCallback() {
    debugger
    if (positions !== null) {
      this.paramPositions = positions;
    }
    let args = [];
    let functionArgs = arguments
    this.paramPositions.forEach((element, index) => {
      if (functionArgs[index]) {
        args.push(arguments[index])
      } else if (defaultArg[element]) {
        args.push(defaultArg[element])
      }
    });

    return func.apply(this, args);
  };

  return localCallback
}

module.exports = defaultArguments;