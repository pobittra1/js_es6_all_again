const loadData = () => { //onClick func
    fetch('https://jsonplaceholder.typicode.com/todos/1') //api link
        .then(res => res.json()) //return promise
        .then(data => console.log(data)) //return promise again the return original data.
}