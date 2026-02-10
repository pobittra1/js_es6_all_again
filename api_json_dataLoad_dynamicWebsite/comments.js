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
    //get the comments box/body for display on ui
    const commentBox = document.getElementById("comments-box");
    //create html elm comments card
    const commentCard = document.createElement("div");
    commentCard.classList.add("comment-card");
    //loop every single data to view it on console
    comments.forEach(comment => {

    });
}

loadComments();