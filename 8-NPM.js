// npm - global command , comes with node 
// npm -- version 

// local dependency - use it only in this particular project 
// npm i <packageName>

// global dependency - use it in any project 
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// pacage.json = manifest file (stores important info about project/package)
// manual approach ( create package.json in the root, create properties etc )
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const lodash = require('lodash');
// importing lodash

console.log(lodash);
const items = [1, [2, [3 ,[4]]]]
const newItems = lodash.flattenDeep(items);
// flattenDeep converts any dimensional array to 1 dimensional array
console.log(newItems);

