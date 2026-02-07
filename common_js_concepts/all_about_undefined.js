//undefined
//have some more way to get undefined. like---

//if i do not set any property value.
let data; // not set the value of data property
console.log(data); // get undefined


//if i do not pass func parameter value
let countAge = (a, b) => {
    console.log(`get the value of b from func body = ${b}`); //get undefined cause i don't pass the value by this params.
    let totalAge = a + b;
    return totalAge;
}
const age = countAge(8);
// console.log(age); not necessary to print it.


//if we don't return anything from the func body we will get the undefined.
const returnIssue = x => {
    //console.log(x); //not necessary to print it.
    //no return here
}
const returnIssueData = returnIssue(5);
console.log(returnIssueData); //got undefined cause we not set any return value in a func body.


//if we do return in a func but not set any return value. also we will get undefined
const result = x => {
    return;
}
const resultData = result(4);
console.log(resultData); //also got undefined cause we do return but not set any return value.



//if we try to get value of an ovject property that is not exit in this object. also we got undefined
const person = { name: 'iri', age: 32 }
console.log(person.bodyColor); //got undefined cause bodyColor property not exits in person object.


//if we try to get a value from an array by their index. but index number is out of the lenght og this array. also we got undefined here.
const animals = ['dog', 'ant', 'cat', 'lion'];
console.log(animals[4]); //got undefined cause we set index number 4 but in animals array have index 0-3. 4 is not exits between this numbers. that's why got undefined.

//if we delete a data from array, after try to access this deleted data we will get undefined.
delete animals[1];
console.log(animals[1]);

//if we try to get a typeOf undefined also we will get undefined;
console.log(typeof undefined); //get undefiend cause it's a special type undefined.


//