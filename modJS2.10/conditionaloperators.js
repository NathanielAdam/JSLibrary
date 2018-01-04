/*
Conditional Operators : if, ?

The "if" statement
 -takes a data into a comparison, if true executes a certain line of code else executes the else
 -can be used with prompt/alert to send specific alerts depending on user input
 EX:
 let year = prompt('In which year was ECMAScript-2015 specification published?', '');
 if (year == 2015) alert( 'You are right!' );

Boolean Conversion
 -if 0, nan, or undefined are used with the if statement it is false
 - 1 and other code are truthy statemnts and without comparisons will return a true statement

The "else" clause
 -"if" statements can contain an else block to show different code if the input is falsy
 EX:
  et year = prompt('In which year was ECMAScript-2015 specification published?', '');

  if (year == 2015) {
    alert( 'You guessed it right!' );
  } else {
   alert( 'How can you be so wrong?' ); // any value except 2015

Several Conditions: "Else if"
-to check for other truthy statements you can use "else if"
-operates the same as "if", but only runs if the "if" statement was false
-must come before the else statement

Ternary Operator '?'
 -assigning variables with conditions
 EX:
  let acessAllowed;
  let age = prompt('How old are you?' , '');

  if (age > 18) {
    accessAllowed = true;
   } else {
    accessAllowed = false;
   }
  alert(accessAllowed); 
 -ternary or question mark operator let's us do this allot faster
 -presented as a question mark "?"
 -ternary means it has 3 opperands wich is more than any other operator in js...yay
 EX:
 let result = condition ? value1 : value2;
 
 -So that is the syntax, but what does it look like when actually used?
 EX:
 let accessAllowed = (age > 18) ? true : false
 -parenthseis are not needed and will work without for the age > 18
 - "?" has very low priority, but the code is easier to read with parentheses
 NOTE
 -in the EX above there is a better way
 EX:
  let accessAllowed = age > 18;

Multiple "?"
 -so you can essentially right an if, else if, else staement with nothing but ifs
 EX:
   let age = prompt('age?', 18);

   let message = (age < 3) ? "Hi Baby!" :
       (age < 18) ? "hello!" :
       (age < 100) ? "greetings!" : 
       "what an unusual age!";
   alert(message)
 
 -allot happened there so let's break it down
 -first we got the prompt;
 -next we checked if the age was less than 3 if so, we printed the string "Hi baby!"
 -then if that was a false statement it moved on just like an if/else if/else
 -our default message is the last one printed
 -Essentially it checks if it is true and the false statement results in the code pushing forward past the ":"
 to the next block and the next "?" comparison

Non-traditional use of '?'
 -it can literally be used to replace if, but is less readable so don't do that
 EX:
 let company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');

 -Here is the same thing but with an if statement

 EX:

let company = prompt('Which company created JavaScript?', '');

if (company == 'Netscape') {
  alert('Right!');
} else {
  alert('Wrong.');
}

 -MUCH NEATER!

 TASKS
//task 1

 Will alert be shown?

if ("0") {
  alert( 'Hello' );
}

-Yes it is not an empty string!
*/
/*
//task 2
let userAnswer = prompt(`What is the "official" name of javascript?`, "")

if (userAnswer === "ECMAScript") {
    alert("You know your stuff!")
} else {
    alert(`You don't know? "ECMAScript"!`)
}

*/
/*
//task 3
let userNumber = prompt("Choose a number!", 1)

if (userNumber > 0) {
    alert("1");
} else if (userNumber < 0) {
    alert("-1");
} else if (userNumber == 0) {
    alert("0");
} else {
    alert("Invalid Input");
}
*/
/*
//task 4
let userName = prompt("Who's there?", "Admin");

if (userName == "Admin") {
    let pass = prompt("Password?", 'master');

    if (pass == 'master') {
        alert("Welcome");
    } else if (pass == null) {
        alert("Canceled.")
    } else {
        alert("Wrong Password")
    }

} else if (userName == null) {
    alert("Canceled.");
} else {
    alert("I don't know you");
}
*/

//task 5 rewrite the code below with "?"
/*
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
*/
//result = (a + b <4) ? 'under' : 'over'
let login = prompt("Who is it?", "employee")
let message = (login == "employee") ? "Hello" :
    (login == "Director") ? "Greetings" :
    (login == "") ? "no login" :
    "Cancled";
alert(message)