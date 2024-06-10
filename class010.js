function checkLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year.";
            } else {
                return "Not leap year.";
            }
        } else {
            return "Leap year.";
        }
    } else {
        return "Not leap year.";
    }
}

// Test cases
console.log(checkLeapYear(2400)); // Output: "Leap year."
console.log(checkLeapYear(1989)); // Output: "Not leap year."
console.log(checkLeapYear(2000)); // Output: "Leap year."
console.log(checkLeapYear(2100)); // Output: "Not leap year."
console.log(checkLeapYear(2024)); // Output: "Leap year."
console.log(checkLeapYear(1900)); // Output: "Not leap year."
