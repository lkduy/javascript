var coffeeMachine = {
    makeCoffee: function(onFunction){
        console.log('Making coffe...');
        onFunction();
    }
};

coffeeMachine.makeCoffee(beep);

function beep(){
    console.log('bit..bit..bit');
}

console.log('+++++++++++++++++++++++++++++++++')

/**
 * 1. Viết hàm sayHello làm nhiệm vụ log ra màn hình 'I love Coders.Tokyo'
 * 2. Viết hàm countAndDo nhận vào tham số là 1 hàm. Hàm này log ra màn hình từ 1 đến 10 dùng vòng lặp for. Sau khi log xong, chạy hàm được truyền vào ở tham số
 * 3. Kiểm tra 2 hàm trên bằng cách: 
 *   countAndDo(sayHello)
 */

function sayHello() {
    console.log('I love Coders.Tokyo');
}

function countAndDo(callback) {
    for(var i = 1; i <= 10; i++){
        console.log(i);
    };
    callback();
}

countAndDo(sayHello);

console.log('+++++++++++++++++++++++++++++++++')
/**
* 1. Viết hàm double nhận vào 1 số bất kì, hiển thị ra số đó nhân đôi
* 2. Viết hàm sumAndDo nhận vào 1 array và 1 callback function. Hàm sumAndDo làm nhiệm vụ tính tổng array đó, sau đó gọi callback function với tham số là kết quả tổng vừa tính
*/


function sumAndDo(array, callback){
    var sum = 0;
    for(var i of array){
        sum = sum + i;
    };
    callback(sum);
}


function double(num){
    console.log(num * 2);
}


sumAndDo([1,2,3,4], double);

console.log('+++++++++++++++++++++++++++++++++')

/**
 * 1. Viết hàm transform nhận vào 1 array gồm các số và 1 function callback. Nội dung của hàm bao gồm:
 * - Khai báo 1 biến result có giá trị là 1 empty array
 * - Lặp qua từng phần tử trong array, với mỗi phần tử, gọi hàm callback và truyền vào phần tử đó, được kết quả bao nhiêu thì push vào array khai báo ở trên
 * - Trả về result array
 */

function transform(arr, callback){
    var result = [];
    for(var i of arr){
        result.push(double(i));
    };
    return result
}

function double(num){
    return num * 2;
}

var outPut = transform([1,2,3], double);
console.log(outPut);