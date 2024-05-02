const express = require('express')
const {Worker} = require('worker_threads') 
// improtign Worker class from the worker_threads

const app = express()
const port = process.env.PORT || 3000

app.get('/non-blocking/' , (req , res) => {
    res.status(200).send("This page is non-blocking")
})

app.get('/blocking' , async (req , res) => {
    const worker = new Worker('./worker.js')
    // creating a new instance of the Worker class 
    // this is hte instalce of the worker, which we have created 
    // in the worker.js file 

    worker.on('message' , (data) => {
        // obtain the data on the messsage event
        res.status(200).send(`result is ${data}`)
    })

    worker.on('error' , (error) => {
        // obtain the data on the messsage event
        res.status(200).send(`an error occured ${error}`)
    })

    // res.status(200).send(`result is ${counter}`)
})

// the non-blocking is wroking on the main thread 
// the blocking on is working on the other thread


app.listen(port , ()=> {
    console.log(`App listening on port ${port}`)
})