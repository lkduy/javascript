//filter

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
value = numbers.filter(function(item){
    return item % 2 === 0;
});

console.log(value);
console.log('==================================')


// filter >=5

function fiveAndGreaterOnly(arr){
    let value = arr.filter(function(item){
        return item >= 5;
    });
    return value;
}

console.log(fiveAndGreaterOnly(numbers));
console.log('==================================');

// Given an array of numbers, return a new array that only includes the even numbers.

function evensOnly(arr){
    var value = arr.filter(function(item){
        return item % 2 === 0;
    })
    return value;
}

console.log(evensOnly(numbers));
console.log('==================================');

var members = [
  { name: 'Lan', gender: 'female' },
  { name: 'Linh', gender: 'female' },
  { name: 'Trung', gender: 'male' },
  { name: 'Peter', gender: 'gay' }
];

function filterOutFemales(arr){
    var value = arr.filter(function(item){
        return item.gender !== 'female';    
    })
    return value;
}

console.log(filterOutFemales(members));