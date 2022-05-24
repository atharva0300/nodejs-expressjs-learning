/*
Built in modules 
1. OS 
2. Path 
3. FS
4. HTTP
*/

const os = require('os');
// we import the os module just like that 
// because, os is a built in module 

console.log(os)

// get the userInfo about the user 
const user = os.userInfo()
console.log('User information : ')
console.log(user);

// method returns the system uptime in seconds 
console.log('system uptime is : ' , os.uptime())
// the uptime is a function
// this returns the uptime of the system in milliseconds 

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}
console.log('Data about my operating system : ')
console.log(currentOS);
