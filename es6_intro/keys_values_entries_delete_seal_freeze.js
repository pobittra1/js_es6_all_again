const unknownMan = {
    name: "adam",
    age: 23,
    occupation: "Worker",
    haveSkill: true
}

//get the keys of object
const keys = Object.keys(unknownMan);
console.log(keys);
//get the values of object
const values = Object.values(unknownMan);
console.log(values);
//get the keys and object in one method and format like an array
const keysAndValues = Object.entries(unknownMan);
console.log(keysAndValues);

//object.delete(unknownMan) = it can delete and property into object
//object.freeze(unknownMan) = after doing this we can't modify anything
//object.seal(unknownMan) = after doing this we can just modify values. can't add, remove.
