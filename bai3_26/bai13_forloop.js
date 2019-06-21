// Hiển thị ra màng hình từ 0 -> 9

for (var i = 0; i <= 9 ; i++){
    console.log(i)
}

// Hiển thị từ 9 -> 0

for (var i = 9; i >= 0; i--){
    console.log(i)
}

console.log('============')

var employees = [
    { name: "Duy", Age: 24},
    { name: "Mai", Age: 31},
    { name: "Khoa", Age: 27},
    { name: "Huệ", Age: 34}
];

// Hiển thị tên nhân viên

for (var i = 0; i < employees.length; i++){
    console.log(employees[i].name)
}



