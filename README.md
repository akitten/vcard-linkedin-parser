[![Build Status](https://travis-ci.org/akitten/vcard-linkedin-parser.svg)](https://travis-ci.org/akitten/vcard-linkedin-parser)
[![codecov.io](https://codecov.io/github/akitten/vcard-linkedin-parser/coverage.svg?branch=master)](https://codecov.io/github/akitten/vcard-linkedin-parser?branch=master)
[![Dependency Status](https://david-dm.org/akitten/vcard-linkedin-parser.svg)](https://david-dm.org/akitten/vcard-linkedin-parser)
[![devDependency Status](https://david-dm.org/akitten/vcard-linkedin-parser/dev-status.svg)](https://david-dm.org/akitten/vcard-linkedin-parser#info=devDependencies)
# vcard-linkedin-parser

## Why

LinkedIn give you the choice to export your contacts using the [vCard](https://en.wikipedia.org/wiki/VCard) format (see https://www.linkedin.com/people/export-settings). However if you need to do some data manipulation with javascript it is easier to use a json format.

this module will convert a vcard LinkedIn format string to a json format.

## What

LinkedIn vcard format example:

```
BEGIN:VCARD
VERSION:2.1
N:Nash;John
FN:John Nash
TITLE:Mathematician
ORG:Game theory
EMAIL;INTERNET:john.nash@.gametheory.co.uk
END:VCARD
.
.
.
```
where:
- N: are the name
- FN: is the formated name
- TITLE: is the Linkedin headline
- ORG: is the current organization
- EMAIL;INTERNET: is the email

This will be converted to an array of objects:

```
[
  {
    names: ["Nash", "John"],
    fullname: "John Nash",
    headline: "Mathematician",
    org: "Game theory",
    email: "john.nash@.gametheory.co.uk"
  },
  .
  .
  .
]
```
##  How

```
npm install vcard-linkedin-parser --save
```
Then in your scripts

```
var fs = require('fs');
var vcard_linkedin_parser = require('vcard-linkedin-parser');

var myVcardFile = fs.readFileSync('urlOfMyFile', 'utf-8');
var myJsonContacts = vcard_linkedin_parser(myVcardFile);
console.log(myJsonContacts);
```

## Any questions?

Submit an issue: https://github.com/akitten/vcard-linkedin-parser/issues
