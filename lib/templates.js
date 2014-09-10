var path = require('path');
var swig = require('swig');
var templates = path.resolve(__dirname, '../templates');

module.exports = function(filename) {
  if (!filename) return false;
  return swig.compileFile(path.join(templates, filename));
};