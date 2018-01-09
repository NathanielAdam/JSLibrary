/*
Funtion expressions and arrows

-funtions are just special values
-functions from before are called funtion declarations
*/
//EX:
/*
function sayHi() {
    alert("hello!")
}
sayHi();
*/
/*
-you can also make funtions by defining variables like this
*/
//EX"
/*
let sayHi = function() {
        alert("hello!");
    }
    //sayHi();

//the value can be printed out with an alert aswell it will show the code
alert(sayHi)
*/
/*
-"alert(sayHi)"" does not run the funtion because () do not follow the function
-this can be used to copy a function to be called upon using various names!
-why do we put semicolons at the end? no need just good practice and is a good indicator as to where the funtion ends

Callback functions
-write a funtion with 3 parameters, question,yes, and no
-question is the text of the question 
*/
/*
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no()
}

function showOk() {
    alert("You agreed!")

};

function showCancel() {
    alert("you cancled!");
}

ask("do you agree?", showOk, showCancel)
*/
/*
 *functions are values representing actions  

FUNCTION EXPRESSION VS DECLARATION
 *Funtion Declaration: a function, declared as a seperate statemnt, in the main code flow
 EX: 
 function sum(a,b) {
     return a + b;
     }
 *
 * Funtion expression: a function created inside an expression or inside another syntax construct
 EX:
 let sum = function(a,b) {
     return a+b;
 }
 *a function is created when the flow passes through the variable declaration
 * a function expression must come before the function is called and is not so with declarations
 * a function declaration in a code block is not visible outside of that block
ARROW FUNCTIONS
-very simple sytax to define fuctions

let func = (arg1, arg2, ...argN) => expression
-this is a shorter version of this

let func - function(arg1, arg2, ...argN) {
    return expression;
}

let's run an actual example of an arrow function
*/
//let sum = (a, b) => a + b;
//alert(sum(1, 2));
//if you use {brackets} use the return function

//TASKS 1/1

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);