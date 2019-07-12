// array.filter
var numbers = [1, 2, 3, 4, 5]
var value = numbers.filter(function(item) {
    return item % 2 === 0;
})

console.log(value);
console.log("=====");
// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

var numbers = [1, 2, 3, 4, 5, 6, 7]
function fiveAndGreaterOnly(arr) {
    return arr.filter(function(item) {
        return item >= 5;
    })
}
console.log(fiveAndGreaterOnly(numbers));
console.log("=====");
// Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
    return arr.filter(function(item) {
        return item % 2 === 0;
    });
}

// Given a list of students, filter out the famale ones

var members = [
{ name: 'Lan', gender: 'female' },
{ name: 'Linh', gender: 'female' },
{ name: 'Trung', gender: 'male' },
{ name: 'Peter', gender: 'gay' }
];

function filterOutFemales(members) {
    return members.filter(function(item) {
        return item.gender !== 'female';
    });
}
