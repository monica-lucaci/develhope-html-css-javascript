function sum(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5;
}

console.log(sum(1, 2, 3, 4, 5));
//-----------------------------------------------
//using rest parameter

function sum2(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }

console.log(sum2(1, 2, 3, 4, 5,));