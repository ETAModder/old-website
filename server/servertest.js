const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    console.log(`request received:`);
    console.log(`- method: ${req.method}`);
    console.log(`- URL: ${req.url}`);
    console.log(`- headers:`, req.headers);
    console.log(`- query params:`, parsedUrl.query);

    const filePath = path.join(__dirname, '../home.html');
    // the script will only serve the home.html
    // so no favicon, external css, external js

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Internal Server Error');
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`);
});