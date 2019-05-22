// for loop

/**
 * Dùng vòng lặp for hiển thị ra màn hình các số từ 0 đến 9
 */

for(var i = 0; i<=9; i++){
    console.log(i);
};

var employees = [
    {name: 'duy', age: 24},
    {name: 'hiroshi', age: 26},
    {name: 'Tinh', age: 29}
];

for (var i=0;i<=2;i++){
    console.log(employees[i].name, employees[i].age);
};

/**
 * Dùng vòng lặp for để hiển thị ra màn hình bảng chữ cái abc.
 * Gợi ý: Dùng String.fromCharCode
 * Ví dụ: console.log(String.fromCharCode(97)) sẽ hiển thị ra màn hình chữ "a" 
 * Tham khảo: http://www.asciitable.com/ để hiểu thêm về mã ascii
 */

for(var i=97; i<=122;i++){
    console.log(String.fromCharCode(i));
};

/**
 * Sử dụng vòng lặp for để hiển thị ra màn hình các phần tử của mảng a theo thứ tự ngược lại:
 * 16
 * 8
 * 4
 * 2
 * 1
 */

var a = [1, 2, 4, 8, 16];


for(var i=4;i>=0;i--){
    console.log(a[i]);
};


/**
 * Sử dụng vòng lặp for để tính tích của các phần tử của array a với các phần tử của array b. Kết quả mong muốn:
 * 10
 * 20
 * 30
 * ...
 * 20
 * 40
 * 60
 * ...
 * Gợi ý: Dùng nested for loops (các vòng lặp lồng nhau)
 */

var a = [1, 2, 3, 4, 5];
var b = [10, 20, 30];

for(var i=0;i<=4;i++){
    for(var j=0;j<=2;j++){
        console.log(a[i]*b[j]);        
    };
};



/**
 * Viết function trả về tích các số từ start đến end, không tính end 
 * Ví dụ: console.log(calculate(2, 5)) sẽ hiển thị ra màn hình 24 (vì 2 * 3 * 4 = 24)
 */
function calculate(start, end) {
    var mul = 1;
    for(var i=start; i<end; i++){
        mul = mul * i;
    };
    return mul
};

console.log(calculate(2, 5));


    // sử dụng vòng lặp for...of viết hàm has để kiểm tra xem array có tồn tại 1 giá trị xác định hay không
    // Tham số:
    //	- array: mảng cần kiểm tra
    //	- value: giá trị cần kiểm tra xem có tồn tại trong array không
    // Return:
    //	- true nếu có tồn tại
    //	- false nếu không tồn tại

function has(array, value){
    for(var i=0; i<array.length; i++){
        if(array[i]===value){
            return true;
        };
    };
    return false;    
};

console.log(has([4,1,2,3],4));