const fs = require('fs'),
  contentTypes = require('./contentTypes');

module.exports = {
  getFile: (file, res) => {
    fs.readFile(`./${file}`, (error, data) => {
      if (error) {
        res.writeHead(404, contentTypes.html);
        res.end('404, Page Not Found!');
      }
      res.end(data);
    });
  }
};