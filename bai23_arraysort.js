// if sort function
//      1. return a value < 0
//          a will come before b
//      2. return a value > 0
//          a will come after b
//      3. return 0 
//          a and b will stay unchanged


var numbers = [2, 9, 3, 4, 1];
// ascending order

var ascendingNumber = numbers.sort(function(a, b){
    return a - b;
});
console.log(ascendingNumber);

//descendingNumbers 

var descendingNumbers = numbers.sort(function(a, b){
    return b - a;
});
console.log(descendingNumbers);

var employees = [
    {name: 'Tí', age: 18},
    {name: 'Tèo', age: 20},
    {name: 'Maria', age: 19}
];

var Des = employees.sort(function(a,b){
    return b.age - a.age;
});

var Asc = employees.sort(function(a,b){
    return a.age - b.age;
})

console.log(Des);
console.log(Asc);
console.log('=============================================');

// 1 Define an array of products(name, price, stock )
// 2 Sort by price from more expensive to less expensive
// 3 sprt by in stock value from more expensive to less expensive

var furniture = [
    {name: 'bàn', price: 20, stock: 2},
    {name: 'ghế', price: 10, stock: 5},
    {name: 'tủ', price: 30, stock: 1},
    {name: 'bếp gas', price: 15, stock: 6}
];

var sortByPrice = furniture.sort(function(a, b){
    return b.price - a.price;
});

console.log(sortByPrice);
console.log('=============================================');

var sortByStock = furniture.sort(function(a,b){
    return b.stock - a.stock;
});
console.log(sortByStock);
console.log('=============================================');

/**
 * Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự từ nhỏ đến lớn (ascending order)
 */
function sortNumbers(arr) {
    return arr.sort(function(a,b){
        return a - b;
    });
}

console.log(sortNumbers([5, 1, 3, 2]));
console.log('=============================================');

/**
 * Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự giảm dần (descending order)
 */
function sortNumbers(arr) {
    return arr.sort(function(a,b){
        return b - a;
    });
}

sortNumbers([5, 1, 3, 2]); // [5, 3, 2, 1]
console.log('=============================================');

/**
 * Sort an array from shortest string to longest
 */

var arrays = ["dog", "wolf", "by", "family", "eaten"];

function lengthSort(arr){
    return arr.sort(function(a, b){
        return a.length - b.length;
    });
}


console.log(lengthSort(arrays)); 
console.log('=============================================');
// ["by", "dog", "wolf", "eaten", "family"] 
// Gợi ý: độ dài của 1 string = string.length, thử chạy "abc".lengtha

function alphabetical(arr) {
    return arr.sort()
}

console.log(alphabetical(arrays)); 
console.log('=============================================');

// Sort the objects in the array by age
function byAge(arr){
    return arr.sort(function(a, b){
        return a.age - b.age;
    });
}

Age = byAge([
  {
    name: "Quiet Samurai",
    age: 22
  },
  {
    name: "Arrogant Ambassador",
    age: 100
  },
  {
    name: "Misunderstood Observer",
    age: 2
  },
  {
    name: "Unlucky Swami",
    age: 77
  }
]);

console.log(Age);
console.log('=============================================');

/**
 * Dữ liệu sinh viên Coders.Tokyo School là một array các object như sau
 */
var students = [
    { name: 'A', score: 100 },
    { name: 'B', score: 10 },
    { name: 'C', score: 101 },
    { name: 'D', score: 50 },
    { name: 'E', score: 75 }
  ];
  
  /**
   * Viết function trả về 1 array gồm 3 người có điểm cao nhất sắp xếp theo thứ tự điểm giảm dần. Mục đích để hiển thị lên bảng Leaderboard
   * Gợi ý: sử dụng sort và slice
   */
function getTopStudents(stu) { 
    var value = stu.sort(function(a,b){
        return b.score - a.score;
    });
    return value.slice(0, 3);
}
console.log(getTopStudents(students));