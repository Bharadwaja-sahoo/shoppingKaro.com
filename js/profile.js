// Retrieve user data from localStorage
const storedData = JSON.parse(localStorage.getItem('userData'));

// Check if stored data exists and contains the required fields
if (storedData && storedData.username && storedData.mobile && storedData.password) {
  // Update the content of the h1 elements with the retrieved data
  const usernameElement = document.getElementById('username');
  const numberElement = document.getElementById('number');
  const passwordElement = document.getElementById('password');

  usernameElement.textContent = `Username: ${storedData.username}`;
  numberElement.textContent = `Phone Number: ${storedData.mobile}`;
  passwordElement.textContent=`Password: ${storedData.password}`;

} else {
  // Handle case where data doesn't exist or is incomplete
  console.log('User data not found or incomplete');
}
