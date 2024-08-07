function sumManyNumbers(m) {
  if (m === 5) {
    return m;
  }
  let sum = m + sumManyNumbers(m + 1); //1+sunManyNumbers(2)
  //15
  return sum; //15
}
console.log(sumManyNumbers(1)); //15
