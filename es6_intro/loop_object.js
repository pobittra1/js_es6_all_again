const results = {
    math: 54,
    english: 78,
    chemistry: 67,
    physics: 56,
    agriculture: 89
}

//loop through object using for in key method
for (const key in results) {
    const value = results[key]
    console.log(key, value);
}

//getting keys in array then loop on keys array and  get values using for of loop
const keys = Object.keys(results)
console.log(keys);
for (const key of keys) {
    const value = results[key]
    console.log(key, value);
}