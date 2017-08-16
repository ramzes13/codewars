const prefillRecursive = (n, v, response) => {
  if (n > 0) {
    response.push(v);
    prefillRecursive(--n, v, response);
  }

  return response;
}

const prefill = (n, v) => {
  let intValue = parseInt(n);
  if(intValue != n) {
    intValue = NaN;
  }
  if (isNaN(intValue) || intValue < 0) {
    throw { name: 'TypeError', message: `${n} is invalid` }
  }
  return prefillRecursive(intValue, v, []);
};

module.exports = prefill