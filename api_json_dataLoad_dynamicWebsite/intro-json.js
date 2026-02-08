//json
// json =  javaScript object notation. JSON (JavaScript Object Notation) is a lightweight data format used to store and exchange data between systems, especially between a server and a client.

//normal obj data
const data = {
    name: "iri",
    age: 32,
    nationality: "bangladeshi",
    friedns: ["tiri", "kiri", "siriya"],
    isPoor: true
}

//before convert the data
console.log(`before convert the data is = ${data}`);
//convert into Json stringfy data
const dataJson = JSON.stringify(data);
console.log(`after convert the data in json = ${dataJson}`);

//again convert the json data in obj data
console.log(`again convert the json data in original format = ${JSON.parse(dataJson)}`);