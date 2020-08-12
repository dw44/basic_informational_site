const http = require('http'),
  url = require('url'),
  fs = require('fs')
  TEXT_HTML = {'Content-Type': 'text/html'};


http.createServer((req, res) => {
  console.log(url.parse(req.url.path, true));
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('The project has started!');
  res.end();
}).listen(8080, () => {
  console.log('Server running on port 8080');
});