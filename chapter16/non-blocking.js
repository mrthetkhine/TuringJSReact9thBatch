const fs = require('node:fs');
fs.readFile('./helloworld.js',(err,data)=>{
    console.log('Data ',data.toString());
});
console.log('After readFile');