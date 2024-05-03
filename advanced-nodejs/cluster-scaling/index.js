const express = require('express')

app = express()

const port = process.env.port || 3000

app.get('/heavy' , (req , res) => {
    let total = 0
    for(let i =0;i<99999999;i++){
        total++
    }
    res.status(200).send(`result : ${total}`)
})

app.listen(port , () => {
    console.log(`listening on port : ${port}`)
    console.log(`worker pid=${process.pid}`)
})

// this clustering can minic load balancing 
// without having to use docker
// your nodejs cluster application runs on a single core  
// usually when a requetst is made, the control goes to the nodejs cluster 
// there can be multple nodejs instances on different cores  which communiate 
// or coupled together with a cluster 
// this is called as clustering 
// the request can then be routed to a nodejs cluster using 
// scheduling algo like - round robin