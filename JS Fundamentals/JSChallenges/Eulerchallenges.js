euler();

function euler() {
    let oddNumber = 1,
        finalNumber;
    //
    do {
        finalNumber += oddNumber;
        oddNumber += 2;
        console.log(finalNumber);
        console.log(oddNumber);
    } while (oddNumber <= 1000);
}