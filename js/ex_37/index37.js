const number = 15;
const checkNumber = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve(number);
  } else {
    reject(new Error("Number is not greater than 10."));
  }
});

checkNumber
  .then((value) => {
    console.log("The number is:", value);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
