// Create an array of numbers from 1 to 20
const numbers = [];
for (let i = 1; i <= 20; i++) {
    numbers.push(i);
}

// Print the entire array
console.log(numbers);

// Print each number from the array individually
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Alternatively, using forEach for iteration
// numbers.forEach(number => {
//     console.log(number);
// });
