var a = 5;
var x = a++ + ++a;
//a++ = 5
//++a = 7

var y = a++ + ++a - --a + a--;
//a++ = 5
//++a = 7

//--a = 6
//a-- = 6
console.log(x);
console.log(y)
