const API_URL = "https://6ae348d1933120ae20f898d9.mockapi.io/posts";

// Find the form elements
const form = document.getElementById("post-form");
const postBody = document.getElementById("post-body");
const fileUpload = document.getElementById("file-upload");

// Handle form submission
form.addEventListener("submit", (event) => {
  // Prevent the default form submission
  event.preventDefault();

  const text = postBody.value.trim();
  const file = fileUpload.files[0];

  // Create the post object
  const newPost = {
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    text: text,
    image: file ? `images/${file.name}` : null,
  };

  // Send the post to MockAPI
  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      return response.json();
    })
    .then((data) => {
      console.log("Post created successfully:", data);

      // Redirect to the homepage
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Error creating post:", error);
      alert("Something went wrong while creating your post.");
    });
});
