var employees = [
    { name: "Duy", Age: 24},
    { name: "Mai", Age: 31},
    { name: "Khoa", Age: 27},
    { name: "Huệ", Age: 34}
];

for (var employee in employees){
    console.log(employees[employee].name);
}

for (var employee of employees){
    console.log(employee.name, employee.Age);
}

var myDog = {
    name: 'Đần',
    age: 1,
    weight: 5,
}

for (var key in myDog){
    console.log(myDog[key]);
}

console.log('=========')
    // Giả thiết: numbers là một array các số nguyên
    // Yêu cầu: 
    //	- trả về tổng các số, dùng vòng lặp for ... of
    //  - nếu array trống trả về 0

var numbers = []

function sum(numbers) {
    if (numbers === []){
        return 0
    }
    else
    {
        var sum = 0
        for (var number of numbers){
            sum += number;
        }
        return sum
    }
}

console.log(sum(numbers));
console.log('=========')

    // viết hàm has để kiểm tra xem object có tồn tại 1 key xác định hay không
    // Tham số:
    //	- object: object cần kiểm tra
    //	- key: key cần kiểm tra xem có tồn tại trong object không
    // Return:
    //	- true nếu có tồn tại
    //	- false nếu không tồn tại

var object = {
    name: "Mai",
    age: 24
}


function has(object, key) {
    for (var keyob in object){
        if(keyob === key){
            return true;
        }
        else
        {
            return false;
        }
    }
}

console.log(has(object, 'na'))
  
