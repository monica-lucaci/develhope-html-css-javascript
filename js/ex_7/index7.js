function multiplyByTwo(value) {
  let number = 2;
  let inner = () => value * number;
  return inner;
}
console.log(multiplyByTwo(4)());
