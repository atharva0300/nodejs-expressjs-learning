const Server = require("server");

// started operating system process
console.log('first')
setTimeout(() => {
    console.log('second')
} , 2000)

console.log('third');
// completed and exited operating system process



// setInterval is asynchronous 
setInterval(() => {
    console.log('fourth')
} ,1000)
// setInterval does not stop 
// and we need to kill the process in the terminal 

