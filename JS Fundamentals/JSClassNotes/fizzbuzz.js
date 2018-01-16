// for (let number = 1; number <= 100; number++) {
//     if (number % 3 === 0 && number % 5 === 0) {
//         console.log("fizzbuzz")
//     } else if (number % 5 === 0) {
//         console.log('buzz')
//     } else if (number % 3 === 0) { console.log("Fizz") } else {
//         console.log(number)
//     }
// }

for (let number = 1; number <= 100; number++) {
    console.log(
        number % 15 == 0 ? 'fizzbuzz' : number % 3 == 0 ? 'fizz' : number % 5 == 0 ? 'buzz' : number

    )
}