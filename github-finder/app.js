// Initialize GitHub instance
const github = new GitHub();
// Init UI class
const ui = new UI();

// Debounce function to avoid lots of requests
const debounce = (func, delay) => {
  let inDebounce;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};

// Search input
const searchUser = document.querySelector('#searchUser');

// Search input event listener
searchUser.addEventListener(
  'keyup',
  debounce(function(e) {
    // Get input value
    const userText = e.target.value;

    if (userText !== '') {
      // Make HTTP call
      github.getUser(userText).then(data => {
        if (data.profile.message === 'Not Found') {
          // Show alert
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          // Show profile
					ui.showProfile(data.profile);
					// Show repos
					ui.showRepos(data.repos);
        }
      });
    } else {
      // Clear profile
      ui.clearProfile();
    }
  }, 2000)
);
