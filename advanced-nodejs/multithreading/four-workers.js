const {workerData , parentPort} = require('worker_threads')
// workerData is the parameters which it will be taking form the main thread

let counter=0
for(let i=0;i<9999999999 / workerData.thread_count ;i++){
    // workerData.thead_count _> gives the thread count 
    // then the 9999... / numer of threads is divided 
    // so the compultataion is split among the worker threads 
    // this brings parallelism

    counter++
}

//  by using the postMessage, we communicate withthe main thread 
// we are sending the counter value to the main thread
parentPort.postMessage(counter)

