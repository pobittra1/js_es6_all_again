// do double an array and store it into new array
const marks = [34, 65, 78, 43, 56, 76]
const doubledMarks = [];
for (const mark of marks) {
    const doubledMark = mark * 2;
    doubledMarks.push(doubledMark)
}

console.log(doubledMarks);

//make it easy and one line code using map func
const numbers = [1, 2, 3, 4, 5, 6];
const doubledNumbers = numbers.map(number => number * 2); //here map can iterate into numbers and get a single array value for every time that is number. and return it as doubledNumbers func
console.log(doubledNumbers);

//get string value lenght and first letter also add into this 2 values into a new array using map
const names = ["tiri", "kiri", "khiri", "niri", "hiriya", "siriyas"]
const nameLength = []
const nameLenAndFirstLetter = names.map(name => {
    const nameLen = name.length
    const firstLetter = name[0]
    nameLength.push([nameLen, firstLetter])
})
console.log(nameLength);
//map has 3 params
//one is single value of an array and second is index of each value. then final is original array
