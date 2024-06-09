// Declare the variable once
let name;

// String length
name = "John";
console.log(name.length); // Output: 4

// Convert to uppercase
name = "john";
console.log(name.toUpperCase()); // Output: "JOHN"

// Convert to lowercase
name = "JOHN";
console.log(name.toLowerCase()); // Output: "john"

// Trim
name = " John ";
console.log(name.trim()); // Output: "John"

// Get character
name = "John";
console.log(name[0]); // Output: "J"

// Substring
name = "John Snow";
console.log(name.substring(0, 4)); // Output: "John"
console.log(name.substring(4, 7)); // Output: " Sn"
console.log(name.substring(7, 11)); // Output: "ow"

// Slice
console.log(name.slice(0, 4)); // Output: "John"
console.log(name.slice(4, 7)); // Output: " Sn"
console.log(name.slice(7, 11)); // Output: "ow"

// Split
console.log(name.split(" ")); // Output: ["John", "Snow"]
console.log(name.split("")); // Output: ["J", "o", "h", "n", " ", "S", "n", "o", "w"]

// Replace
console.log(name.replace("John", "Jane"));
// Output: "Jane Snow"
console.log(name.replace("Snow", "Moon"));
// Output: "Jane Moon"
console.log(name.replace(" ", "-"));
// Output: "Jane-Snow"
console.log(name.replace(" ", ""));
// Output: "Janesnow"

// Trim
name = " John ";
console.log(name.trim()); // Output: "John"

// TrimStart
name = " John ";
console.log(name.trimStart()); // Output: "John "

// TrimEnd
name = " John ";
console.log(name.trimEnd()); // Output: " John"

// Includes
console.log(name.includes("Joh"));
// Output: true
console.log(name.includes("John"));
// Output: true
console.log(name.includes("Snow"));
// Output: false

// IndexOf
console.log(name.indexOf("Joh"));
// Output: 0
console.log(name.indexOf("John"));
// Output: 0
console.log(name.indexOf("Snow"));
// Output: -1 (Not found)

// LastIndexOf
console.log(name.lastIndexOf("Joh"));
// Output: 0
console.log(name.lastIndexOf("John"));
// Output: 0
console.log(name.lastIndexOf("Snow"));
// Output: -1 (Not found)

// Search
console.log(name.search("Joh"));
// Output: 0
console.log(name.search("John"));
// Output: 0
console.log(name.search("Snow"));
// Output: -1 (Not found)

// Replace
console.log(name.replace("John", "Jane"));
// Output: "Jane Snow"
console.log(name.replace("Snow", "Moon"));
// Output: "Jane Moon"
console.log(name.replace(" ", "-"));
// Output: "Jane-Snow"
console.log(name.replace(" ", ""));
// Output: "Janesnow"

// Trim
name = " John ";
console.log(name.trim()); // Output: "John"

// TrimStart
name = " John ";
console.log(name.trimStart()); // Output: "John "

// TrimEnd
name = " John ";
console.log(name.trimEnd()); // Output: " John"

// Split
console.log(name.split(" ")); // Output: ["John", "Snow"]
console.log(name.split("")); // Output: ["J", "o", "h", "n", " ", "S", "n", "o", "w"]

// Substring
console.log(name.substring(0, 4)); // Output: "John"
console.log(name.substring(4, 7)); // Output: " Sn"
console.log(name.substring(7, 11)); // Output: "ow"