var test    = require('tape');
var fs      = require('fs');
var dir     = __dirname.split('/')[__dirname.split('/').length-1];
var file    = dir + __filename.replace(__dirname, '') + ' >';
var parser = require('../index');

test(file + 'parse vCard into JSON format ', function(t) {

  var fixture = fs.readFileSync(__dirname + '/fixtures/fixture.vcf', 'utf-8');
  var result = parser(fixture);
  t.ok(result.length === 3, 'There are 3 cards');
  t.ok(result[0].name === 'Forrest Gump', 'The formated name of the first card is Forrest Gump');
  t.ok(result[2].email === 'tomjones@example.com', 'The email of the third card is tomjones@example.com');
  t.end();
});
