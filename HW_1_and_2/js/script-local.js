//Local version

fetch("./data/posts.json")
  .then((response) => response.json())
  .then((data) => {
    // Find the container where posts will be inserted.
    const container = document.getElementById("posts-container");

    // Loop through all posts stored in the JSON file.
    data.posts.forEach((post) => {
      const article = document.createElement("article");
      article.classList.add("post");

      // Dynamically create the HTML structure for each post.
      article.innerHTML = `
        <div class="post-header">
          <img src="images/profile.png" alt="User icon" class="avatar">
          <h2>${post.date}</h2>
        </div>

        ${
          post.image
            ? `
          <img src="${post.image}" alt="Post image" class="post-photo">
        `
            : ""
        }

        <p>${post.text}</p>

        <img src="images/like.png" alt="Like icon" class="like-icon">
      `;

      // Add the generated post to the page.
      container.appendChild(article);
    });
  })
  .catch((error) => {
    console.error("Error loading JSON:", error);
  });
