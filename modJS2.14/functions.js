/*
Functions
-used to perform a similar action throughout your code
Function declaration

function showMessage() {
    alert("hello everyone!")
}
break it down
function nameOfFunction(paraneters if needed) {
    the code ran when called upon
}
this can be called by putting the name and any parameters like this
function addNumbers(num1,num2) {
    alert(num1+num2)
}
function(1,2); //output 3
you can defined variables in a function that can be used there and only there
variables defined outside are more readily available, but could cause conflicts

name a function a verb like "show" or "get"

1 function 1 action: don't make a function do something it's name doens't suggest

Fucntions can act like comments, so split them up if you can, they are easier to debug
this way and can tell other developers what you are doing in specific parts of your code

Tasks below

is else required?
no
*/
/*
function checkAge(age) {
    return (age <= 17) ? "Where are your parents" : "proceed"
}
*/
/*
function checkAge(age) {
    return (age > 18 || confirm('did your parents alloy you?')
    }
*/
/*
    function min(a, b) {
        if (a < b) {
            return a;
        } else { return b }
    }
*/
function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n <= 1) {
    alert(`Power ${n} is not supported,
    use an integer greater than 0`);
} else {
    alert(pow(x, n));
}