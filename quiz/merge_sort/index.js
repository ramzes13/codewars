const mergesorted = (a, b) => {
  while (b.length) {
    let value = b.pop();
    let exist = false;
    for (var i = a.length - 1; i >= 0; i--) {
      if (value >= a[i]) {
        a.splice(i + 1, 0, value);
        exist = true;
        break;
      }
    }
    if (!exist) {
      a.splice(i + 1, 0, value);
    }
  }

  return a;
}
module.exports = mergesorted;