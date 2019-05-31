function getTicketFee(person){
    var basePrice = 1000;

    if(person.age<15){
        return 10000 * 0.8;
    }
    else if(person.age > 60){
        return 10000 * 0.9;
    }
    else{
        return basePrice;
    }
}

var person = {
    age: 100
};

var fee = getTicketFee(person);
console.log(fee);