const formInputs = document.querySelectorAll(".form-input");

formInputs.forEach((input) => {
  const label = input.previousElementSibling.textContent;
  const value = input.value;
  console.log(`${label} ${value}`);
});
