const PageState = function() {
  let currentState = new homeState(this);

  this.init = function() {
    this.change(new homeState());
  };

  this.change = function(state) {
    currentState = state;
  };
};

// Home state
const homeState = function(page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
  <div class="jumbotron">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
  </div>
  `;
};

// About state
const aboutState = function(page) {
  document.querySelector('#heading').textContent = 'About us';
  document.querySelector('#content').innerHTML = `
    <p>This is the about page</p>
  `;
};

// Contact state
const contactState = function(page) {
  document.querySelector('#heading').textContent = 'Contact us';
  document.querySelector('#content').innerHTML = `
    <p>This is the Contact page</p>
  `;
};

// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();

// UI variables
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');

// Home
home.addEventListener('click', (e) => {
  e.preventDefault();
  page.change(new homeState);
});

// About
about.addEventListener('click', (e) => {
  e.preventDefault();
  page.change(new aboutState);
});
// Home
contact.addEventListener('click', (e) => {
  e.preventDefault();
  page.change(new contactState);
});
