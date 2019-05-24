var numbers = [1,2,3,4];
var squaredNumbers = numbers.map(function(x){
    return x * x;
});

console.log(squaredNumbers);
console.log('++++++++++++++++++++++++++++');
// bài tập
var rectangles = [
    {width: 10, height: 5},
    {width: 10, height: 20},
    {width: 4, height: 16}
];


// dung map method để biến đổi rectangles thành 1 array mới, tính diện tích.

var squared = rectangles.map(squaredRectangular);

function squaredRectangular(data){
    var result = data.width * data.height;
    return result;
}

console.log(squared);



