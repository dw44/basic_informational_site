const { readSync } = require('fs');

const port = 8080,
  http = require('http'),
  router = require('./router'),
  contentTypes = require('./contentTypes'),
  utils = require('./utils');

router.get('/', (req, res) => {
  res.writeHead(200, contentTypes.html);
  utils.getFile('views/index.html');
});

router.get('/about.html', (req, res) => {
  res.writeHead(200, contentTypes.html);
  utils.getFile('views/about.html');
});

router.get('/contact.html', (req, res) => {
  res.writeHead(200, contentTypes.html);
  utils.getFile('views/contact.html');
});

router.post('/', (req, res) => {
  res.writeHead(200, contentTypes.html);
  utils.getFile('views/index.html');
});

http.createServer((req, res) => {
  console.log(url.parse(req.url.path, true));
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('The project has started!');
  res.end();
}).listen(8080, () => {
  console.log('Server running on port 8080');
});