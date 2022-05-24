// GLOBALS - NO  WINDOW 

/*
__dirname = path to the current directory 
__filename = file name 
require = function to use modules ( CommonJS )
process = info about env where the program is being executed 
*/

console.log(__dirname);
// this gives the current directory 

console.log(__filename);
// this gies the directory ( or the path ) to the file

setInterval(() => {
    console.log("interval")
}, 1000)
// the console will log interval, every 1000 millisecond 
// or 1 second 
