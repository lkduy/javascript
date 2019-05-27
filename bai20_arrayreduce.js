var numbers = [1,2,3,4];
numbers.reduce(function(x, y){
    console.log(x, y);
    return x + y;
})


var orders = [
    { name: 'A', quantity: 2, unitPrice: 100},
    { name: 'B', quantity: 1, unitPrice: 400},
    { name: 'C', quantity: 5, unitPrice: 15},
];

// dùng reduce để tính tổng của đơn hàng
var initialValue = 0;
value = orders.reduce(function(accumulator, currentValue){
    return accumulator + (currentValue.quantity*currentValue.unitPrice)
},initialValue);

console.log(value);
console.log('+++++++++++++++++++++++++++++++++++++++++')


// Turn an array of voter objects into a count of how many people voted
var voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

function totalVotes(arr) {
    var value = arr.filter(function(item){
        return item.voted === true;
    });
    return value.length;
}

console.log(totalVotes(voters));
console.log('+++++++++++++++++++++++++++++++++++++++++')
// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
];

function shoppingSpree(arr) {
    return arr.reduce(function(cost, current){
        return cost + current.price;
    }, 0);
}

console.log(shoppingSpree(wishlist));
console.log('+++++++++++++++++++++++++++++++++++++++++')

// Turn an array of voter objects into a count of how many people voted
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
  ];

function totalVotes(arr) {
    return arr.reduce(function(cout, current){
        if(current.voted===true){
            cout += 1;
        }
        return cout
    }, 0)
}
console.log(totalVotes(voters));
console.log('+++++++++++++++++++++++++++++++++++++++++')