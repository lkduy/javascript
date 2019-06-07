// var fs = require('promise-fs');

// var onDone = function(song){
//   console.log(song);
// }

// var onError = function(error){
//   console.log(error);
// }

// function readFile(path){
//   return fs.readFile(path, 'utf8');
// }

// readFile('song1.txt')
//   .then(onDone)
//   .catch(onError)
//   .then(function(){
//     return readFile('song2.txt');
//   })
//   .then(onDone)
//   .catch(onError);

var fs = require('fs');

function readFilePromise(path){
  return new Promise(function(resolve, reject){
    fs.readFile(path, 'utf8',function(err, data){
      if (err){
        reject(err);
      }
      else{
        resolve(data);
      }
    }); 
  });
}

readFilePromise('song3.txt')
  .then(function(song){
    console.log(song);
  })
  .catch(function(error){
    console.log(error);
  });
  

