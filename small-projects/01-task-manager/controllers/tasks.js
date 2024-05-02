const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
// imporitng the asyncWrapper
const  {createCustomError} = require('../errors/custom-error')

// this is a controller
// this controller, takes a res , computes an sends a response
const getAllTasks = asyncWrapper( async (req , res) => {
    const allTasks = await Task.find({})

        // res.status(200).json({tasks , amount : tasks.length})
        // does the same thing
        // res.status(200).json({status : 'success' , data : {allTasks , nbHits : allTasks.length}})
        // does the samae thing
    res.status(201).json({allTasks})
})


const createTask = asyncWrapper (async (req , res) => {
        // creating a document in the collection 
        const task = await Task.create(req.body)
        res.status(201).json({task})
})

const getTask  = asyncWrapper( async (req , res , next ) => {
        const {id : taskID} = req.params
        const task = await Task.find({ _id : taskID})
        if(task.length==0 || task===undefined){
            // const error = new Error('Not Found')
            // error.status = 404
            // this abovr is a custom error 
            // we can pass this to the next ( which is a parameter to this controller )
            // return next(error)

            return next(createCustomError(`No task with id : ${taskID}` , 404))

            // if the task is not found
            // return res.status(404).json({msg : "No task with the ID available"})
        }

        res.status(200).json({task})
})


const updateTask  = asyncWrapper ( async (req , res) => {
    // look for the id in the collection 
    // then obtain the task 
    // then update hte task 
    // save it 
    const {id : taskID} = req.params
    const task = await Task.findOneAndUpdate({_id : taskID} , req.body , {
        new : true,
        // always return the updated task data
        // if set to false, it will return the old task data

        // passing the req.body tells to take the data from the req.body
        runValidators : true, 
        overwrite : true

    })
    if(!task){
        return res.status(404).json({msg : "The task with the ID is not found"})
    }

    return res.status(200).json({task})
})

const deleteTask = asyncWrapper ( async(req , res) => {
    // look for the id in the collection 
    // then obtain the task
    // then delete
    const { id : taskID} = req.params
    const task = await Task.findOneAndDelete({_id : taskID})
    if(!task){
        // if the task does not exists 
        return res.status(404).json({msg : "No task with the ID present in the collection"})
    }

    res.status(200).json({msg : 'Task Successfully Deleted'})
})

// expoeritng our controller
// {} multiple controllers can be exported using {}
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}