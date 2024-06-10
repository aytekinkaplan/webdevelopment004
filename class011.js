// Collections
let names = ["John", "Jane", "Mark"];
console.log(names.length); // Output: 3
console.log(names[0]); // Output: "John"
console.log(names[1]); // Output: "Jane"
console.log(names[2]); // Output: "Mark"
console.log(names[3]); // Output: undefined

// Looping through an array
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// Adding and removing elements
names.push("Sarah");
console.log(names); // Output: ["John", "Jane", "Mark", "Sarah"]
names.pop();
console.log(names); // Output: ["John", "Jane", "Mark"]

// Searching an array
let index = names.indexOf("Mark");
console.log(index); // Output: 2

// Sorting an array
names.sort();
console.log(names); // Output: ["Jane", "John", "Mark"]

// Reversing an array
names.reverse();
console.log(names); // Output: ["Mark", "John", "Jane"]

// Filtering an array
let filteredNames = names.filter(function (name) {
    return name.startsWith("J");
});
console.log(filteredNames); // Output: ["John", "Jane"]

// Mapping an array
let mappedNames = names.map(function (name) {
    return name.toUpperCase();
});
console.log(mappedNames); // Output: ["JANE", "JANE", "JANE"]

// Filtering and mapping an array
let filteredMappedNames = names
    .filter(function (name) {
        return name.startsWith("J");
    })
    .map(function (name) {
        return name.toUpperCase();
    });
console.log(filteredMappedNames); // Output: ["JANE", "JANE"]

// Sorting and mapping an array
let sortedMappedNames = names
    .sort()
    .map(function (name) {
        return name.toUpperCase();
    });
console.log(sortedMappedNames); // Output: ["JANE", "JANE", "JANE"]

// Searching and mapping an array
let searchedMappedNames = names
    .filter(function (name) {
        return name.startsWith("J");
    })
    .map(function (name) {
        return name.toUpperCase();
    });
console.log(searchedMappedNames); // Output: ["JANE", "JANE"]

// Searching and filtering an array
let searchedFilteredNames = names
    .filter(function (name) {
        return name.startsWith("J");
    })
    .filter(function (name) {
        return name.length > 4;
    });
console.log(searchedFilteredNames); // Output: ["Jane"]

// Searching, filtering, and mapping an array
let searchedFilteredMappedNames = names
    .filter(function (name) {
        return name.startsWith("J");
    })
    .filter(function (name) {
        return name.length > 4;
    })
    .map(function (name) {
        return name.toUpperCase();
    });
console.log(searchedFilteredMappedNames); // Output: ["JANE"]