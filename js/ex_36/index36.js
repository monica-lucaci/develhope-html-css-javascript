function repeatHello(callback) {
  const intervalId = setInterval(callback, 1000);

  setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval cleared after 5 seconds.");
  }, 5000);
}

const helloCallback = () => {
  console.log("Hello");
};

repeatHello(helloCallback);
