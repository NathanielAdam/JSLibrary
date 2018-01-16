"use strict"


// let outside = ' hey I am outside!';

// function doSomething() {
//     let inside = "Hey I am inside!"
//     console.log(inside, outside)
// }

// doSomething();
// //below returns an error
// console.log(inside, outside);

//let's go DEEPER
let outside = ' hey I am outside!';

function doSomething() {
    inside = "Hey I am inside!"
    console.log(inside, outside)

    function doAnotherThing() {
        deepInside = "We're real deep now.";
        console.log(deepInside, inside, outside)
    }
    doAnotherThing()
}