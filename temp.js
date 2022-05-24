// to import the sayHi function 
// we use 'require' and not 'import'

const names = require('./temp2');
const func = require('./3-Modules');


console.log(names.john);

// exedutes the function
func(names.john);

func(names.atharva)