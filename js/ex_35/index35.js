function repeatHello(callback) {
  setInterval(() => {
    callback();
  }, 1000);
}

const helloCallback = () => {
  console.log("Hello");
};

repeatHello(helloCallback);

//using an arrow function because it is defined  within the scope of the repeatHello function, which
//allows it to access the callback parameter directly without any issues
//also because it has a Concise Syntax
