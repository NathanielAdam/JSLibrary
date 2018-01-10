// console.log(
//     //use of double quotes:
//     "O was born in Indianapolis!\n" +
//     "I\'ve lived in 70 states.\n " +
//     "I like Indiana.\n"
// )
// console.log(
//     // use of single quotes :
//     'single quotes are better\n' +
//     'They require less keystrokes.\n' +
//     'example text.\n'
// )
// console.log(
//     // Nesting single quotes
//     "this is 'super' awesome.\n" +
//     'Jay said, "I am so excited for lunch!"\n' +
//     // Nesting Double inside single
//     'Jay said, "I am so excited for lunch"\n'
// )

// let tweet = `Kanye is broke. No Joke!`,
//     family = `Love those people!`,
//     words = 'words';
// //below we use keyword functions 


// console.log(tweet);
// let upperTweet = tweet.toUpperCase();
// console.log(upperTweet);
// let lowerTweet = tweet.toLowerCase();
// console.log(lowerTweet);

//Targeting specific charcters in a string:

let first = 'nate',
    last = 'williams',
    firstUpper = first.charAt(0).toUpperCase() + first.slice(1),
    lastUpper = last.charAt(0).toUpperCase() + last.slice(1);
//log first and last name
console.log(first[0].toUpperCase());
console.log(last[0].toUpperCase());
console.log(firstUpper);
console.log(lastUpper);