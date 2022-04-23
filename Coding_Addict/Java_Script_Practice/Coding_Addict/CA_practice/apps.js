// Fulname Array
const names = ['anna', 'kathy', 'bob'];
const lastName = 'peter';
let newArray = [];

for (let i = 0; i < names.length; i++) {
  newArray.push(`${names[i]} ${lastName} `);
}
console.log(newArray);

// Array Total
const gas = [20, 40, 50, 60];
const food = [10, 40, 50, 40];

function calculateTotal(arr) {
  let total = 0;
  for(let i = 0; i<arr.length; i++){
     total +=arr[i];
  }
  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([200,500,300]);

console.log({
    gas: gasTotal,
    food: foodTotal,
    random: randomTotal
});
