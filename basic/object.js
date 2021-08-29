let name = 'Al Fatih';
let age = 4
let person = {
    name: 'Ryan',
    age: 28
};

//Dot Notation
person.name = 'Ryan'; // default choice

// Bracket Notation
let selection = 'name';
person[selection] = 'Al Fatih';

console.log(person.name);