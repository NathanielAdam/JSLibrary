"use strict"
/* 
variables are "named storage" and they can hold values
below we set the cariable named message
*/
let message = "What is up ma dude!"
console.log(message)
    /*
    above we defined message as a string (covered later)
    we also logged it to the console

    we can re assign the variable with an = sign;
    [note that = should not be used when comparing variables]

    below we change the information message holds
    */
message = "Hello!"
console.log(message)
    /*
    Above we changed the information that was assigned to message

    multiple variables can be named in one line but this is bad practice

    you may also write variables like below
    */
let message = "hello",
    age = 22,
    name = "timmy";
// above commas seperate the variables, each is defined as they would if they each started a line with the let key word

//variables have limitations and naming conventions

//variables may not have symbols other than $ and _ in their name
//variables cannot start with a number

let 1 apache = "helo",
    monkey - bars = "broken bones";

// both of these are not valid 
let $ = 1,
    _ = 2;
alert($ + _)
    //both variables were defined as valid "symbols" 

// non english letters allowed but not reccomended when defining variables
// you cannot make a variable anything used in the JS language example below

let
let = "dam did this work?" //no

//other variable types
const = 6;
// const stands for constant, these variables do not change, but otherwise are the same as let 
// Uppercase constants are a widespread practice to help remember certain values that would not change
//ex below
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

/*
 Remember to dame things properly in camle case
 name variables so that they match their value!
 name = 17 age = "danny" is needlessly confusing,
 that might be an extreme example but avoid doing anything remotely similar
*/