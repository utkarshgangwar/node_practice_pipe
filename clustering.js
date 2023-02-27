const cluster = require('cluster');
const os = require('os');
const numCPUs = os.cpus().length;

if (cluster.isMaster) {
    // Fork worker processes
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
  } else {
    const http = require('http');
    const server = http.createServer((req, res) => {
      res.writeHead(200);
      res.end('Hello world\n');
    });
    server.listen(8000);
  }


  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });