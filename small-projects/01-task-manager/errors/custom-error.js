// creating custom errors 
class CustomAPIError extends Error{
    constructor(message , statusCode){
        // setting the message and the statusCode
        super(message)
        this.statusCode = statusCode
    }
}

const createCustomError = (msg , statusCode ) => {
    return new CustomAPIError(msg , statusCode )
}

module.exports = {
    // exporting, both the object and the class 
    createCustomError,
    CustomAPIError
}