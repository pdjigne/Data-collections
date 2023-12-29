// PART 5. 
const csvData = [
    ["ID", "Name", "Occupation", "Age"],
    ["42", "Bruce", "Knight", "41"],
    ["57", "Bob", "Fry Cook", "19"],
    ["63", "Blaine", "Quiz Master", "58"],
    ["98", "Bill", "Doctor’s Assistant", "26"]
  ];
  
  const objectsArray = csvData.slice(1).map(row => {
    return {
      id: row[0],
      name: row[1],
      occupation: row[2],
      age: row[3]
    };
  });
  
  console.log(objectsArray);

//   Step 2: Modifying the Objects Array


objectsArray.pop();

const newObject = {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25"
};

objectsArray.splice(1, 0, newObject);

console.log(objectsArray);
// Step 3: Calculating Average Age
let totalAge = 0;

for (let i = 0; i < objectsArray.length; i++) {
  totalAge += parseInt(objectsArray[i].age);
}

const averageAge = totalAge / objectsArray.length;

console.log(averageAge);
// Step 4: Transforming Data back to CSV Format

const csvOutput = objectsArray.reduce((acc, obj) => {
  const values = Object.values(obj);
  const row = values.join(",");
  return acc + row + "\n";
}, "");

console.log(csvOutput);
