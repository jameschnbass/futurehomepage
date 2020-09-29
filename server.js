// server.js
var express = require("express");
let exec = require('child_process').exec;
var path = require("path");
app = express();
app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,"dist/index.html"));
  });
var port = process.env.PORT || 5000;
app.listen(port);
console.log(path.join(__dirname, 'dist'));
console.log(path.join(__dirname, 'dist/index.html'));
console.log("server started " + port);
exec('ls -al',{cwd: './dist'}, function (err, stdout, stderr) {
	console.log('ls');
        console.log(stdout);
});
