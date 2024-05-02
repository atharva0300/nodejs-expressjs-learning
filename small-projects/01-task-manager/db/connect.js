const mongoose = require('mongoose')

const connectDB = (url) => {
    // conneting the insatnce to the database
    console.log('connected to database')
    return mongoose.connect(url, {
        // below 4 lines, are used to remove the warnings 
        useNewUrlParser: true,
        useCreateIndex : true,
        useFindAndModify : false,
        useUnifiedTopology : true,
    })
}

// exporting conndctDB
module.exports = connectDB


// the connect() will return a promise 
// so we handle promise with the then() and catch() 