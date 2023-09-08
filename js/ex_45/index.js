//const firstName = document.querySelector('#firstName').value;
//console.log(firstName);

const firstNameInput = document.getElementById("firstName");

if (firstNameInput) {
  const firstNameValue = firstNameInput.value;
  console.log("First Name:", firstNameValue);
} else {
  console.log('Element with id "firstName" not found.');
}
