//async - await --- async is used to declare an asynchronous function, and await is used to pause the execution until a promise is resolved.


const loadPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log("before");
    const data = await res.json();
    console.log(data);
    console.log("after");

}
loadPost()
