// the path module
const path = require('path');

console.log(path);

// joining teh file paths 
const filePath = path.join('/content' , 'subfoler' , 'text.txt')

console.log(filePath);
// console logging the file Path

const base = path.basename(filePath);
console.log(base);
// this gives the base of the file path 

const absolute = path.resolve(__dirname , 'content' , 'subfolder' , 'text.txt' );
console.log(absolute);
// this gives the complete joined path 

