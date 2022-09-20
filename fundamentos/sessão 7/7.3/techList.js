const techList = (listArray, name) => {
  if (listArray.length === 0) return 'Vazio!';
  const arrayOrded = listArray.sort();
  const newArray = []

  for (let index = 0; index < arrayOrded.length; index += 1) {
    newArray.push({
      tech: arrayOrded[index],
      name:name
    })
  }
  return newArray;  
}

module.exports = techList;