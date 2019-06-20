var numbers = [1, -2, 3, 3];

value = numbers.find(function(item){
    return item % 2 === 0;
});

console.log(value);

// nó trả về giá trị đầu tiên sau đó dừng

// Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
// Nếu không tìm thấy số chẵn nào thì trả về undefined
function findFirstEvenNumber(array) {
    var value = array.find(function(item){
        return item % 2 === 0;
    })
    return value;
}

console.log(findFirstEvenNumber(numbers));