function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();
  // Open
  xhr.open('GET', 'data.txt', true);

  console.log('READYSTATE', xhr.readyState);

  // Optional -  Used for spinners/loaders
  xhr.onprogress = function() {
    console.log('READYSTATE', xhr.readyState);
  };

  // New syntax
  xhr.onload = function() {
    if (this.status === 200) {
      // console.log(this.responseText);
      document.querySelector('#output').innerHTML = `<h1>${
        this.responseText
      }</h1`;
    }
  };

  xhr.onerror = function() {
    console.log('Request error');
  };

  // Older syntax
  // xhr.onreadystatechange = function() {
  // 	console.log('READYSTATE', xhr.readyState);
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // };

  xhr.send();
}

document.querySelector('#button').addEventListener('click', loadData);
