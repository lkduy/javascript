// Math.PI
function discArea(r){
    return r * r * Math.PI;
}
var s = discArea(5);
console.log(s);
console.log(Math.PI)

// Math.ceil(number): làm tròn lên
console.log(Math.ceil(9.2));
// Math.float(number): làm tròn xuống
console.log(Math.floor(9.7));

// Math.max(x1, X2,....)
console.log(Math.max(10, 1, -9));

// Math.max(x1, X2,....)
console.log(Math.min(10, 1, -9));

//Math.random()
console.log('random: ', Math.random());

function tossAcoin(){
    var random = Math.random();
    return random > 5;
}

console.log('Mặt sắp: ', tossAcoin());


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log(getRndInteger(1, 6));
console.log('=========================')

/* 
  Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào
*/

function powerup(arr) {
    return arr.map(function(item){
        if(item % 2 === 0){
            return item*item;
        }else{
            return item;
        }
    });
}

console.log(powerup([0, 3, 6, 7, 4])); // [0, 3, 36, 7, 16] 
console.log('=========================')
/* 
  Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
  Làm tròn điểm trung bình
*/
var array = [8, 8 , 6.75]; // 8

function average(array) {
    var lengthArray = array.length
    var sum = 0;
    for(var i=0; i<array.length; i++){
        sum+=array[i];        
    }
    return Math.ceil(sum/lengthArray);    
}

console.log(average(array))
console.log('=========================')

/* 
  Viết hàm positiveNumber để chuyển các số âm trong một mảng thành các số dương.

  Yêu cầu sử dụng Math Object
*/

var array = [-2, 3, -4, -7, 10]; // [ 2, 3, 4, 7, 10 ]

function positiveNumber(arr){
    return arr.map(function(item){
        return Math.abs(item);
    });
}

console.log(positiveNumber(array));
console.log('=========================')


var array = [8, 8 , 6.75]; // 8
function tinhTrungBinhCong(arr){
    var lengthArray = arr.length;
    var sum = 0;
    arr.map(function(item){
        sum+=item;
    });
    return Math.ceil(sum/lengthArray);
}

console.log(tinhTrungBinhCong(array));
console.log('=========================')

/*
  Viết hàm random để in ra một số ngẫu nhiên từ 1 - 100
*/

function random() {
    return Math.floor(Math.random() * 100) + 1;
}

console.log(random()); // The number between 1 and 100
console.log('=========================')

/*
  Viết hàm rightTriangle để kiểm tra 3 cạnh của một tam giác và cho biết đó có phải là tam giác vuông hay không? 
    Nếu có thì in ra "Yes"
    Không thì in ra "No"
*/

function rightTriangle(a, b, c) {

}

rightTriangle(3, 4, 5); // "Yes"

rightTriangle(1, 2, 3); // "No"