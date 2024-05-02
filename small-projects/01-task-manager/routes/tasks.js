const express = require('express')
const router = express.Router()

const {getAllTasks , createTask , getTask , updateTask , deleteTask} = require('../controllers/tasks')

// adding controllers
// appending to the router
// router.get('/' , getAllTasks) or 
router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


// exporting the router 
// so that other files such as app.js can use this router
module.exports = router