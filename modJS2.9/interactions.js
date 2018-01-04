"use strict"

/*
Interaction : alert, prompt, confirm
 -Using the browser as demo enviroment, let's get stuff to pop up

Alert
 -We've been using this to pop things up in tiny windows
 EX alert('hello') 
 -this will show a small window and say hello
 -the window is called a modal window and will hand around until they press okay

Prompt
 -What if you want the visitor of your website to have some input?
 EX: prompt ('how are you?' [, default])
 -modal window pops up but the user can put their response in
 -there are two buttons 'ok' and 'cancel'
 -pressing 'ok' inputs the user's response
 -pressing cancel will result in a null input
 EX: 
   let age = prompt('How old are you?', 100);
  alert(`You are ${age} years old!`); // You are 100 years old!
 -ALWAYS SUPPLY A DEFAULT, else the browser will put something there
 -it is possible to leave an empty string as the default thus defaulting it to 0/empty
 
confirm
 -Boolean user input, ok is true cancle is false
 EX: 
   let isBoss = confirm("Are you the boss?");

   alert( isBoss ); True if ok is pressed

Summary: 
 -Alert shows messages
 -prompt asks for user input, cancling returns null
 -confirm asks a yes or no and returns true or false

 Tasks: create a webpage that takes a name and outputs it

*/
let userName = prompt("What is your name?", ["Dan the Meme man"])
alert(`Your name is ${userName}`);