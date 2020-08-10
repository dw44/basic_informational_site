const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('The project has started!');
  res.end();
}).listen(8080, () => {
  console.log('Server running on port 8080');
});