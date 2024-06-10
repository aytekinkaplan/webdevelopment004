var numberOfBottles = 99;
while (numberOfBottles >= 0) {
    // Determine the correct word based on the number of bottles
    var bottleWord = "bottles";
    if (numberOfBottles === 1) {
        bottleWord = "bottle";
    }

    // Print the lyrics
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");

    numberOfBottles--; // Decrement the number of bottles

    // Determine the correct word for the next line based on the decremented number of bottles
    var nextBottleWord = "bottles";
    if (numberOfBottles === 1) {
        nextBottleWord = "bottle";
    } else if (numberOfBottles === 0) {
        nextBottleWord = "bottles"; // Special case for 0
    }

    // Print the next state of bottles
    if (numberOfBottles >= 0) {
        console.log(numberOfBottles + " " + nextBottleWord + " of beer on the wall.");
    } else {
        console.log("No more bottles of beer on the wall.");
    }
}
