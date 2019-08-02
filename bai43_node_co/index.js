var fs = require('fs');
var co = require('co');
var axios = require('axios');

function readFilePromise(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, {encoding: 'utf8'}, function(err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}

// co(function*() {
//     var song1 = yield readFilePromise('./song1.txt');
//     var song2 = yield readFilePromise('./song2.txt');
//     var song3 = yield readFilePromise('./song3.txt');
//     return [song1, song2, song3];
// }).then(function(values) {
//     console.log(values);
// }).catch(function(err) {
//     console.log(err);
// });

// var readFiles = co.wrap(function*(files) {
//     var values = yield files.map(function(file) {
//         return readFilePromise(file);
//     });
//     return values;
// });

// readFiles(['song1.txt', 'song2.txt', 'song3.txt'])
//     .then(function(values) {
//         console.log(values); 
//     }).catch(function(err) {
//         console.log(err)
//     });


/**
* Sử dụng node co + axios để tải về các đường link sau theo 2 cách:
*/
var urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/todos/4',
    'https://jsonplaceholder.typicode.com/todos/5'
  ];
  
// Cách 1: Sử dụng vòng lặp for
function getData(url) {
    return axios.get(url);
}

co(function*(urls) {
    for(var i = 0; i < urls.length; i++) {
        console.log(getData(urls[i]));
    };
})




// Cách 2: Sử dụng array.map

// var getAllData = co.wrap(function*(files) {
//     var values = yield files.map(function(file) {
//         return axios.get(file);
//     });
//     return values;
// });

// getAllData(urls)
//     .then(function(value) {
//         for (var i = 0; i < value.length; i++) {
//             console.log(value[i].data);
//         }
//     })
//     .catch(function(err) {
//         console.log(err);
//     });

// Gợi ý: Có thể yield 1 array các Promise
