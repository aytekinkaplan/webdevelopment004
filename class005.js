//Basic Arithmetic and the Modulo Operator
let x = 5;
let y = 2;
console.log(x + y); // Output: 7
console.log(x - y); // Output: 3
console.log(x * y); // Output: 10
console.log(x / y); // Output: 2.5
console.log(x % y); // Output: 1

//Comparison Operators
let a = 5;
let b = 2;
console.log(a == b); // Output: false
console.log(a != b); // Output: true
console.log(a > b); // Output: true
console.log(a < b); // Output: false
console.log(a >= b); // Output: true
console.log(a <= b); // Output: false

//Logical Operators
let c = 5;
let d = 2;
console.log(c > 0 && d > 0); // Output: true
console.log(c > 0 || d > 0); // Output: true
console.log(!(c > 0)); // Output: false

//Increment and Decrement Operators
let e = 5;
console.log(e++); // Output: 5
console.log(e); // Output: 6
console.log(++e); // Output: 7
console.log(e--); // Output: 7
console.log(e); // Output: 6
console.log(--e); // Output: 5

//Ternary Operator
let f = 5;
let g = 2;
let h = f > g ? "Greater" : "Lesser";
console.log(h); // Output: "Greater"

//Bitwise Operators
let i = 5;
let j = 2;
console.log(i & j); // Output: 0
console.log(i | j); // Output: 7
console.log(i ^ j); // Output: 7
console.log(~i); // Output: -6
console.log(i << j); // Output: 20
console.log(i >> j); // Output: 0
console.log(i >>> j); // Output: 0

//Miscellaneous Operators
let k = 5;
let l = 2;
console.log(k + l); // Output: 7
console.log(k - l); // Output: 3
console.log(k * l); // Output: 10
console.log(k / l); // Output: 2.5
console.log(k % l); // Output: 1

//Human Age in Dog Years
let age = 5;
let dogYears = age * 7;
console.log(dogYears); // Output: 35

//Fibonacci Sequence
let n = 5;
let a = 0;
let b = 1;
for (let i = 0; i < n; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}

//Factorial
let n = 5;
let fact = 1;
for (let i = 1; i <= n; i++) {
    fact *= i;
}
console.log(fact); // Output: 120

//Sum of Natural Numbers
let n = 5;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log(sum); // Output: 15

//Sum of Array Elements
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum); // Output: 15

//Reverse String
let str = "Hello";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log(reversed); // Output: olleH
