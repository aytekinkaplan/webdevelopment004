function bmiCalculator(weight, height) {
    let bmi = weight / (height * height);
    let roundedBMI = Math.round(bmi);

    if (roundedBMI < 18.5) {
        return `Your BMI is ${roundedBMI}, so you are underweight.`;
    } else if (roundedBMI >= 18.5 && roundedBMI <= 24.9) {
        return `Your BMI is ${roundedBMI}, so you have a normal weight.`;
    } else {
        return `Your BMI is ${roundedBMI}, so you are overweight.`;
    }
}

console.log(bmiCalculator(65, 1.8));
console.log(bmiCalculator(72, 1.6));
console.log(bmiCalculator(52, 1.75))