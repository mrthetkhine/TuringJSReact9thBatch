const fs = require('node:fs');

function copy(source,destination,callback)
{
    fs.readFile(source,(err,buffer)=>{
        if(err)
        {
            callback();
        }
        else
        {
            fs.writeFile(destination,buffer,callback);
        }
    });
}
copy('./copy.js','./another-copy.js',(data)=>{
    console.log('Callback ',data);
});