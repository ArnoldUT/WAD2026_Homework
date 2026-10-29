//API version

fetch("https://6ae348d1933120ae20f898d9.mockapi.io/posts")
  .then((response) => response.json())
  .then((data) => {
    // Find the container where posts will be displayed.
    const container = document.getElementById("posts-container");

    // Loop through all posts returned by the API.
    data.forEach((post) => {
      const article = document.createElement("article");
      article.classList.add("post");

      // Dynamically generate the HTML structure for each post.
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

      // Add the generated post to the webpage.
      container.appendChild(article);
    });
  })
  .catch((error) => {
    // Log any errors that occur while fetching the data.
    console.error("Error loading API data:", error);
  });
