//primitive data type send the only value but non-primitive data send the reference with value.


//arguments pass by value example--
const addition = (x, y) => {
    x = x + 2; // x = 3+2 = 5
    y = y + 5; // y = 4+5 = 9
    const total = x + y;
    return total;
}

const x = 3; //primitive
const y = 4; //primitive
const result = addition(x, y);
console.log(result); // output = 14
console.log(x, y); // after changing the x , y value in addition function but still x=3 and y=4. cause it primitive data type. it's pass just only value not reference that's why it not change. but in non-primitive data type------->


const totalAges = (personOne, personTwo) => {

    personOne.age = 0; //change value with reference
    personTwo.age = personTwo.age / 2; //change value with reference
    const totalAge = personOne.age + personTwo.age;
    return totalAge;
}

const personOne = { name: "iri", age: 30 };
const personTwo = { name: "kiri", age: 25 };

//before calling func the age value is
console.log(personOne, personTwo);

const ages = totalAges(personOne, personTwo);
console.log(ages);

//after calling function the age value is
console.log(personOne, personTwo); //here change the original age value cause it's pass by reference.


//---------------arguments----------------
//it's work with normal function

function numbers(a, b) {
    console.log(a, b); //using this we can't get all arguments. that's why---
    console.log(arguments);// out like array of object = [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6 }
    const argArr = [...arguments]; // convert it into an array.
    console.log(argArr);
    argArr.forEach(everyElm => console.log(everyElm)); // print every array elm
}
numbers(1, 2, 3, 4, 5, 6);
