function tossCoin(){
    var value = Math.random();
    if(value < 0.5){
        console.log('mặt sấp');
    }
    else{
        console.log('mặt ngửa');
    }
}

function shouldIDateHer(){
    var value = Math.random();
    if(value < 0.5){
        console.log('Yes, of course');
    }
    else{
        console.log('No, she has a boyfriend');
    }
}

function countBills(value) {
    var total = 0;
    for (var bill of value){
        if(!bill.fake){
            total +=bill.value;
        }
        else{
            console.log('fake bill', bill);
            break;
        }
    }
    return total;
}

var bills = [
    { value: 10000 },
    { value: 20000 },
    { value: 20000, fake: true },
    { value: 50000 }
]

console.log(countBills(bills));