const deNico = (key, m) => {
  const sortKey = key.split('').sort();
  let chunk = key.length;
  let response = '';

  const keyMeta = key.split('').map((char) => {
    let index = sortKey.findIndex((el) => {
      return el === char;
    });
    return index += 1;
  })

  for (let i = 0, j = m.length; i < j; i += chunk) {
    let temparray = m.slice(i, i + chunk);

    let temparrayRsp = keyMeta.map((index) => {
      return temparray.charAt(index - 1)
    })
    response = response.concat(temparrayRsp.join(''));
  }
  return response.trimRight();
}

module.exports = deNico;