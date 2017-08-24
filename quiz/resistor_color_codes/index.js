const normalizeNumber = (number) => {
  const lastEl = number.slice(-1);
  if(lastEl === 'k') {
    number = number.slice(0, -1);
    number = parseFloat(number) * 1000;
  } else if (lastEl === 'M') {
    number = number.slice(0, -1);
    number = parseFloat(number) * 1000000;
  }

  return number + '';
}


const encodeResistorColors = (ohmsString) => {
  const colorMapArr = ['black', 'brown'];
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
  ]

  const errorMap = {
    gold: 5,
    silver: 10,
  }

  const value = normalizeNumber(ohmsString.split(' ')[0]);
  let response = [];
  const regex = /(0*)$/;
  const endZeros = regex.exec(value)[1];
  const valueCifre = value.slice(0, -endZeros.length);
  for (let i = 0; i<valueCifre.length; i++){
    let strChar = valueCifre.charAt(i);
    response.push(colorMap[strChar]);
  }

  if(response.length < 2) {
    response.push(colorMap[0]);
  }

  response.push(colorMap[endZeros.length - 1]);
  response.push('gold');

  return response.join(' ');
}
module.exports = encodeResistorColors;