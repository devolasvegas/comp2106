/**
 * Created by devon on 2017-01-11.
 */

// link to fileSystem module
var fs = require('fs');

// food
console.log('Foodz:');
fs.readFile('foodz.txt', 'utf8', function(err, food) {
    if(err) {
        console.log('' + err);
        return;
    }
   console.log(food);
});

// drinks
fs.readFile('drinks.txt', 'utf8', function(err, drinks){
    console.log('\nDrinkz:');
    console.log(drinks);
});