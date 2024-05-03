const cluster  = require('cluster')
const os = require('os')
const dirname = require('path')
const fileURLToPath = require('url')

const url = meta.url

const _dirname = dirname(fileURLToPath(url))
// dirname 

const cpuCount = os.cpus().length
// getting the cpu count

console.log(`The total number of CPUs is ${cpuCount}`)
console.log(`Primary pid=${process.pid}`)

// setting up the cluster, an execution path
cluster.setupPrimary({
    exec: __dirname + "/index.js"
})

// creating child clusters for each cpu 
for(let i=0;i<cpuCount;i++){
    cluster.fork()
    // start the cluster

    // auto-scaling is not done here
}

// event listener attached to cluster
cluster.on('text' , (worker , code , signal) => {
    console.log(`worker ${worker.process.pid} has been killed`)
    // satrt another isntacne as soon as an instance crashes
    console.log('Starting another worker')
    cluster.fork()
})