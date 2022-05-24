// Streams 

/*
1. Writable 
2. Readable 
3. Duplex 
4. Transform
*/

const {writeFileSync} = require('fs')

for(let i=0;i<10000;i++){
    writeFileSync('./content/big.txt' , `Hello World ${i}`, {flag : a})
}