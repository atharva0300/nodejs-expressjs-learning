const http = require('http');

console.log(http)
// displyaing the http module 

// creating a server 
const server = http.createServer((req , res) => {
    // the req is the incoming request from the client 
    // the res is the response that we are sending back
    /*
    res.write('Welcome learner')
    // this writes the request 
    */
    // console.log(req)
    // displaying the request object 

    if(req.url === '/'){
        // if the url is the homepage 
        // then
        res.end('Welcome to homepage learner')
    }if(req.url === '/about'){
        res.end('Here is the about page')
    }

    res.end(`
    <h1>We cant find the web page</h1>
    `)
    // res.end() ends the response 
    
    

})

server.listen(5050);
// the server listens to the port of port number  5050

