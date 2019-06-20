var fs = require('promise-fs');

var onDone = function(song){
  console.log(song);
}

var onError = function(error){
  console.log(error);
}

function readFile(path){
  return fs.readFile(path, 'utf8');
}

readFile('song1.txt')
  .then(onDone)
  .catch(onError)
  .then(function(){
    return readFile('song2.txt');
  })
  .then(onDone)
  .catch(onError);



