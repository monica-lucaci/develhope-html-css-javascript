/*# Arrow functions

Turn the variables functions into arrow functions
 and combine the functions so that the result
  of the following mathematical operation is printed on the 
  console: `((2 + 4) * (5 + 2) - 2) / 5`*/
const sum = (a, b) => a + b;


const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide =(a, b) => a / b;

const log =  (value) => console.log(value);


result=divide(subtract(multiply(sum(2,4),sum(5,2)),2),5);
log(result);