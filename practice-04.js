function sumManyNumbers(m) {
  if (m === 1) return m;
  let sum = m + sumManyNumbers(m - 1); //15

  //15
  return sum; //15
}
console.log(sumManyNumbers(5)); //15
