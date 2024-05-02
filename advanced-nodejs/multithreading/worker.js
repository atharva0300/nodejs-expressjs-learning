const {parentPort} = require('worker_threads')

let counter=0
for(let i=0;i<9999999999;i++){
    counter++
}

//  by using the postMessage, we communicate withthe main thread 
// we are sending the counter value to the main thread
parentPort.postMessage(counter)

