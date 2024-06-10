// Fibonacci Series

const fibonacciGenerator = (num) => {
    let a = 0;
    let b = 1;
    let c = 0;
    for (let i = 0; i < num; i++) {
        console.log(c);
        a = b;
        b = c;
        c = a + b;
    }
};
fibonacciGenerator(10);
