/**
 * Sử dụng Promise.all + axios để tải về 3 đường link sau cùng lúc và hiển thị ra kết quả:
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 * https://jsonplaceholder.typicode.com/todos/3
 */

var axios = require('axios');

Promise.all([
    axios.get('https://jsonplaceholder.typicode.com/todos/1'),
    axios.get('https://jsonplaceholder.typicode.com/todos/2'),
    axios.get('https://jsonplaceholder.typicode.com/todos/3')
]).then(function(values) {
    for(var i = 0; i < 3; i++){
        console.log(values[i].data);
    }
}).catch(function(err) {
    console.log(err);
})