const http = require('http')

/* const server = htpp.createServer((req , res) => {
    resizeBy.end('Welcome')
})
*/

// using event emitter API 
const server = http.createServer()
//emails request event 
// subscribe to it 
// listen to it 
// respond to it
server.on('request' , (req , res) => {
    res.end('Welcome')
})


server.listen(5000);

// the server has the ability to listen to the event 

