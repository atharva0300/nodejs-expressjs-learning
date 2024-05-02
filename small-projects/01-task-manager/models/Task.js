const mongoose = require('mongoose')
// importing mongoose 

//  setting the schema
// the structure for hte documnent
const TaskSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , 'must provide name'],
        trim : true,
        maxlength : [20 , 'name can not be more than 20 characters']
    },

    completed : {
        type : Boolean,
        default : false
    }


    // key : value 
    // key : dataType
})

// mongoose automatically creates a collection named : tasks
// it is T in smaller case and plural word
module.exports = mongoose.model('Task' , TaskSchema)
// Task -> model name 
// TaskSchema -> model Schema