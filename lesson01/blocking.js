/**
 * Created by devon on 2017-01-11.
 */

// link to the fileSystem module
var fs = require('fs');

// print food
console.log('Foodz:');

var food = fs.readFileSync('food.txt', 'utf8');
console.log(food);

// print drinks
console.log('\nDrinkz:');

var drinks = fs.readFileSync('drinks.txt', 'utf8');
console.log(drinks);