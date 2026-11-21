<script setup>
import { ref, computed } from "vue";

const email = ref("");
const password = ref("");

// Generate a list of failed password requirements
const failedRules = computed(() => {
  const errors = [];

  // Password length must be between 8 and 14 characters
  if (password.value.length < 8 || password.value.length >= 15) {
    errors.push("Password must contain 8-14 characters");
  }

  // Must contain at least one uppercase letter
  if (!/[A-Z]/.test(password.value)) {
    errors.push("Password must contain at least one uppercase letter");
  }

  // Must contain at least two lowercase letters
  const lowercaseLetters = password.value.match(/[a-z]/g) || [];
  if (lowercaseLetters.length < 2) {
    errors.push("Password must contain at least two lowercase letters");
  }

  // Must contain at least one numeric value
  if (!/\d/.test(password.value)) {
    errors.push("Password must contain at least one numeric value");
  }

  // Must start with an uppercase letter
  if (!/^[A-Z]/.test(password.value)) {
    errors.push("Password must start with an uppercase letter");
  }

  // Must contain an underscore character
  if (!password.value.includes("_")) {
    errors.push('Password must contain "_"');
  }

  return errors;
});

// Handle form submission
function handleSignup() {
  if (failedRules.value.length === 0) {
    alert("Signup successful!");
  }
}
</script>

<template>
  <div class="signup-container">
    <!-- Signup form card -->
    <div class="signup-card">
      <form @submit.prevent="handleSignup">
        <!-- Email input field -->
        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            v-model="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <!-- Password input field -->
        <div class="form-group">
          <label for="password">Password</label>
          <input
            id="password"
            type="password"
            v-model="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <!-- Signup button -->
        <button type="submit">Sign Up</button>
      </form>
    </div>

    <!-- Password validation requirements -->
    <div class="requirements-box">
      <h3>Password Requirements</h3>

      <div
        class="requirement"
        :class="{ valid: password.length >= 8 && password.length < 15 }"
      >
        8-14 characters
      </div>

      <div class="requirement" :class="{ valid: /[A-Z]/.test(password) }">
        At least one uppercase letter
      </div>

      <div
        class="requirement"
        :class="{ valid: (password.match(/[a-z]/g) || []).length >= 2 }"
      >
        At least two lowercase letters
      </div>

      <div class="requirement" :class="{ valid: /\d/.test(password) }">
        At least one number
      </div>

      <div class="requirement" :class="{ valid: /^[A-Z]/.test(password) }">
        Starts with an uppercase letter
      </div>

      <div class="requirement" :class="{ valid: password.includes('_') }">
        Contains "_"
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Main page container */
.signup-container {
  max-width: 850px;
  margin: 40px auto;
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

/* Signup form card and requirements card */
.signup-card,
.requirements-box {
  width: 400px;
  padding: 25px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Requirements section heading */
.requirements-box h3 {
  margin-top: 0;
  margin-bottom: 15px;
  color: #263449;
}

/* Form layout */
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

/* Input labels */
label {
  margin-bottom: 5px;
  font-weight: bold;
  color: #263449;
}

/* Input fields */
input {
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 6px;
  font-size: 14px;
}

/* Signup button */
button {
  width: 100%;
  padding: 11px 18px;
  border: none;
  border-radius: 6px;
  background: #34495e;
  color: white;
  cursor: pointer;
}

/* Button hover effect */
button:hover {
  background: #1c2833;
}

/* Invalid password requirement */
.requirement {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 6px;
  background-color: #ffe5e5;
  color: #b00020;
  font-weight: 500;
}

/* Valid password requirement */
.requirement.valid {
  background-color: #e8fff0;
  color: #008a3d;
}
</style>
