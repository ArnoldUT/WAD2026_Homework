const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const emailName = email.split("@")[0];
  const name = emailName
    .replace(/[._-]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

  sessionStorage.setItem(
    "postitUser",
    JSON.stringify({ name: name || "PostIt User", email })
  );

  window.location.href = "index.html";
});