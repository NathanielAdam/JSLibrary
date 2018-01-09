/*
Logical Operators
 -|| or; (returns the true statement if there is one)
 -&& and; (returns true if both are true)
 - ! not; (returns the opposite boolean for the true/false)

|| (OR)
 
 -there are 4 logical combinations
 alert(true || true);
 alert(false || true);
 alert(true || false);
 alert(false || false);
 
 -if an opeerand is not a boolean it is converted
 -mostly used in if statments to check for truthy conditions
 */
//EX:Remove comments to see this play out
/*
 let hour = 9;

 if (hour < 10 || hour > 18) {
     alert( 'the office is closed)
 }
*/
/*
OR Seeks the First Truthy Value
-looks at information left to right
-all converted values are changed back after the or
*/
//EX
/*
alert(1 || 0); // 1 is truthy
alert(true || 'no matter what'); //true is truthy
alert(null || 1); //1 is truthy
alert(undefined || null || 0) //all are falsy statements
*/
/*
&& (AND)
-checks for false operands
-if all is true it is true
-if anything is false it is false
*/
//EX with alerts, then an if
/*
alert( true && true); //returns true
alert( false && true); //returns false
alert( true && false); //returns false
alert(false && false); //returns false
*/
/*
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
    alert("Time is 12:30");
}
*/
/*
And Seeks the FIRST false statement
-in a list of false the defining one is the first false located left to right
-&& executes before ||, it has higher precedence
-can be used to replace an if statement. (again don't do this, it is harder to read)

!(NOT)
-converts operand's boolean types
!true would be false, !false would be true
-Double !! converts values to their boolean typing 
[you can use the Boolean() function to do the same thing !! is shorthand]


TASKS
What's the result of OR?
true (2)

What is the result of OR'ed alerts?
false(null)

The resuly of OR AND OR
3 

A question about "if"
First will play
second will not
third will play
*/
//Check range between
/*
let age = prompt("Write a number!", 0)

if (age >= 14 && age <= 90) {
    alert("You know what being alive is!")
} else {
    alert("You're either really young or really old!")
}
*/
//Check the range outside
let age = prompt("Write a number!", 0)

if (age < 14 || age > 90) {
    alert("You're between 14 and 90")
} else {
    alert("Not between 14 and 90")
}