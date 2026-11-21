<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; {{ currentYear }} Homework 3. All rights reserved.</p>

      <nav aria-label="Footer navigation">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/signup">Sign Up</RouterLink>
      </nav>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  margin-top: auto;
  background: #34495e;
  color: #fff;
}

.footer-content {
  max-width: 850px;
  width: 100%;
  margin: 0 auto;
  padding: 18px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  font-size: 0.875rem;
}

nav {
  display: flex;
  gap: 20px;
}

nav a {
  color: #fff;
  text-decoration: none;
}

nav a:hover {
  color: #d6eaf8;
  text-decoration: underline;
}

@media (max-width: 520px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }
}
</style>
