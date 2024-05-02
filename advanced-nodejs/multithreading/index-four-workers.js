const express = require('express')
const {Worker, workerData} = require('worker_threads') 
// improtign Worker class from the worker_threads

const app = express()
const port = process.env.PORT || 3000
const THREAD_COUNT = 4

app.get('/non-blocking/' , (req , res) => {
    res.status(200).send("This page is non-blocking")
})

// function to create a worker
function createWorker(){
    return new Promise((resolve , reject) => {
        const worker = new Worker('./four-workers.js' , {
            // set the workerData.thread_count to THREAD_COUNT 
            workerData : {thread_count : THREAD_COUNT}
        })
        // creating a new instace of the four-workers class 

        // handling the callbacks ( resolve and reject )
        worker.on('message' , (data) => {
            resolve(data)
        })
    
        worker.on('error' , (error) => {
            reject(`An error occured ${error}`)
        })
    })
}

app.get('/blocking' , async (req , res) => {
    const workerPromises = []
    
    for(let i=0;i<THREAD_COUNT;i++){
        // for each thread, create a worker
        workerPromises.push(createWorker())
    }

    // wait for all the workerPromises 
    // obtain the thread_results
    const thread_results = await Promise.all(workerPromises)

    // add the results of each thread
    let total = 0
    for(let i=0;i<4;i++){
        total += thread_results[i]
    }

    res.status(200).send(`result is ${total}`)
})

// the non-blocking is wroking on the main thread 
// the blocking on is working on the other thread


app.listen(port , ()=> {
    console.log(`App listening on port ${port}`)
})