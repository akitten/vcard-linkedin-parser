module.exports = function(vcards) {
  var result = [];
  var currentIndex = 0;

  vcards.split('\n').forEach(function(line){

    if(line.startsWith("BEGIN:VCARD")) {
      result[currentIndex] = {}
    }

    if(line.startsWith("N:")) {
      result[currentIndex].names = line.substr(2).split(';').map(function(name) {
        return name.trim();
      });
    }

    if(line.startsWith('FN:')) {
      result[currentIndex].fullname =  line.substr(3).trim();
    }

    if(line.startsWith('TITLE:')) {
      result[currentIndex].headline = line.substr(6).trim();
    }

    if(line.startsWith('ORG:')) {
      result[currentIndex].org = line.substr(4).trim();
    }

    if(line.startsWith("EMAIL;INTERNET:")) {
      result[currentIndex].email = line.substr(15).trim();
    }

    if(line.startsWith("END:VCARD")){
      currentIndex += 1;
    }
  })
  return result;
}
