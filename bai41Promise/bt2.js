var request = require('request');


function load(link){
    return new Promise(function(resolve, reject){
        request(link, function(error, response, body){
            if(error){
                reject(error);
            }
            else{
                resolve(body);
            }
        });
    });
}


load('https://jsonplaceholder.typicode.com/todos/1')
    .then(function(body){
        console.log('Start fetching...');
        console.log('Done: ', body);
        console.log('Nothing');
    })
    .catch(function(error){
        console.log('Start fetching...');
        console.log('error: ', error);
        console.log('Nothing');
    });

