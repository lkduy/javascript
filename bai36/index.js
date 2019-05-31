var memberCard = {
    tier: 'silver'
};

function getTotal(price, card){
    var discountRate;

    switch(card.tier){
        case 'bronze':
            console.log(price -(price * 2/100));
            break;
        case 'silver':
            console.log(price -(price * 5/100));
            break;
        case 'gold':
            console.log(price -(price * 8/100));
            break;
        case 'diamond':
            console.log(price -(price * 10/100));
            break;
    }
}

// getTotal(50000, memberCard);

// red , green, orage

var trafficLight = 'green';

function goOrNot(lightValue){
    switch(lightValue){
        case 'red':
            console.log('Stop');
            break;
        case 'orage':
            console.log('Move');
            break;
        default:
            console.log('Move Move Move ....');
            break;
    }
}

//goOrNot(trafficLight)

/**
 * Sử dụng switch case và map để chuyển đổi array các chữ thành các số tương ứng theo quy tắc:
 * 'A' hoặc 'a' -> 1
 * 'B' hoặc 'b' -> 2
 *  còn lại -> 0
 */

function transform(arr) {
    let newArr = []
    arr.map(function(value){
        switch(value){
            case 'A':
            case 'a':
                newArr.push(1);
                break;
            case 'B':
            case 'b':
                newArr.push(2);
                break;
            default:
                newArr.push(0);
        };
    });
    return newArr;
}

console.log(transform(['A', 'b', 'a', 'B', 'd']))
// [1, 2, 1, 2, 0]