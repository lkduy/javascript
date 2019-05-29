// prototype

Mouse = require('./mouse');
Cat = require('./cat');

var mickey = new Mouse('black');
var jerry = new Mouse('orange');

console.log(mickey);
console.log(jerry);

var tom = new Cat();
tom.eat(mickey);
tom.eat(jerry);
console.log(tom);

// node module
