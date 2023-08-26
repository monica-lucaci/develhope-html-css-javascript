class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const developer = new Person(1, "Mario", "Rossi", 25);
// Print developer as JSON object

//console.log(JSON.stringify(developer))

const developerJSON = JSON.stringify(developer);

console.log(developerJSON);
