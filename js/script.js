// Data is loaded from My JSON Server
fetch("https://my-json-server.typicode.com/ArnoldUT/WAD2026_Homework_1/posts")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("posts-container");

    data.forEach((post) => {
      const article = document.createElement("article");
      article.classList.add("post");

      article.innerHTML = `
        <div class="post-header">
          <img src="images/profile.png" alt="User icon" class="avatar">
          <h2>${post.date}</h2>
        </div>

        ${
          post.image
            ? `<img src="${post.image}" alt="Post image" class="post-photo">`
            : ""
        }

        <p>${post.text}</p>

        <img src="images/like.png" alt="Like icon" class="like-icon">
      `;

      container.appendChild(article);
    });
  })
  .catch((error) => {
    console.error("Error loading JSON:", error);
  });
