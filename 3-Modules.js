// Modules 

// modules -> splitting the codes to multple files 

const sayHi = (name) => {
    console.log('hello ' , name);
}

sayHi('atharva')
console.log(module);

// look at the exports object 
// whateever we add in the exports, we can access 
// that variable or function 
// outside the file as well
module.exports = sayHi

/*
john  = 'john';
module.exports = {john};
*/





