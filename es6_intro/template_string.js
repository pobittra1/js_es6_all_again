function sum(numOne, numTwo) {
    total = numOne + numTwo;
    // output = "The sum of " + numOne + " and " + numTwo + " is " + total;
    //Using template string
    output = `The sum of ${numOne} and ${numTwo} is ${total}`;
    console.log(output);
}
sum(5, 6)


// Use dynamic value string
let price = 100;
let discountedPrice = `30% discounted price of ${price} = ${price * 0.7}Tk`;
console.log(discountedPrice);