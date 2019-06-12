//var today = new Date();
//console.log(today);

// Create new object, object literal

var mouse = {
    weight: 0.2
};

// contructor function
function Mouse(color) {
    this.name = 'Mèo';
    this.color = color;
}

var mouse1 = new Mouse('trắng');
var mouse2 = new Mouse('Đen');
console.log(mouse1);
console.log(mouse2);

var tom = {
    name: 'Tom',
    stomach: [],
    eat: function(mouse){
        this.stomach.push(mouse);
        return this;
    }
};

function Chuot(name){
    this.name = name;
}

var m1 = new Chuot('m1');
var m2 = new Chuot('m2');
var m3 = new Chuot('m3');


tom.eat(m1).eat(m2).eat(m3)

console.log('tom an: ')
console.log(tom.stomach);


/* 
  Tạo một đối tượng student có thông tin như sau:
  Tên: Herry,
  Giới tính: Nam,
  Tuổi: 18
  
  Viết hàm showInfo để in ra các thông tin của đối tượng đó.
*/

var student = {
    Tên: 'Herry',
    Giới_tính: 'Nam',
    Tuổi: 18
}

function showInfo(obj) {
    for(var i in obj){
        console.log(obj[i])
    };
}

showInfo(student); // In ra tất cả thông tin của đối tượng

/* 
  Viết hàm lengthObj để in ra độ dài của một đối tượng
*/
var student = {
  name: "Jerry", 
  age: 14,
  role: "student",
  hihi: "ngu"
}

// function lengthObj(obj) {
//     console.log(Object.keys(obj).length);
// }

function sizeObj(obj){
    var size = 0;
    for (var key in obj){
        if(obj.hasOwnProperty(key)){
            size++;
        }
    }
    return size; 
}

console.log(sizeObj(student));

/* 
  Viết hàm xây dựng Shape để tạo các đối tượng hình học có các thuộc tính sau:
    {
      color: String,
      shape: String,
      fill: boolean
    }
*/

function Shape(color, shape, fill) {
    this.color = color;
    this.shape = shape;
    this.fill = fill;
}
  
  var shape1 = new Shape("red", "rectangle", true);
  var shape2 = new Shape("orange", "triangle", false);
  var shape3 = new Shape("tomato", "circle", true);
  
  console.log(shape1, shape2, shape3);
  /* 
    Shape { color: 'red', shape: 'rectangle', fill: true } 
    Shape { color: 'orange', shape: 'triangle', fill: false } 
    Shape { color: 'tomato', shape: 'circle', fill: true }
  */

/* 
  viết hàm updateObj để xóa thuộc tính rollno khỏi đối tượng student
  và in ra kết quả
*/

var student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 
  };
  
function updateObj(obj, key) {
    delete obj[key];
    return obj
}
  
console.log(updateObj(student, 'rollno')); 