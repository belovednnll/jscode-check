var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;

var curPath = path.join(process.cwd(), 'js');

function travelDir(dir, callback) {
    fs.readdirSync(dir).forEach(function(file) {
        var pathname = path.join(dir, file);

        if(fs.statSync(pathname).isDirectory()) {
            travelDir(pathname, callback);
        } else {
            callback(pathname);
        }
    });
}

fs.writeFileSync('message.txt', '');
travelDir(curPath, function(file) {
    exec('jshint --reporter=myreporter.js ' + file);
});