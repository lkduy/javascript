var fs = require('fs');
var readlineSync = require('readline-sync');
let value

function questionCustomer(){
    console.log('1. Show all students');
    console.log('2. Create a new student');
    console.log('3. Save and Exit');
    value = readlineSync.question('Type your answers: ');

    if(parseInt(value)===1){
        showAllstudent();
    }
    if(parseInt(value)===1){

    }
}





function showAllstudent() {
    var dataStudentjson = fs.readFileSync('./data.json', {encoding: 'utf8'});// chuyển từ file .json thành object
    var dataStudent = JSON.parse(dataStudentjson);
    console.log(dataStudent);
    questionCustomer();        
}

function createNewStudent(){
    var newStudent = {};
    var ID = readlineSync.question('ID: ');
    newStudent.ID = ID;
    var name = readlineSync.question('Name: ');
    newStudent.Name = name;
    var gender = readlineSync.question('Gender(male:0/famale:1): ');
    newStudent.Gender = gender;
    var classroom = readlineSync.question('Class: ');
    newStudent.Class = classroom;

}

questionCustomer();