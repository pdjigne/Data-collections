// Step 1: Convert CSV data to an array of arrays
const csvData = `ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26`;

const dataArray = csvData.split('\n').map(row => row.split(','));

// Step 2: Create an array of objects with lowercase keys
const headers = dataArray.shift().map(header => header.toLowerCase());

const objectsArray = dataArray.map(row => {
  const obj = {};
  headers.forEach((header, index) => {
    obj[header] = row[index];
  });
  return obj;
});

// Step 3: Remove the last element from the sorted array
objectsArray.pop();

// Step 4: Insert a new object at index 1
const newObject = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
objectsArray.splice(1, 0, newObject);

// Step 5: Add an object to the end of the array
const endObject = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
objectsArray.push(endObject);

// Step 6: Calculate the average age using a loop
let totalAge = 0;
objectsArray.forEach(obj => {
  totalAge += parseInt(obj.age);
});

const averageAge = totalAge / objectsArray.length;
console.log(averageAge)