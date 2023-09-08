const user = {
    id: 1,
    name: "John",
    age: 25,
  };
  function getUserFromLocalStorage() {
    try {
      const userJSON = localStorage.getItem('user');
  
      if (userJSON === null) {
        console.log('User data not found in localStorage.');
        return;
      }
  
      const user = JSON.parse(userJSON);

      console.log('User data retrieved from localStorage:');
      console.log(user);
    } catch (error) {
      console.error('Error retrieving user data from localStorage:', error);
    }
  }

  getUserFromLocalStorage();
  