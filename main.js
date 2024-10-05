let requestUrl = "https://jsonplaceholder.typicode.com/comments?";

function getrequest(url) {
  fetch(url).then(response => {
    return response.json();
  }).then(data => {
    const body = document.querySelector("body");
    const ul = document.createElement("ul");
    ul.className = "comment-list"; 
    body.appendChild(ul);

    data.forEach(item => {
      const li = document.createElement("li");
      li.className = "comment"; 
      const commentBox = document.createElement("div");
      commentBox.className = "comment-box";

      const idpost = document.createElement("span");
      idpost.textContent = `postId: ${item.postId}`;
      commentBox.appendChild(idpost);

      const idSpan = document.createElement("span");
      idSpan.textContent = `ID: ${item.id}`;
      commentBox.appendChild(idSpan);

      const nameSpan = document.createElement("span");
      nameSpan.textContent = `Name: ${item.name}`;
      commentBox.appendChild(nameSpan);

      const emailSpan = document.createElement("span");
      emailSpan.textContent = `Email: ${item.email}`;
      commentBox.appendChild(emailSpan);

      const bodyP = document.createElement("p");
      bodyP.textContent = `Body: ${item.body}`;
      commentBox.appendChild(bodyP);

      li.appendChild(commentBox);
      ul.appendChild(li);
    });
  });
}

getrequest(requestUrl);
