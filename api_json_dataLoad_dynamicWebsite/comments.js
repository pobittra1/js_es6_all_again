//at first load the comments
const loadComments = async () => {
    const url = "https://jsonplaceholder.typicode.com/comments";
    const res = await fetch(url);
    //waiting for response and get the data
    const data = await res.json();
    //send the data into displayComments func
    displayComments(data);
}

const displayComments = (comments) => {
    //loop every single data to view it on console
    comments.forEach(comment => {
        console.log(comment);
    });
}

loadComments();