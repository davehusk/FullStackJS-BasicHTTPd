const http = require('http');
const fs = require('fs');
const path = require('path');
const EventEmitter = require('events');
const { logEvent } = require('./logger');
const { getDailyInfo } = require('./dailyInfo');

// Initialize EventEmitter
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// Log events to console and disk
myEmitter.on('log', (msg) => {
    console.log(msg);
    logEvent(msg);
});

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
};

const handleFileRead = (filePath, contentType, res) => {
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1>', 'utf-8');
                myEmitter.emit('log', `404 - ${filePath}`);
            } else {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end(`<h1>500 Server Error: ${err.code}</h1>`, 'utf-8');
                myEmitter.emit('log', `500 - ${filePath}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
            myEmitter.emit('log', `200 - ${filePath}`);
        }
    });
};

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'markup', req.url === '/' ? 'index.html' : req.url + '.html');
    let extname = path.extname(filePath);
    let contentType = mimeTypes[extname] || 'application/octet-stream';

    if (req.url === '/daily') {
        getDailyInfo((err, info) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('<h1>500 Server Error</h1>', 'utf-8');
                myEmitter.emit('log', `500 - ${req.url}`);
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(info, 'utf-8');
                myEmitter.emit('log', `200 - ${req.url}`);
            }
        });
    } else {
        handleFileRead(filePath, contentType, res);
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Log: Server running on port ${PORT}`);
    myEmitter.emit('log', `Emitter: Server started on port ${PORT}`);
});
