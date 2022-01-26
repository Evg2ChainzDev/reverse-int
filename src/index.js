module.exports = function reverse (n) {
  let numbStr = '' + n;
  let ArrStr = numbStr.split('');
  console.log(ArrStr)
  let newArr = [];
  for (let i=0; i<ArrStr.length; i++) {
    newArr[i] = ArrStr[ArrStr.length-1-i]
  }
  console.log(newArr)
  newArr = parseInt(newArr.join(''));
  console.log(newArr)
  return newArr
}
