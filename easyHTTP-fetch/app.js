const http = new EasyHTTP();

// Get Users
http
  .get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err));

// User data
const user = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@fake.com'
};

// Create users
http
  .post('https://jsonplaceholder.typicode.com/users', user)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Update user
http
  .put('https://jsonplaceholder.typicode.com/users/2', user)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Delete user
http
  .delete('https://jsonplaceholder.typicode.com/users/2')
  .then(res => console.log(res))
  .catch(err => console.log(err));
