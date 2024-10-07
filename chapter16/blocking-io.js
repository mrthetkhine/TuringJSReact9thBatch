const fs = require('node:fs');
const data = fs.readFileSync('./helloworld.js');
console.log('Data ',data.toString());