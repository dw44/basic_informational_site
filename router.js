const contentTypes = require('./contentTypes'),
  utils = require('./utils');

const routes = {
  'GET': {},
  'POST': {}
};

exports.handle = (req, res) => {
  try {
    routes[req.method][req.url](req, res);
  } catch (e) {
    res.writeHead(200, contentTypes.html);
    utils.getFile('views/404.html', res);
  }
};

exports.get = (url, action) => {
  routes['GET'][url] = action;
};

exports.post = (url, action) => {
  routes['POST'][url] = action;
};