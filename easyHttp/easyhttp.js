// Function constructor
function EasyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
EasyHTTP.prototype.get = function(url, cb) {
  this.http.open('GET', url, true);

  this.http.onload = function() {
    if (this.http.status === 200) {
      cb(null, this.http.response);
    } else {
      cb(`Error: ${this.http.status}`);
    }
  }.bind(this);

  this.http.send();
};

// Make an HTTP POST Request
EasyHTTP.prototype.post = function(url, data, cb) {
  this.http.open('POST', url, true);

	this.http.setRequestHeader('Content-type', 'application/json');

	this.http.onload = function () {
		cb(null, this.http.responseText);
	}.bind(this);

  this.http.send(JSON.stringify(data));
};

// Make an HTTP PUT Request

// Make an HTTP DELETE Request
