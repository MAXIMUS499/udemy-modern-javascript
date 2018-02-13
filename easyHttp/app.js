const http = new EasyHTTP();

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

// Get single Post
http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// Create data
const data = {
  title: 'Custom post',
  body: 'This is a custom post'
};

// Post data
http.post('https://jsonplaceholder.typicode.com/posts', data, function(
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});

// Update post
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(
  err,
  res
) {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});

// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
