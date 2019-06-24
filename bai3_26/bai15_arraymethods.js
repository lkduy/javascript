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
