// JavaScript for toggling between login and signup forms
function showSignUp() {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('signupForm').style.display = 'block';
}

function showLogin() {
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('signupForm').style.display = 'none';
}

// Store user data in localStorage (for demonstration purposes only)
function storeUserData(username, password, mobile) {
  const userData = {
    username,
    password,
    mobile,
  };
  localStorage.setItem('userData', JSON.stringify(userData));
}

// Function to handle sign up form submission
document.getElementById('signup').addEventListener('submit', function(event) {
  event.preventDefault();
  const newUsername = document.getElementById('newUsername').value;
  const newPassword = document.getElementById('newPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const mobileNumber = document.getElementById('mobile').value;

  // Check if passwords match
  if (newPassword !== confirmPassword) {
    alert("Passwords don't match");
    return;
  }

  // Store user data including mobile number
  storeUserData(newUsername, newPassword, mobileNumber);
  alert('Sign up successful! Please login.');

  // Show login form after successful signup
  showLogin();
});

// Function to handle login form submission
document.getElementById('login').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Retrieve stored user data from localStorage
  const storedData = JSON.parse(localStorage.getItem('userData'));

  // Check if stored data exists and matches input
  if (storedData && storedData.username === username && storedData.password === password) {
    alert('Login successful!');
    // Redirect to the home page after successful login
    window.open('./hlml/main.html', '_blank'); // Corrected typo 'hlml' to 'html'
  } else {
    alert('Invalid username or password');
  }
});
