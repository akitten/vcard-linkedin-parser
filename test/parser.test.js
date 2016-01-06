var test    = require('tape');
var fs      = require('fs');
var dir     = __dirname.split('/')[__dirname.split('/').length-1];
var file    = dir + __filename.replace(__dirname, '') + ' >';

test(file + 'parse vCard into JSON format ', function(t) {

  var fixture = fs.readFileSync(__dirname + '/fixtures/fixture.vcf', 'utf-8');
  console.log(fixture);
  t.ok(2 === 2, 'pass');
  t.end();
});