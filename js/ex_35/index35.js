function repeatHello (callback){
    setInterval(()=>{console.log("Hello")},1000)
}

repeatHello(()=>{});


/*
function repeatHello (callback){
    const callback= ()=>{console.log("Hello")}
    setInterval(callback,1000)
}

repeatHello(callback);
*/

//using an arrow function because it is defined
// within the scope of the repeatHello function, which 
//allows it to access the callback parameter directly without any issues
//also because it has a Concise Syntax