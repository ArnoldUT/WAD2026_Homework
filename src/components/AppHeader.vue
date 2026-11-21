<template>
  <header class="header">
    <div class="header-content">
      <h1>Homework 3</h1>

      <!-- Navigation links -->
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/signup">Sign Up</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* Main header container */
.header {
  background: #34495e;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

/* Centers content and limits maximum width */
.header-content {
  max-width: 850px;
  width: 100%;
  margin: 0 auto;
  padding: 15px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Page title styling */
h1 {
  margin: 0;
  color: white;
  font-size: 1.5rem;
}

/* Navigation layout */
nav {
  display: flex;
  gap: 20px;
}

/* Navigation link styling */
nav a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

/* Navigation link hover effect */
nav a:hover {
  color: #d6eaf8;
}

/* Highlight the active page */
.router-link-active {
  text-decoration: underline;
  font-weight: bold;
}
</style>
