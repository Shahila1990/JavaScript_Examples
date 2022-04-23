//filter
const people = [
  { name: 'Anna', age: 32, position: 'doctor' },
  { name: 'Rachel', age: 40, position: 'nurse' },
  { name: 'John', age: 26, position: 'doctor' },
];

const youngPeople = people.filter(function(person){
    return person.age < 30;
});
console.log(youngPeople);
console.log(youngPeople[0].name);

const doctors = people.filter(person => person.position === 'doctor');
console.log(doctors);

//find in object
const employee = [
  { name: 'Anna', age: 32, position: 'doctor' , id: 2 },
  { name: 'Rachel', age: 40, position: 'nurse' , id: 2 },
  { name: 'John', age: 26, position: 'doctor' , id: 3 },
];

const newpeople = employee.find(function(person){
    return person.id === 2;
});

console.log(newpeople);
console.log(newpeople.name);



//find in array
const names = ['bob', 'john', 'Anna'];
console.log(
    names.find(function(name){
        return name === 'bob'
    })
    );

console.log(
    names.find(name => name === 'Anna'))





