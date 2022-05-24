const {readFile, writeFile} = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);


readFile('./content/first.txt' , 'utf-8' , (err , data) => {
    // the first value is teh error 
    // the second is the response data
    if(err){
        return;
    }else{
        console.log(data);
    }
})

const path = './content/first.txt';
// doing multiple actions 
// turning this into a promise 
const getText = (path) => {
    return new Promise((resolve , reject) => {
        // passing another callback function
        readFile(path ,'utf-8' ,(err , data) => {
            if(err){
                reject(err)
                // spill back the error
            }else{
                resolve(data)
                // resolve back the data
            }
        })
    })
}

// calling the function 
getText(path).then((result) => {
    console.log(result)
    // the result call back defines 
    // what action to perform when the result callback 
    // is successful 
}).catch((err) => {
    console.log(err)
    // we catch the error here
})

// the above promise way does the actions Ascynchronously


const start = async() => {
    if(err){
        console.log(err)
        return;
    }else{
        const first = await readFilePromise('./content/first.txt' , 'utf-8');
        console.log(first)
        // we can only do something, with after the await is finished 
    }

}

start()
