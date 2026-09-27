// 1. Web server bypass for Render
const http = require('http');
const port = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Application Online.');
}).listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// 2. Start the application bot logic
require('./bot.js'); 
