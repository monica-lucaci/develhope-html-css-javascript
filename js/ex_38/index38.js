const isLogged = true;

const checkIsLoggedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isLogged) {
            const randomNum = Math.random();
            resolve(randomNum);
        } else {
            reject(new Error("User is not logged in."));
        }
    }, 1000);
});

const checkRandomNumberPromise = (randomNum) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (randomNum > 0.5) {
                const data = { name: "John", age: 24 };
                resolve(data);
            } else {
                reject(new Error("Error: Random number is not greater than 0.5."));
            }
        }, 1000);
    });
};

checkIsLoggedPromise
    .then((randomNum) => {
        return checkRandomNumberPromise(randomNum);
    })
    .then((userData) => {
        console.log(userData);
    })
    .catch((error) => {
        console.error(error.message);
    });
