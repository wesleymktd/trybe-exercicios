const hydrate = (drink) => {
  const splitString = drink.slice('');
  let numberDrinkWater = 0;

  for (let index = 0; index < splitString.length; index += 1) {
    let numberInt = parseInt(splitString[index]);

    if(numberInt) {
      numberDrinkWater += numberInt;
    }
  }
  
  let cup = 'copo'
  if (numberDrinkWater > 1) {
    cup = 'copos'
  }
  return `${numberDrinkWater} ${cup} de água`
}

module.exports = hydrate;