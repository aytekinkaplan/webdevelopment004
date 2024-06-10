function whoIsBuyingLunch(names) {
    // Generate a random index between 0 and the length of the names array - 1
    const randomIndex = Math.floor(Math.random() * names.length);
    // Select the name at the random index
    const selectedPerson = names[randomIndex];
    // Return the formatted message
    return `${selectedPerson} is going to buy lunch today!`;
}

// Example usage:
const names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
console.log(whoIsBuyingLunch(names)); // Output example: "Ben is going to buy lunch today!"
