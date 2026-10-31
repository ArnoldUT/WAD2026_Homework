const profileTrigger = document.getElementById("profile-trigger");
const profileDropdown = document.getElementById("profile-dropdown");
const profileName = document.getElementById("profile-name");
const profileEmail = document.getElementById("profile-email");
const profileAction = document.getElementById("profile-action");
const profileMenu = document.querySelector(".profile-menu");

let profile = null;

try {
  profile = JSON.parse(sessionStorage.getItem("postitUser"));
} catch {
  sessionStorage.removeItem("postitUser");
}

profileName.textContent = profile?.name || "";
profileEmail.textContent = profile?.email || "";
profileAction.textContent = profile ? "Log out" : "";
profileTrigger.setAttribute(
  "aria-label",
  profile ? "Open profile menu" : "Go to login page"
);

profileTrigger.addEventListener("click", () => {
  if (!profile) {
    window.location.href = "login.html";
    return;
  }

  profileDropdown.hidden = !profileDropdown.hidden;
  profileTrigger.setAttribute("aria-expanded", String(!profileDropdown.hidden));
});

profileAction.addEventListener("click", () => {
  if (profile) {
    sessionStorage.removeItem("postitUser");
  }

  window.location.href = "login.html";
});

document.addEventListener("click", (event) => {
  if (!profileMenu.contains(event.target)) {
    profileDropdown.hidden = true;
    profileTrigger.setAttribute("aria-expanded", "false");
  }
});
