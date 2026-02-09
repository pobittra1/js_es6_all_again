//fetch json placeholder posts. and show title in browser.

//loadPost func
const loadPost = () => {
    //fetch post
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url).then(res => res.json()).then(data => displayPost(data));

}

//displaying the every single post in browser
const displayPost = (posts) => {

    // getting the post container from html
    const postContainer = document.getElementById("postContainer");
    posts.forEach(post => {
        // //create li for every title and append it into post container.
        // const li = document.createElement("li");
        // li.innerText = post.title;
        // //append li into container.
        // postContainer.appendChild(li);
        const postCard = document.createElement("div");
        postCard.innerHTML = `
          <div class="post-card">
            <h2 class="post-title">${post.title}</h2>
            <p class="post-body">${post.body}</p>
        </div>
        `

        postContainer.append(postCard);
    });
}