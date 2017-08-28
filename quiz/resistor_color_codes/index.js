const normalizeNumber = (number) => {
  const lastEl = number.slice(-1);
  if (lastEl === 'k') {
    number = number.slice(0, -1);
    number = parseFloat(number) * 1000;
  } else if (lastEl === 'M') {
    number = number.slice(0, -1);
    number = parseFloat(number) * 1000000;
  } else {
    number = parseFloat(number);
  }

  return number.toFixed(0);
}

const encodeResistorColors = (ohmsString) => {
  const colorMap = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'gray',
    'white',
  ];

  const value = normalizeNumber(ohmsString.split(' ')[0]);
  let response = [];
  const valueCifre = value.slice(0, 2);
  for (let i = 0; i < valueCifre.length; i++) {
    let strChar = valueCifre.charAt(i);
    response.push(colorMap[strChar]);
  }

  response.push(colorMap[value.slice(2).length]);
  response.push('gold');

  return response.join(' ');
}
module.exports = encodeResistorColors;