var a = [1,2,3,4];
var b = [5,6,7];
var c = 5;

console.log(a.length);
console.log(a.concat(b)); //nói hai mảng

a.push(c);  // return lenght a
console.log(a);
// đẩy ra 1 phần tử
console.log(a.pop());  // hien thi giá tri bi đẩy ra
console.log(a);  // giá tri còn lai của mảng

console.log(a.shift()); // đẩy giá trị đầu của mảng ra và hiển thị nó
console.log(a); // giá tri còn lai của mảng a

console.log(a.unshift(c)); // đẩy giá trị của c len đầu mảng, hiển thị chiều dài của mảng đó
console.log(a); //hiển thị nội dung mới của a

var vegetables = ['cabbage','Turnip','Radish','Carrot'];
console.log(vegetables);

var removedItems = vegetables.splice(1,2);  // 1 là vi trí bắt đầu
// 2 là số đối tượng bị remove

console.log(removedItems);
console.log(vegetables);  // số hoa quả còn lại trong mảng

console.log('+++++++++++++++++++++++++++++++++++++++++++++')
/*
Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
*/
var arrs = [1,2,3,4,5,6,7,7,8];

function removeEnd(arr, n){
    var numStart = arr.length - n;
    arr.splice(numStart, n);
    return arr
}

console.log(removeEnd(arrs, 5));
console.log('+++++++++++++++++++++++++++++++++++++++++++++')

/**
 * Đọc và dịch các method đã học từ MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * Lấy ví dụ cho các trường hợp input khác nhau của mỗi method
 * Mục đích của bài tập này: Giúp bạn học cách tự tra cứu, đọc tài liệu.
 * Đây là một kĩ năng không thể thiếu của 1 developer.
 */

 /** Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. 
 * 
 * Bắt đầu từ bài này các câu hỏi sẽ xuất hiện bằng tiếng Anh nhiều hơn.
 * Đây cũng là một kĩ năng không thể thiếu của develop vì: các nguồn tra cứu tốt đa phần là tiếng Anh, ví dụ như stackoverflow.com
*/

function first(arr, n){
    var newArr = arr.splice(0, n);
    return newArr
}

console.log(first([1, 2, 3, 4, 5], 3));
