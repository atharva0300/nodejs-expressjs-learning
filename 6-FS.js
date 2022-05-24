// file system 
const fs = require('fs');
// const {readFileSync , writeFileSync} = require('fs')

console.log(fs);

// we will now read and write in and from the files 
const first = fs.readFileSync('./content/first.txt' , 'utf-8');
// the first parameter is the file path
// the second parameter is the encoding of the file 

console.log(first)
// displays the contents of teh first file 

const second = fs.readFileSync('./content/subfolder/second.txt' , 'utf-8')
console.log(second)

// modifying the second file 
const number = 12
const name = 'person';
console.log('modifying the second file ')
fs.writeFileSync('./content/subfolder/second.txt' , `This is modified line, ${number} and ${name}`, {flag : 'a'})
console.log(second);
// making the flag : a 
// it is used to append the file ( meaning that if we are adding something to the file )
