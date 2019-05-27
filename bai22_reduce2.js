var items = ['Tom','Bill','Kim'];

var value = items.reduce(function(result, item){
    return result + '<' + item + '>'
},[]);
console.log(value);
console.log('=====================================')


// Given an array of arrays, flatten them into a single array
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

function flatten(arr){
    return arr.reduce(function(result, currentArray){
        return result.concat(currentArray);
    },[]);
}

console.log(flatten(arrays));
console.log('=====================================')

// Count the occurrences of each element inside an array using reduce
array = ['a', 'b', 'c', 'b', 'a'];
function countOccurrences(arr) {
    return arr.reduce(function(value, currentValue){
        if(currentValue in value){
            value[currentValue]++;            
        }
        else{
            value[currentValue] = 1;
        }
        return value;
    },{});
}

console.log(countOccurrences(array));
console.log('=====================================')

// { 
//   a: 2, 
//   b: 2, 
//   c: 1 
// }
