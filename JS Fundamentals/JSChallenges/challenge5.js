// function printInfo(firstName, lastName, title) {
//     if (title == undefined) { title = '' }
//     return `${title}${firstName} ${lastName}`;
// }
// console.log(`My name is ${printInfo("nate", "adam")}`)
// console.log(`My name is ${printInfo("nate", "adam", "Mr.")}`)


function printInfo(firstName, lastName, title) {
    return title ? `${title} ${ firstName } ${ lastName }` : `${firstName} ${lastName}`
}
console.log(printInfo('Nate', 'adam'))