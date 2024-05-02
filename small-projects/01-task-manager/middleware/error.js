const {CustomAPIError} = require('../errors/custom-error')

const errorHandlerMiddleware = (err , req , res , next ) => {
    // this middleware, is invokes the last middlware 
    // incase is the request does not satisft any of the routes 
    // ie , the route does not exist 
    console.log('error : ' , err)

    // check if the error is an instance of the custom API calss or not 
    if(!err instanceof CustomAPIError){
        // if not 
        return res.status(err.statusCode).json({msg : err.message})
    }
    
    // setting hte erorr status which is obtained from the controller 
    // via err
    return res.status(err.status).json({err : 'Something went wrong, please try again'})
}

module.exports = errorHandlerMiddleware