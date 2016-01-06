[![Build Status](https://travis-ci.org/akitten/vcard-linkedin-parser.svg)](https://travis-ci.org/akitten/vcard-linkedin-parser)
[![codecov.io](https://codecov.io/github/akitten/vcard-linkedin-parser/coverage.svg?branch=master)](https://codecov.io/github/akitten/vcard-linkedin-parser?branch=master)
[![Dependency Status](https://david-dm.org/akitten/vcard-linkedin-parser)](https://david-dm.org/akitten/vcard-linkedin-parser)
# vcard-linkedin-parser

## Why

LinkedIn give you the choice to export your contacts using the vCard format. However if you need to do some data manipulation it is easier to use a json format. So this module will convert a vcard LinkedIn format to a json format.

##  How

```
npm install vcard-linkedin-parser --save
```
Then in your scripts

```
var fs = require(fs);
var vcard_linkedin_parser = require('vcard-linkedin-parser');

var myVcardFile = fs.readFileSync('urlOfMyFile', 'utf-8');
var myJsonContacts = vcard_linkedin_parser(myVcardFile);
console.log(myJsonContacts);
```

## Any questions?

Submit an issue: https://github.com/akitten/vcard-linkedin-parser/issues
