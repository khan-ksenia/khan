function fetchComments() {
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => response.json())
        .then(data => {
            const commentsContainer = document.getElementById("comments-container");
            for (let i = 0; i < 10; i++) {
                const commentContainer = document.createElement("div");
                commentContainer.classList.add("comment");
                commentContainer.innerHTML = `
          <p><strong>Name:</strong> ${data[i].name}</p>
          <p><strong>Email:</strong> ${data[i].email}</p>
          <p><strong>Comment:</strong> ${data[i].body}</p>
        `;
                commentsContainer.appendChild(commentContainer);
            }
        })
        .catch (error => {
        const commentsContainer = document.getElementById("comments-container");
        commentsContainer.innerHTML = "<h2>Error loading comments</h2>";
    });
};
function scrollToElement(e) {
    element = document.getElementById("myElementToScroll1");
    element.scrollIntoView(true);
}

function scrollToElement2(e) {
    element = document.getElementById("myElementToScroll2");
    element.scrollIntoView(true);
}
document.getElementById('myScroll1').addEventListener('click', scrollToElement);

document.getElementById('myScroll2').addEventListener('click', scrollToElement2);

fetchComments();


