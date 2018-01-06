/*
Javascript Specials!
-This will recap allot of the stuff so far!

Code Structure
-semicolons are delimiters(the break up the code)
-linebreaks usually work the same as semicolons
  -this is called automatic semicolon insertion
-It is standard practice to put semicolons at 
   the end of statements

Strict mode
-you can enable strict at the top of the code with "use strict"

-without this some things will function to suite older versions
-it'd be nice if we could always use this....

Variables
-declared using
  -let
  -const(constant, can't be changed)
  -var (old-style, will see later)
-variable can include
 -letters and digits, but eh first character may not be a digit
 -characters $ and _ are normal on par with other letters
 -non latin alphabetes, but these are genreally not used

 -variables can store any values

Interaction!
-we can do this in a few ways
 -prompt(question, 'default')
 -confirm(question)
 -alert(message)

 -all of these can use variables as there 'question', 'message', or even 'default'

Operators
-Arithmetical
 -* multiply
 -/ divide
 -+ add
 - "-" subtract
 -% to get a remainder

 using one of these with a string makes the answer a string

-assignments 
 - = just sets it equal to something
 - *= sets it equal to the result of the mathmatical operator

bitwise, the oddball
 -see a seperate url for this
 -https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators

-ternary
 -only operator that has three parameters
  param1 ? param2:param3

-comparisons
 - == equality check, will check them to number formata. (except undefines and null)
 -null and defined equal eachother and NOTHING else
 - greater than and less then compare where the values lie

-loops
 -for(item;param;whatDoYouDoToIt){blockystuff}
 -while(itemIsJudged){print this}
 -do{this} while {this is relevent}

-switch construct
 -switch(parameter){
     case "whatever paramater could equal": //think in the case the parameter is "whatever parameter could equal"
     print this
     break;
     case...
}

-functions
 -will run some code, and can be reused. so you only have to write that code one time!
 -comes in a few flavors, declaration
 function sum = (a,b){let result = a + b; return result;}
 -expressions
 let sum = function(a,b) {let result = a + b; return result;}
 -arrow syntax is just expressions but is allot neater in design
 -if you use multiple lines use {} and return
 let sum = (a,b) => a + b
 Alternitively
 let sum = (a,b) =>{
     return a+b;
 }
*/