// Get local text file
function getText() {
	fetch('text.txt')
		.then(res => res.text())
		.then(data => document.querySelector('#output').textContent = data)
		.catch(err => console.log(err));
}

// Get local JSON data
function getJSON() {
	fetch('posts.json')
		.then(res => res.json())
		.then(data => {
			let output = '';
			data.forEach(post => output += `<li>${post.title}</li>`)
			document.querySelector('#output').innerHTML = output;
		})
		.catch(err => console.log(err));
}

// Get data from external API
function getAPIData() {
	fetch('https://api.github.com/users')
		.then(res => res.json())
		.then(data => {
			let output = '';
			data.forEach(user => output += `<li>${user.login}</li>`)
			document.querySelector('#output').innerHTML = output;
		})
		.catch(err => console.log(err));
}


document.querySelector('#button1').addEventListener('click', getText);
document.querySelector('#button2').addEventListener('click', getJSON);
document.querySelector('#button3').addEventListener('click', getAPIData);
