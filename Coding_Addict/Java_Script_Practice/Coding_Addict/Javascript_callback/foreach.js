//foreEach method

const people =[
    {name: 'Shahila', age: 30, position: 'Developer'},
    {name: 'Mafraz', age: 32, position: 'Test Engineer'},
    {name: 'Shanza', age: 3, position: 'Student'}
];

 /*
==============
   method 1
==============
*/
// function showPerson(person){
//     console.log(person.position.toUpperCase());
// }
// people.forEach(showPerson);

/*
==============
   method 2
==============
*/
// people.forEach(function(item){
//     console.log(item.position.toUpperCase());
// });


/*
==============
   method 3
==============
*/
people.forEach((item) =>  console.log(item.position.toUpperCase()));

