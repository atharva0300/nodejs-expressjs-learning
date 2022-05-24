const {readFile , writeFile, writeFileSync} = require('fs');


readFile('./content/first.txt' , 'utf-8' ,  (err , result) => {
    if(err){
        console.log('printing the error : ' , err)
        return
    }
    console.log(result);
    // displays the contents of the file 

    const first = result;
    readFile('./content/subfolder/second.txt' , 'utf-8' , (err , result) =>{
        if(err){
            console.log('printing the error : ' , err)
            return
        }
        console.log(result);
    })

    const second = result
    writeFileSync('./content/third.txt' , 'Here is the result' , (err , result) =>{
        if(err){
            console.log('printing the error : ' , err)
            return
        }
        console.log(result);
    })
})

// reading the contents from the third file 
console.log('outside the readFile above')
readFile('./content/third.txt' , 'utf-8' , (err , result) =>{
    if(err){
        console.log('printing the error : ' , err)
        return
    }
    console.log(result);
});