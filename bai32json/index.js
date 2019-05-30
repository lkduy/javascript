var myDog = {name: 'Lu', age: 1, dead: false};
var myDogString = JSON.stringify(myDog);
console.log(typeof myDogString);

var myCatString = '{"name": "Tom", "age": 2, "dead": true}';
var myCat = JSON.parse(myCatString);
console.log(myCat);

//Exercise
// 1. Show all students
// 2. Create a new student
// 3. Save and exit
// nếu chọn 1 thì show tất cả data trong file json
// save to ./data.json
// nhập 2 