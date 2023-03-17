const http = require('http');

const server = http.createServer((req, res) => {
    console.log("server is created")
})

const port = 5001;

server.listen(port, () => {
    console.log('Server is running on port 5001');
})