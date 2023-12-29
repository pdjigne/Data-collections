function generateTwoDimensionalArray(csvString) {
    const rows = csvString.split('\n');
    const headings = rows[0].split(',');
  
    const result = [];
    result.push(headings);
  
    for (let i = 1; i < rows.length; i++) {
      const rowData = rows[i].split(',');
      result.push(rowData);
    }
  
    return result;
  }
  
  const csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
  const twoDimensionalArray = generateTwoDimensionalArray(csvString);
  
  console.log(twoDimensionalArray);


// Code to parse CSVs
function parseCSV(csvData) {
    // Implementation goes here
  }
//   Working with Arrays


// Code to work with arrays
const numbers = [1, 2, 3, 4, 5];

// Accessing elements
const firstElement = numbers[0];

// Modifying elements
numbers[2] = 10;

// Adding elements
numbers.push(6);

// Removing elements
numbers.pop();


// Code to work with objects
const person = {
  name: "John Doe",
  age: 30,
  profession: "Developer"
};

// Accessing properties
const name = person.name;

// Modifying properties
person.age = 31;

// Adding properties
person.location = "New York";

// Removing properties
delete person.profession;
// Code to use conditional logic
const age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
// Code to use loops
const numbers = [1, 2, 3, 4, 5];

// For loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// While loop
let i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}
// Code to transform data
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);

const filteredNumbers = numbers.filter((number) => number > 3);

const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);