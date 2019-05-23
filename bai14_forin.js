var employees = [
    {name: 'Thinh', age: 28},
    {name: 'Ahihi', age:30},
    {name: 'Ahehe', age: 30}
];

for(var employee of employees) {
    console.log(employee.name, employee.age);
};

var myDog = {
    name: "đần",
    age: 1,
    weight: 5
};

for(var key in myDog){
    console.log(myDog[key]);
};

/**
 * Điểm khác nhau giữa 2 vòng lặp for...of và for...in, viết code ví dụ
 */

 //- For in return vi trí của phần tử đó trong arr
var arr = [1, 2, 3, 4]

for(var i in arr){
    console.log(arr[i]);
};
//- For of nó trá về phần tử trong arr luon

for(j of arr){
    console.log(j);
};

/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

function multiply(arr) {
    var mul = 1;
    for(i of arr){
        mul = mul * i;
    };
    return mul
};

console.log(multiply([2, 3, 4])); // expect: 24
console.log('++++++++++++++++++++++++++++++++++')

/**
 * Sử dụng vòng lặp for...in để in ra tất cả các key trong object sau, in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */

var apartment = {
    bedroom: {
      area: 20,
      bed: {
        type: 'twin-bed',
        price: 100
      }
    }
  };

for(var i in apartment){
    console.log(i)
    for(var j in apartment[i]){
        console.log(j);
        if(j==='bed'){
            for(k in apartment[i][j]){
                console.log(k)
            };
        };
    };
};
  

  /**
   * Kết quả mong muốn:
   * bedroom
   * area
   * bed
   * type
   * price
   * Chú ý: không cần hiển thị ra đúng thứ tự như trên
   */
  
console.log('++++++++++++++++++++++++++++++++++')
    // Giả thiết: numbers là một array các số nguyên
    // Yêu cầu: 
    //	- trả về tổng các số, dùng vòng lặp for ... of
    //  - nếu array trống trả về 0

var numbers = [1,2,3,4];

function sum(numbers){
    var sum = 0;
    if(numbers===[]){
        return sum;
    }
    else{
        for(var i of numbers){
            sum += i;
        };
        return sum
    };
};

console.log(sum(numbers));


console.log('++++++++++++++++++++++++++++++++++')

    // viết hàm has để kiểm tra xem object có tồn tại 1 key xác định hay không
    // Tham số:
    //	- object: object cần kiểm tra
    //	- key: key cần kiểm tra xem có tồn tại trong object không
    // Return:
    //	- true nếu có tồn tại
    //	- false nếu không tồn tại


var myDog = {
    a: 'hihi',
    b: 'haha',
};


function has(object, key){
    for(var i in object){
        if(i===key){
            return true;
        };
    };
    return false;
};

console.log(has(myDog, 'v'));