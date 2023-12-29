// Example CSV data
const csvData = `ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26`;

// Step 1: Split the CSV data into rows
const rows = csvData.split('\n');

// Step 2: Extract the headers from the first row
const headers = rows[0].split(',');

// Step 3: Convert the headers to lowercase for consistency
const lowercaseHeaders = headers.map(header => header.toLowerCase());

// Step 4: Convert the remaining rows into objects
const objects = rows.slice(1).map(row => {
  const values = row.split(',');
  const object = {};

  lowercaseHeaders.forEach((header, index) => {
    object[header] = values[index];
  });

  return object;
});

console.log(objects);