let myCar = {
    make: 'honda',
    model: 'civic',
    miles: 3000000,
    showInfo: function() {
        console.log(myCar.make, myCar.model)
    }
}
let drive = {
    miles: function(milesDriven) {
        console.log(`You have driven ${milesDriven} miles!`)
        myCar.miles = myCar.miles + milesDriven
        return;
    }
}
drive.miles(123);
console.log(`You have now driven ${myCar.miles}!`)



// myCar.year = 1999;
// console.log(`my car is a ${myCar.year} ${myCar.make} ${myCar.model} it has ${myCar.miles} miles!`)