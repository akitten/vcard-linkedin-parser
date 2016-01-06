module.exports = function(vcards) {
  var result = [];
  var currentIndex = 0;

  vcards.split('\n').forEach(function(line){

    if(line.startsWith("BEGIN:VCARD")) {
      result[currentIndex] = {}
    }

    if(line.startsWith('FN:')) {
      result[currentIndex].name =  line.substr(3);
    }

    if(line.startsWith('TITLE:')) {
      result[currentIndex].title = line.substr(6);
    }

    if(line.startsWith('ORG:')) {
      result[currentIndex].company = line.substr(4);
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
