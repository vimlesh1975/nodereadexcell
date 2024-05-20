const xlsx = require('xlsx');
const path = require('path');

// Path to the Excel file
const filePath = path.resolve(__dirname, 'aa.xlsx');

// Read the file
const workbook = xlsx.readFile(filePath);

// Get the first sheet name
const sheetName = workbook.SheetNames[0];

// Get the first sheet
const sheet = workbook.Sheets[sheetName];

// Convert the sheet to JSON
const data = xlsx.utils.sheet_to_json(sheet);

// Log the data
console.log(data);
