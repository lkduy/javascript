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
