let orderTotal = 120;
let limitForFreeShipping = 100;
let discount = true;
let specialCode = true;
if (specialCode) {
    console.log('You qualify for free shipping dut to the code!')
} else if (orderTotal > limitForFreeShipping && discount === false) {
    console.log('You qualify for free shipping')
} else {
    console.log('You will need to pay for shipping')
}