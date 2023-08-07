
const persons = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
];
function nicknameMap(persons) {
    let nicknamesarray = [];
    for (i = 0; i < persons.length; i++) {
        const { name, age } = persons[i];
        const nickname = `${name}-${age}`
        nicknamesarray.push(nickname);
    }
    return nicknamesarray;
}
const nicknames = nicknameMap(persons);
console.log(persons);
console.log(nicknames);