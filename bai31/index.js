var readlineSync = require('readline-sync');

var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

var languages = [];

var language = readlineSync.question('What is your mother language? ');
languages.push(language);

console.log(languages);

var pet = {};

var name = readlineSync.question('your pet name: ');
pet.name = name;
var gender = readlineSync.question('Pet gender (Male/Female): ');
pet.gender = gender;
var weight = readlineSync.question('Weight?: ');
pet.weight = parseInt(weight);

console.log(pet);
