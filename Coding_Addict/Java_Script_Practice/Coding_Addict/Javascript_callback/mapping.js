/*
==============
   method 1
==============
*/
const people = [
    {name: 'Anna' , age: 32 , position: 'doctor'},
    {name: 'Rachel' , age: 40 , position: 'nurse'},
    {name: 'John' , age: 26 , position: 'doctor'}
];

const fullName = people.map(function (person){
    return person.name + "Smith"
});

console.log(fullName);