const app = require('./src/app');
const http = require('http');
const port = process.env.PORT || 5400;

const server = http.createServer(app);

server.listen(port, () => {
    console.log("=============================================");
    console.log("=                                           =");
    console.log(`= Backend running: http://localhost:${port} =`);
    console.log("=                                           =");
    console.log("=============================================");
});

server.on('error', error => {
    if (error.syscall !== 'listen') throw error;

    switch (error.code) {
        case 'EACCES':
            console.error(`Port ${port} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`Port ${port} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
});