/* 
comparisons
 -greater/less than a > b, a < b;
 -greater/ less than or equal a>=b, a<=b;
 -equal too, a == b; double equal sign to compare, not 

Boolean results
 -result is always a boolean
 -true means "yes"
 -false means "lie"
 EX:
 alert( 2 > 1 );  // true (correct)
 alert( 2 == 1 ); // false (wrong)
 alert( 2 != 1 ); // true (correct)
 -can be used to asign a boolean to a variable
 EX:
 let result = 5 > 4 // assign the result of the comparison
 alert(result); //true

String Comparison
 -compared letters are assigned values based on alphabetical order
 -z > a
 EX
 alert( 'Z' > 'A' ); // true
 alert( 'Glow' > 'Glee' ); // true
 alert( 'Bee' > 'Be' ); // true
 
Comparison of differnet types
 -boolean comparison convert strings to numbers
 ex: alert('2' > 1); will return true. '2' becomes 2
 - true and false's numeric equivelents are 1 and 0
 ex: alert(true == 1) will return true 
     alert(false == 0) will return false
 -it is possible to get a true and a false when compared to be true 
 EX:
  let a = 0;
  alert( Boolean(a) ); // false
  let b = "0";
  alert( Boolean(b) ); // true
  alert(a == b); // true!

 - == is flawed because it cannot tell 0 and false apart 
 EX: alert( 0 == false) will return true
 -using the strict equality operator (===) it checks their types against one another
 EX: alert(0 === false) returns false because one is a boolean and the other is a number

Comparison with null and undefined (edge cases)
 -with strict equality they return false when compared
 EX: alert(null === Undefined) returns false

 -however they return true wen compared without strict equality
 EX: alert(null == undefined); returns true

Strange results: null V.S 0 (more hedge cases)
 -comparing null with zero is odd
 EX:
   alert(null > 0); returns false
   alert(null == 0); returns false
   alert(null >= 0); returns true
 -the last one returns true because of the operator used
Incomparable undefineds
 -keep undefined away from comarison operators!
 EX: alert(undefined > 0); false
     alert(undefined < 0); false
     alert(undefined == 0); false
 -numerically undefined is converted to nan, nan will always return false

Was all this Pointless (kinda, but not really)
-all examples were essentially a do not do scenario
     
Tasks! (write answers, go back and reread relevent sections if you're wrong)
 -true (easy)
 -false (dictionary comparison)
 -true (dictionary comparison)
 -true (only equal when not strict)
 -false (see previous)
 -false (null is evil)
 -false (see previous)
*/