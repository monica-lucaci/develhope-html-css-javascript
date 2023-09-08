//solo il primo elemento con .form-input class
const formInput = document.querySelector(".form-input");

if (formInput) {
  const formValue = formInput.value;
  console.log("Value of the .form-input field:", formValue);
} else {
  console.log('Element with class "form-input" not found.');
}

//tutti gli elementi con .form-input class e type="text", perche non ho capito cosa esattamente devo fare
const formInputs = document.querySelectorAll('.form-input');

if (formInputs.length > 0) {
  formInputs.forEach((input, index) => {
    if (input.type === 'text') {
      console.log(`Value of input ${index + 1}:`, input.value);
    }
  });
} else {
  console.log('No elements with class "form-input" found.');
}
