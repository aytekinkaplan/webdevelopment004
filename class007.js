const bmi = (weight, height) => {
    let result = weight / (height * height);
    return Math.round(result);
}

console.log(bmi(65, 1.8));
console.log(bmi(72, 1.6));
console.log(bmi(52, 1.75))

