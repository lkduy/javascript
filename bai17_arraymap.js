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
console.log('++++++++++++++++++++++++++++');


/**
 * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
 * 2. Sử dụng map method và hàm tripple để nhân 3 các phần tử trong mảng dưới đây
 */
// Khai báo tripple function ở đây

function tripple (value){
    return value * 3
}

var numbers = [10, 5, 8];
// Gợi ý: numbers.map... (tự viết tiếp)

result = numbers.map(tripple);
console.log(result);
console.log('++++++++++++++++++++++++++++');

// Make an array of strings of the names
function namesOnly(arr) {
    result = [];
    for(var i in arr){
        result.push(arr[i].name);
    };
    return result
}

namesOnly([
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


// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

console.log('++++++++++++++++++++++++++++');

// Make an array of the names in <h1></h1>, and the ages in <h2></h2>
function readyToPutInTheDOM(arr) {
    result = [];
    for(var i in arr){
        result.push("<h1>"+arr[i].name+"</h1>"+"<h2>"+arr[i].age+"</h2>");
    };
    return result;
}
readyToPutInTheDOM([
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
// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]

// sử dụng hàm .map

var arr = [
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
  ];

function getNameandAge(arr){
    return "<h1>"+arr.name+"</h1>"+"<h2>"+arr.age+"</h2>";
};

var result = arr.map(getNameandAge);
console.log(result);