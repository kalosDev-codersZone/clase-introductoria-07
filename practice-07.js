function hello() {
  return "hello";
}
var home = "home";

const call = "hello";

console.log(this.home);
console.log(this[call]());
