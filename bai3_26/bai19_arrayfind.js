//arry.find
var numbers = [1, 2, 3, 4];
var value = numbers.find(function(number) {
    return number % 2 === 0;
});

console.log(value);
console.log('=====');

// Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
// Nếu không tìm thấy số chẵn nào thì trả về undefined
function findFirstEvenNumber(array) {
	return array.find(function(item) {
  	return item === 0;
  });
}