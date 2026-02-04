//get maximum number using math function
const max = Math.max(1, 2, 3, 4, 5, 6, 77, 8, 9)
console.log(max);
//get max number of array using spread operator
const numbers = [1, 5, 4, 6, 7, 8, 3, 77, 8, 9];
const maxTwo = Math.max(...numbers);
console.log(maxTwo);
//copy arrays directly
/* 
const copyOfNumbers = numbers;
copyOfNumbers.push(4)
console.log(numbers); // its change directly previous numbers array. thats why we need to spread it and create another reference.

*/

//copy arrays using spread operator
const copyOfNumbers = [...numbers]
copyOfNumbers.push(4);
console.log(`Previous numbers array is = ${numbers}`);
console.log(`After push copyOfNumbers array is = ${copyOfNumbers}`);


//copy object using spread operator
const carDetails = { carName: "Toyota", milage: "12km" }
const carOil = { ...carDetails, oil: "Octen" } //spread carDetails object and insert it into carOil
console.log(carOil);
