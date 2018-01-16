// javascript boolean represents one of two values: true or false

// let isCold = true,
//     isWarm = false,
//     woreSocks = true,
//     isPresent = true,
//     starving = true;
// // cutting all of this off here
// console.log(isCold);
// console.log(!isCold);
// Comparison Operators
// // prints false to the console
// console.log(true == false);
// // prints true
// console.log(true == !false);
// //this will be true, both have the same value
// console.log('5' == 5);
// //they are not the same type, so the strict cause this to be false
// console.log('5' === 5);
// //not equal
// console.log(5 != 4);
// //strict not equal to
// console.log(5 !== 4);
// //greater than
// console.log(3 > 4);
// //less than
// console.log(3 < 4);
// //greater than or equal too
// console.log(3 >= 4);
// //less than or equal too
// console.log(3 <= 4);

//logical operators
let hungry = true,
    food = true,
    eat = hungry && food,
    x = hungry || food;
//&& means and, checks for the first false value
console.log(eat);
console.log(x);