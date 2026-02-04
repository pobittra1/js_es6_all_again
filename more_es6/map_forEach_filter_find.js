//map = map is loop and it has 3 params. single value after iterate into an array, index of an array, then original array. we can do anything operation using 3 params. also map has return value.

//forEach = it's simillar like map but for can't return anything. iit's only for operation in a func area.

//filter = it's also like map but it's actually return a value based on condition of inner func area.

//find = it's like filter but find can only return a first value by of his body condition.


//-------Example here----------map, forEach, filter, find----------

const members = [
    { id: 1, name: "iri", age: 30 },
    { id: 2, name: "tiri", age: 45 },
    { id: 3, name: "siri", age: 19 },
    { id: 4, name: "dhiri", age: 42 },
]

//map = double ages and store it into new array
const doubleAges = []
const ages = members.map(member => {
    doubleAges.push(member.age * 2)
})
console.log(doubleAges);

//forEach = deacrease ages 10 year for every ages and print it
const afterDecAges = [];
members.forEach(member => {
    const decAge = member.age - 10;
    afterDecAges.push(decAge);
})
console.log(afterDecAges);

//filter = get thoose array that are even ages
const evenAgesMem = members.filter(member => member.age % 2 === 0);
console.log(evenAgesMem);

//find = get the first odd age object mem
const firstOddAgeMem = members.find(member => member["age"] % 2 !== 0);
console.log(firstOddAgeMem);
