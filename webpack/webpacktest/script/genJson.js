const webpack = require('webpack');
var process = require('child_process');
const fs = require('fs');

var cmd = 'npx webpack --json';
process.exec(cmd, function (error, stdout, stderr) {
  // console.log("error:"+error);
  // console.log("stdout:"+stdout);
  // console.log("stderr:"+stderr);]
  fs.writeFile(__dirname + 'genJson.json', stdout, () => {});
});
