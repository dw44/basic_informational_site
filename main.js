const port = 8080,
  http = require('http'),
  router = require('./router'),
  contentTypes = require('./contentTypes'),
  utils = require('./utils');

router.get('/', (req, res) => {
  res.writeHead(200, contentTypes.html);
  utils.getFile('views/index.html', res);
});

router.get('/about.html', (req, res) => {
  res.writeHead(200, contentTypes.html);
  utils.getFile('views/about.html', res);
});

router.get('/contact.html', (req, res) => {
  res.writeHead(200, contentTypes.html);
  utils.getFile('views/contact.html', res);
});

router.post('/', (req, res) => {
  res.writeHead(200, contentTypes.html);
  utils.getFile('views/index.html', res);
});

router.get('/reset.css', (req, res) => {
  res.writeHead(200, contentTypes.css);
  utils.getFile('public/css/reset.css', res);
});

router.get('/styles.css', (req, res) => {
  res.writeHead(200, contentTypes.css);
  utils.getFile('public/css/styles.css', res);
});

http.createServer(router.handle).listen(port);
console.log(`The server is listening on port number: ${port}`);