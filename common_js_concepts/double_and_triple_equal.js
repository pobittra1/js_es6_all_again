// == double equal only check the value. but
// === triple equal check the value also check the type of this given values.


console.log(2 == 2);// its true, not check type
console.log(2 == "2");// also it's true cause not check type
console.log(2 === 2); //it's true cause their type are same. both are numbers
console.log(2 === "2"); //it's false cause number is same but type is different. 2 type is number, "2" type is string. that's why get false.

console.log(false == 1); //it's false cause false is 0  and 0 == 1 that's why get false.
console.log(true == 1); //its true cause true is 1 and 1 == 1 that's why get true.
console.log(true === 1); //its false cause true and 1 is not same type.

console.log(null == undefined); //it's true cause null -> object and undefined -> object so object == object it's same. so true.


//different
console.log(null === undefined); //its false. cause they are not same type.
console.log(NaN == NaN);//false
console.log(NaN === NaN);//false
console.log([] == ""); // true
console.log([5] = "5");// true
console.log({} == {}); //false
console.log([] == []); //false

//over all primitive to nono-primitive conditon is return false.
//also for non-primitive to non-primitive.
