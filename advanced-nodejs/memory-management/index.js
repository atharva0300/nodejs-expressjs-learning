const express = require('express')
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

app = express()

const port = process.env.port || 3000

let tasks = []

app.get('/' , (req, res) => {
    // closure with an external varialbe reference
    tasks.push(function(){
        return req.headers
    })

    // too much data
    // const hugeArray = new Array(10000000).fill(req)
    // node-cahce or memcached

    // circular object reference
    req.user = {
        id : 1,
        username : "Inefficient user",
        badObject :req,
    }

    // clear event emitter listeners
    eventEmitter.on('start' , () => {
        console.log('Useless event emitted')
    })

    setTimeout(() => {
        req.send('Hello world')
    })

    // clear the timeout, otherwise the timeouts 
    // can get stuck in the memory and cause problems
    //clearTimeout(resWithTimeout)
})

app.listen(port , () => {
    console.log(`server is running on : ${port}`)
})