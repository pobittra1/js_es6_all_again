const loadData = () => { //onClick func
    fetch('https://jsonplaceholder.typicode.com/todos/1') //api link
        .then(res => res.json()) //return promise
        .then(data => console.log(data)) //return promise again the return original data.
}


// recap fetch with posts and console each data
const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url).then(res => res.json()).then(data => {
        console.log(data); // full json parse data will be loaded from here
        displayPost(data); //send the data in displayPost func.
    });
}


const displayPost = (posts) => {
    console.log(posts); //display the full data from here
    posts.forEach(post => console.log(post)); //display every array of obj data in single line.

}