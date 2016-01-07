module.exports = function(vcards) {
  var result = [];
  var currentIndex = 0;

  vcards.split('\n').forEach(function(line){

    if(line.startsWith("BEGIN:VCARD")) {
      result[currentIndex] = {}
    }

    if(line.startsWith("N:")) {
      result[currentIndex].names = line.substr(2).split(';');
    }

    if(line.startsWith('FN:')) {
      result[currentIndex].fullname =  line.substr(3);
    }

    if(line.startsWith('TITLE:')) {
      result[currentIndex].headline = line.substr(6);
    }

    if(line.startsWith('ORG:')) {
      result[currentIndex].org = line.substr(4);
    }

    if(line.startsWith("EMAIL;INTERNET:")) {
      result[currentIndex].email = line.substr(15);
    }

    if(line.startsWith("END:VCARD")){
      currentIndex += 1;
    }
  })
  return result;
}
