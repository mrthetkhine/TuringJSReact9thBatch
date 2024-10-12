const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();
function executeLater()
{
    setTimeout(()=>{
        console.log('execute later done');
        eventEmitter.emit('executeLaterDone',{
            data:"Some data"
        });
    },3000);
}
console.log('start');
executeLater();

eventEmitter.on('executeLaterDone',(event)=>{
    console.log('Run after execute later ',event);
});
console.log('done');