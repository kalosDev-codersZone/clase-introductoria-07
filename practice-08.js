class Atm {
  constructor(value) {
    this.value = value;
  }
  atm() {
    return this.value;
  }
  kpa() {
    return this.value * 101.325;
  }
  bar() {
    return this.value * 1.0133;
  }
  mmhg() {
    return this.value * 760;
  }
}
class Kpa {
  constructor(value) {
    this.value = value;
  }
  atm() {
    return this.value * 0.0099;
  }
  kpa() {
    return this.value;
  }
  bar() {
    return this.value / 100;
  }
  mmhg() {
    return this.value * 7.5006;
  }
}
class Bar {
  constructor(value) {
    this.value = value;
  }
  atm() {
    return this.value * 0.9869;
  }
  kpa() {
    return this.value * 100;
  }
  bar() {
    return this.value;
  }
  mmhg() {
    return this.value * 750.0617;
  }
}
class Mmhg {
  constructor(value) {
    this.value = value;
  }
  atm() {
    return this.value * 0.9869;
  }
  kpa() {
    return this.value * 100;
  }
  bar() {
    return this.value;
  }
  mmhg() {
    return this.value;
  }
}

const unitMap = {
  atm: Atm,
  kpa: Kpa,
  bar: Bar,
  mmhg: Mmhg,
};

function convert(value, firstUnit, secondUnit) {
  let inputClass = unitMap[firstUnit];
  let instance = new inputClass(value);
  let convertedValue = instance[secondUnit]();
  return convertedValue;
}
function print() {
  let inputValue = document.getElementById("inputValue").value;
  let inputUnit = document.getElementById("inputUnit").value;
  first.textContent = inputUnit;
  let outputUnit = document.getElementById("outputUnit").value;
  second.textContent = outputUnit;
  let result = convert(inputValue, inputUnit, outputUnit);
  document.getElementById("result").value = result;
}
