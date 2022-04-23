/*
==============
   method 1
==============
*/
const people = [
  { name: 'Anna', age: 32, position: 'doctor' },
  { name: 'Rachel', age: 40, position: 'nurse' },
  { name: 'John', age: 26, position: 'doctor' }
];

//normal callback
//asigning to a variable since map return a new array
// const fullName = people.map(function (person) { 
//   return person.name + ' ' + 'Smith';
// });

// const newPeople = people.map(function (person){
//     return {
//         firstName: person.name.toUpperCase(),
//         personAge: person.age + 20,
//     };
// });

//Arrow function
const fullName = people.map((person) => person.name + ' ' + 'Smith');
let newPeople = people.map((person) =>({
        firstName: person.name.toUpperCase(),
        personAge: person.age 
    })) 

console.log(fullName);
console.log(newPeople);


const names = people.map(function(person){
    return `<h1> ${person.name} </h1>`
})

document.body.innerHTML = names.join('');
console.log(names);
