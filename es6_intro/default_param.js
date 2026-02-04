// try to use defalut parameter for sum
function sum(numOne, numTwo = 0) {
    total = numOne + numTwo;
    console.log(total);
}

sum(2)

// try to use defalut parameter for name convention
function personName(firstName, lastName = "") {
    fullName = firstName + " " + lastName
    console.log(fullName);
}
personName("hero", "honda") // set 2 arg
personName("hero") //set 1 arg instead of 2 prams. not getting error here for default param.


/**
 * ---------thumbrule of default params-----------------
 * add, substract = 0
 * multiply, division = 1
 * string = ""
 * array = []
 * obj = {}
 * 
 */