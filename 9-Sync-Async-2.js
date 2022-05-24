const http = require('http')
const { url } = require('inspector')


const server = http.createServer((req , res) => {
    console.log('server is listening on port 5000...')
    if(req.url === '/'){
        res.end('Home page')
    }if(req.url === '/about'){
        res.end('About page')
        // blocking code 
        for(let i=0;i<1000;i++){
            for(let j=0;j<1000;j++){
                console.log(`${i} ${j}`)
            }
        }
    }

    res.end('Error')
})

server.listen(5000)
// server is listening on port number : 5000

// always try to make the processes asynchronous