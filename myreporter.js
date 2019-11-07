'use strict';

var fs = require('fs');

module.exports = {
  reporter: function (res) {
    var len = res.length;
    var str = '';
    var filename = '';

    res.forEach(function (r, i) {
      filename = r.file;
      var err = r.error;

      if(i === 0) str += filename + '\n';

      str += 'line ' + err.line + ', col ' +
        err.character + ', ' + err.reason + '\n';
    });

    if (str) {
      var output = str + '\n\n';
      fs.appendFileSync('message.txt', output);
    }
  }
};