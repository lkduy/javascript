var a = [1, 2];
var b = [1, 2];
console.log(a === b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 array có vẻ giống nhau. Viết câu trả lời ở dưới đây.

// - Trả Lời: phép so sánh này trả về false vì a = [1, 2] và b = [1, 2] nằm ở hai ô nhớ khác nhau. nó sẻ trả về True nếu a=c và b=c

var a = {
    foo: 'bar'
  };
  
  var b = {
    foo: 'bar'
  };
  
  console.log(a === b);
  // Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 object có vẻ giống nhau. Viết câu trả lời ở dưới đây.

var a = '1000';
var b = '100';

console.log(parseInt(a) > parseInt(b));
  