// Mock database to hold user data
const users = [
  {
    name: "John",
    email: "john@example.com",
    password: "12345678",
  },
];

// Show login form
function switchToLogin() {
  document.getElementById("signup-form").classList.add("d-none");
  document.getElementById("login-form").classList.remove("d-none");
}

// Show signup form
function switchToSignup() {
  document.getElementById("login-form").classList.add("d-none");
  document.getElementById("signup-form").classList.remove("d-none");
}

// Login logic
function login(event) {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").classList.remove("d-none");
    return;
  } else {
    document.getElementById("emailError").classList.add("d-none");
  }

  // Password validation
  if (password.length < 6) {
    document.getElementById("passwordError").classList.remove("d-none");
    return;
  } else {
    document.getElementById("passwordError").classList.add("d-none");
  }

  // Check user credentials

  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    alert(`Welcome, ${user.name}!`);
    window.location.href = "index.html";
  } else {
    document.getElementById("login-error").classList.remove("d-none");
  }
}

// Signup logic
function signup(event) {
  const name = document.getElementById("signup-name").value.trim();
  const email = document.getElementById("signup-email").value.trim();
  const password = document.getElementById("signup-password").value.trim();

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("signup-email-error").classList.remove("d-none");
    return;
  } else {
    document.getElementById("signup-email-error").classList.add("d-none");
  }

  // Password validation
  if (password.length < 6) {
    document.getElementById("signup-password-error").classList.remove("d-none");
    return;
  } else {
    document.getElementById("signup-password-error").classList.add("d-none");
  }

  // Check if the email is already registered
  const userExists = users.some((u) => u.email === email);
  if (userExists) {
    document.getElementById("signup-error").classList.remove("d-none");
  } else {
    // Add new user
    users.push({ name, email, password });
    document.getElementById("signup-error").classList.add("d-none");
    document.getElementById("signup-success").classList.remove("d-none");

    // Clear fields
    document.getElementById("signup-name").value = "";
    document.getElementById("signup-email").value = "";
    document.getElementById("signup-password").value = "";

    // Redirect to login after 2 seconds
    setTimeout(switchToLogin, 2000);
  }
}

// Event Listeners
document.getElementById("loginForm").addEventListener("submit", login);

document.getElementById("signupForm").addEventListener("submit", signup);

document
  .getElementById("switch-to-signup")
  .addEventListener("click", switchToSignup);

document
  .getElementById("switch-to-login")
  .addEventListener("click", switchToLogin);
