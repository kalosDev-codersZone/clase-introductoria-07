function atmtoatm(value) {
  return value;
}
function atmtokpa(value) {
  return value * 101.325;
}
function atmtobar(value) {
  return value * 1.0133;
}
function atmtommhg(value) {
  return value * 760;
}
function kpatoatm(value) {
  return value * 0.0099;
}
function kpatokpa(value) {
  return value;
}
function kpatobar(value) {
  return value / 100;
}
function kpatommhg(value) {
  return value * 7.5006;
}
function bartoatm(value) {
  return value * 0.9869;
}
function bartokpa(value) {
  return value * 100;
}
function bartobar(value) {
  return value;
}
function bartommhg(value) {
  return value * 750.0617;
}
function mmhgtoatm(value) {
  return value / 760;
}
function mmhgtokpa(value) {
  return value * 0.1333;
}
function mmhgtobar(value) {
  return value * 0.0013;
}
function mmhgtommhg(value) {
  return value;
}
function convert(value, conversion) {
  return this[conversion](value);
}
function print() {
  let inputValue = document.getElementById("inputValue").value;
  let inputUnit = document.getElementById("inputUnit").value;
  first.textContent = inputUnit;
  let outputUnit = document.getElementById("outputUnit").value;
  second.textContent = outputUnit;
  let conversionClass = inputUnit + "to" + outputUnit;
  let result = convert(inputValue, conversionClass);
  document.getElementById("result").value = result;
}
