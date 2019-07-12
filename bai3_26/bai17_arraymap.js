// arr.map

var numbers = [1, 2, 3, 4]
var squaredNumbers = numbers.map(function(x) {
  return x*x;
})

// console.log(squaredNumbers)

/**
 * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
 * 2. Sử dụng map method và hàm tripple để nhân 3 các phần tử trong mảng dưới đây
 */
// Khai báo tripple function ở đây
// Gợi ý: numbers.map... (tự viết tiếp)
var numbers = [10, 5, 8];

function tripple(item) {
  return item * 3;
}

result = numbers.map(tripple);
console.log(result);
console.log("=====");

// Make an array of strings of the names
function namesOnly(arr) {
  return arr.map(function(item) {
    return item.name
  })
}

result = namesOnly([
  {
    name: "Angelina Jolie",
    age: 80
  },
  {
    name: "Eric Jones",
    age: 2
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kayne West",
    age: 16
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
])

console.log(result);
console.log("=====");
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// Make an array of the names in <h1></h1>, and the ages in <h2></h2>
function readyToPutInTheDOM(arr) {
  var value; 
  return value = arr.map(function(item) {
    return "<h1>" + item.name + "</h1><h2>" + item.age + "</h2>";
  })
}
a = readyToPutInTheDOM([
  {
    name: "Angelina Jolie",
    age: 80
  },
  {
    name: "Eric Jones",
    age: 2
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kayne West",
    age: 16
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
]) 

console.log(a);
// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]