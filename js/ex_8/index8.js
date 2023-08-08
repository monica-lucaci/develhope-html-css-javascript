//Create an object `person`. 
//Print its key/value pair in the console. Try to use the method `Object.kyes`:
// Print values of person using Object.keys
const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}
console.log(person);

/*non ho capito cosa intende con stampa values usando Object.keys 
in quanto quest'ultimo stampa le keys e non le value
quindi scrivero tutti i metodi */

//stampa keys
let keys = Object.keys(person);
console.log(keys);

//stampa values
let values = Object.values(person);
console.log(values);

//stampa [key,value]
let entries = Object.entries(person);
console.log(entries);


