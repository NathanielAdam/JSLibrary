/*
LOOPS WHILE AND FOR
 -allow us to repeat an action multiple times
 -while loop has this syntax

//While(condition) {
    //code and what-not
//}
*/
// EX of a while loop
/*
let i = 3
while (i) {
    alert(i);
    i--
}
*/
/*
 -While the condition is true the code will run.
 -Brackets are not needed in a single-line body
*/
//EX of a single line, no brackets
/*
let i = 3;
while (i) alert(i--);
*/
/*
"DO...WHILE" LOOP
-The loop will execute the body THEN check for wether it is truthy

SYNTAX:
do{
    loop body
} while (condition);

*/
//EX of a do while loop
/*
let i = 0;
do {
    alert(i);
    i++;
} while (i < 3);
*/
/*
The "for" Loop
-the for loop is used more than the while loop
SYNTAX:
for(begin; condition; step) {
    loop this
}

*/



/*
tasks:
last loop values: 1 because 0 runs as a false statement

Which values shows the while?
loop 1:
last value is 4
loop 2: last value is 4(it was 5 postfix returns old  value)
*/
//output even numbers in a loop
/*
let number = 0;
for (number; number <= 10; number += 2) {
    alert(number)
}
*/

/*
let i = 0;
while (i < 3) {
    alert(`number ${i}`)
    i++
}
*/