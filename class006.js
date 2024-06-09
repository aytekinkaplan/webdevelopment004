const remainingTime = (age, retireAge) => {
    let result = retireAge - age;
    let remainingDays = result * 365;
    let remainingWeeks = result * 52;
    let remainingMonths = result * 12;

    return `You have ${remainingDays} days, ${remainingWeeks} weeks, and ${remainingMonths} months left until you can retire.`;

}

console.log(remainingTime(25, 65))