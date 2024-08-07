Number.prototype.factorial = function () {
  let n = Math.floor(Math.abs(this));
  function factorialOfNumber(n) {
    //factorialOfNumber(2)
    if (n === 1) return 1;
    let product = n * factorialOfNumber(n - 1); //2*factorialOfNumber(1)
    //1
    return product; //2
  }
  return factorialOfNumber(n); //2
};

const number = -6.34; //6
console.log(number.factorial());
