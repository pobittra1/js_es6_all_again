//dot notation
// we can access object value using dot notation.
const person = {
    name: "John",
    age: 30,
    city: "New York",
    address: {
        street: "123 Main St",
        zipcode: "10001"
    },
    hobbies: ["reading", "gaming", "coding"]
};
console.log(person.name);
console.log(person.age);
console.log(person.city);

//we can access object using bracket notation.
console.log(person["name"]);
console.log(person["age"]);
console.log(person["city"]);
// Iterating over the properties of the person object using bracket notation
for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(person[key]);
    }
}

// Accessing nested object properties using chaining
console.log(person.address.street);
console.log(person.address.zipcode);
console.log(person.hobbies[0]); // Accessing the first hobby
console.log(person.hobbies[1]); // Accessing the second hobby
console.log(person.hobbies[2]); // Accessing the third hobby
// Using optional chaining to safely access properties
console.log(person.address?.street);
console.log(person.address?.zipcode);
console.log(person.hobbies?.[0]); // Accessing the first hobby safely
console.log(person.hobbies?.[1]); // Accessing the second hobby safely
console.log(person.hobbies?.[2]); // Accessing the third hobby safely