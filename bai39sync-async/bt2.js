var axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/todos/1').then(function(response){
    console.log(response.data);
});
axios.get('https://jsonplaceholder.typicode.com/todos/2').then(function(response){
    console.log(response.data);
});