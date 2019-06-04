var fs = require('fs');
var readlineSync = require('readline-sync');

function convertJsonToArr(json){
    var arr = JSON.parse(json);
    return arr;
}

function convertArrToJson(arr){
    var json = JSON.stringify(arr);
    return json;
}

function readDataContacts(){
    var contact = fs.readFileSync('./data.json', "utf8");
    return convertJsonToArr(contact);
}

function viewAllContacts(){
    console.log(readDataContacts());
}

function inputNewContact(){
    var dataContact = readDataContacts();
    var newData= {};
    newData.ID = parseInt(dataContact.length) + 1;
    var name = readlineSync.question('Input "Name": ');
    newData.Name = name;
    var phoneNumber = readlineSync.question('Input "PhoneNumber": ');
    newData.PhoneNumber = phoneNumber;
    dataContact.push(newData);
    console.log('select option:');
    console.log('1. Save Contact.');
    console.log('2. Don\'t Save and go to Main Menu.');
    var option = readlineSync.question('> ');
    switch(option){
        case '1':
            dataContact = convertArrToJson(dataContact);
            fs.writeFileSync('./data.json', dataContact);
            optionContact();
            break;
        case '2':
            optionContact();
            break;
        default:
            break;
    }
}


function deleteContactInList(){
    var dataContact = readDataContacts();
    var nameContact = readlineSync.question('Please input Name Contact to delete: ')
    for(let i in dataContact){
        if(nameContact === dataContact[i].Name){
            var removeList = dataContact.splice(i, 1);
        }
    }
    dataContact = convertArrToJson(dataContact);
    fs.writeFileSync('./data.json', dataContact);
}

function findContact(){
    var dataContact = readDataContacts();
    var nameContact = readlineSync.question('Find Contact with Name: ');
    for(i in dataContact){
        if(nameContact === i.Name){
            console.log(i);
        }
    }
}

function changeContactData(){
    var dataContact = readDataContacts();
    var nameContact = readlineSync.question('Please input Name Contact to change Data: ') 
    for(var i of dataContact){
        if(nameContact === i.Name){
            console.log('Show current data');
            console.log('Data ID: ' + i.ID);
            console.log('Data Name: ' + i.Name);
            console.log('Data Phone number: ' + i.PhoneNumber);
            console.log('Select option.');
            console.log('1. Change this Contact.');
            console.log('2. Go to Main Menu.');
            let option = readlineSync.question('> ')
            switch(option){
                case '1':
                    console.log('Input new data.');
                    var newName = readlineSync.question('Name: ');
                    if(newName !== ''){
                        i.Name = newName;
                    }
                    var newPhoneNumber = readlineSync.question('Phone Number: ');
                    if(newPhoneNumber !== ''){
                        i.PhoneNumber = newPhoneNumber;
                    }
                    break;
                case '2':
                    optionContact();
                    break;
                default:
                    break;
            }
            
        }
    }
    dataContact = convertArrToJson(dataContact);
    fs.writeFileSync('./data.json', dataContact);
}

function optionContact(){
    console.log('Select option: ');
    console.log('1. Add New Contact.');
    console.log('2. Change contact data.');
    console.log('3. Delete contact.');
    console.log('4. Find contact in list.');
    console.log('5. View All contact');
    var option = readlineSync.question('> ');
    switch(option){
        case '1':
            inputNewContact();
            break;
        case '2':
            changeContactData();
            optionContact();
            break;
        case '3':
            deleteContactInList();
            optionContact();
            break;
        case '4':
            findContact();
            optionContact();
            break;
        case '5':
            viewAllContacts();
            optionContact();
            break;
        default:
            break;        
    };
}

function main(){
    optionContact();
}

main();


/**
* Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
* - Nhập dữ liệu contact (name, phone number)
* - Sửa dữ liệu contact
* - Xoá contact
* - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
*/




