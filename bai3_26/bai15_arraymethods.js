var a = [1, 3, 2];
var b = [10, 20];
var c = [5, 7];

var d = a.concat(b);
console.log(d);
console.log('========')

a.push(c);
console.log(a);
console.log('========')

var e = a.pop();  // đẩy phần tử cuối cùng ra
console.log(a)
console.log(e);
console.log('========')

a.shift();  // đẩy phần tử đầu ra
console.log(a);
console.log('========')

a.unshift(-5);
console.log(a);
console.log('========')

/*
        Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
    */
var arr = [1, 2, 4, 5, 6]

function removeEnd(arr, n) {
    var newarr = [];
    for (var i = 0; i < (arr.length - n); i++){
        newarr.push(arr[i])
    }
    return newarr
}

console.log(removeEnd(arr, 2));
console.log('========')


/** Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. 
 * 
 * Bắt đầu từ bài này các câu hỏi sẽ xuất hiện bằng tiếng Anh nhiều hơn.
 * Đây cũng là một kĩ năng không thể thiếu của develop vì: các nguồn tra cứu tốt đa phần là tiếng Anh, ví dụ như stackoverflow.com
*/

function first(arr, n) {
    var newarr = [];
    for (var i = 0; i < n; i++){
        newarr.push(arr[i]);
    }
    return newarr
}

console.log(first([1, 2, 3, 4, 5, 6, 7], 4)); // expect [1, 2]


