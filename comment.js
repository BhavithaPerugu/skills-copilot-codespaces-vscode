// Create web server
// Create a server that listens on port 8080. It should respond to a GET request to /comment with a JSON object that looks like this:
// {
//     "author": "Mark Twain",
//     "comment": "I have never let my schooling interfere with my education."
// }
// For all other requests, it should respond with a 404 status code.

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/comment' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({
            "author": "Mark Twain",
            "comment": "I have never let my schooling interfere with my education."
        }));
        res.end();
    } else {
        // Handle other requests here
    }
});
