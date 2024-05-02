const connectDB = require('./db/connect.js')
const express = require('express')
// importing express 
const app = express()
const tasks = require('./routes/tasks.js')
require('dotenv').config()
const notFound = require('./middleware/not_found')
const errorHandlerMiddleware = require('./middleware/error')


// setting the middleware
app.use(express.json())
// use the statis files 
app.use(express.static('./public'))
app.use('/api/v1/tasks' , tasks)
// using the notFound middlware, if the route does not exists
app.use(notFound)
app.use(errorHandlerMiddleware)


// routes 
app.get('/hello' , (req , res) => {
    // method of the api is 'GET'
    // hello is the api endpoint
    // navigate to localhost:3000/hello on the browser 
    // req ->  request 
    // res -> response

    // sendintg the response
    res.send('Hello here')
})

/*
these are the routes we want to setup

app.get('/api/v1/tasks')    -> get all the tasks
app.post('/api/v1/tasks')   -> create a new task
app.get('/api/v1/tasks/:id')    -> get single task
app.patch('/api/v1/tasks/:id')  -> update task
app.delete('/api/v1/tasks/:id') -> delete task

*/

const port = 3000
// port nimber 

// if the connectDb is successful 
// ie _> connectecd to the database, then only 
// spin the server 
const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port , console.log(`server is listening on port ${port}`))
    }catch(error){
            console.log('server error : ' , error)
    }
}

start()