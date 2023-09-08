const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUserToLocalStorage(user) {
  try {
    const userJSON = JSON.stringify(user);
    localStorage.setItem("user", userJSON);
    console.log("User object saved to localStorage successfully.");
  } catch (error) {
    console.error("Error saving user object to localStorage:", error);
  }
}

saveUserToLocalStorage(user);
