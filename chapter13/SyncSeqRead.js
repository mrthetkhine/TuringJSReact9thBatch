const fs = require('node:fs');
let start = new Date();
//console.log("Start");
let p1 = fs.promises.readFile('hello.txt');
let p2 = 
p1.then(data=>{
    fs.promises.readFile('hello2.txt')
                .then(data2=>{
                    let end = new Date();
                    let time = end- start;
                    console.log("Time ",time);
                })
})