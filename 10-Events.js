// events 
// event-driven proramming 
// used heavily in nodejs 
const EventEmitter = require('events');
// events module is a default module 


// emmit an event 
const customEmitter = new EventEmitter();
// creating a new insstance of the EventEmitter class
// we have the object 

// on - listen for a specific event 
customEmitter.on('response' , () => {
    console.log(`data received`)
});

customEmitter.on('response' , (name , id) => {
    console.log('some other logic here')
    console.log(name , ' : ' , id)
})


customEmitter.emit('response' , 'atharva' , 34);
// the emitter emits the event 
