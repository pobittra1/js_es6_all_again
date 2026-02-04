//object destructuring
const marks = {
    math: 45,
    biology: 47,
    chemistry: 90,
    english: 68
}

//fr every line i need to write marks.math , math math math thats why destructuring is here
console.log(marks.math);
console.log(marks.chemistry);

//destructuring
const { math, biology, chemistry: rosayan } = {
    math: 45,
    biology: 47,
    chemistry: 90,
    english: 68
}
//now we can access directly by the subject name
console.log(math);

console.log(rosayan); //we can call also rosayan cause in this destructure part we set the name of chemistry is rosayan like chemistry: rosayan. i mean using :



//array destructuring
const numbers = [1, 2, 3, 4, 5];
const [firstNum, secNum, thirdNum] = numbers // can destructure like this
// or can do like this
// const [firstNum, secNum, thirdNum] = [1, 2, 3, 4, 5];
console.log(firstNum, secNum);