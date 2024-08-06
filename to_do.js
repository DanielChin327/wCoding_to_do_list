// write out EventListeners inside the DOMContentLoaded,
// write out functions outside of the DOMContentLoaded,

// User clicks on the input area to type out a task.
// User presses the Add button to add the task.
// Task appears on the bottom.
  // Task has three options Description, Checkmark for Done, and a Delete Button.
  // Task is saved to local storage.
// When User tries to delete without a checkmark, an alert appears, saying that the task hasn't been completed. delete anyways.
  // if chosen yes, it will be deleted. Otherwise it will be not be deleted.




document.addEventListener('DOMContentLoaded', function() {







})






// document.addEventListener('DOMContentLoaded', () => {
//   const messageElement = document.getElementById('message');
//   const userForm = document.getElementById('userForm');

//   // Check if user data exists in local storage
//   const storedProfile = localStorage.getItem('userProfile');

//   if (storedProfile) {
//       const userProfile = JSON.parse(storedProfile);
//       messageElement.textContent = `Welcome back, ${userProfile.name}!`;
//   } else {
//       messageElement.textContent = 'Oh, you are new!';
//   }

//   // Handle form submission
//   userForm.addEventListener('submit', (event) => {
//       event.preventDefault();

//       const name = document.getElementById('name').value;
//       const age = document.getElementById('age').value;
//       const email = document.getElementById('email').value;

//       const userProfile = { name, age, email };

//       // Store user profile in local storage
//       localStorage.setItem('userProfile', JSON.stringify(userProfile));

//       // Update welcome message
//       messageElement.textContent = `Welcome back, ${name}!`;

//       // Clear form
//       userForm.reset();
//   });
// });
