// Init storate class
const storage = new Storage();
// Get storaged location data
const weatherLocation = storage.getLocationData();

// Init weather class
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// Init UI class
const ui = new UI();


function getWeather() {
  weather
    .getWeather()
    .then(res => {
      ui.paint(res);
    })
    .catch(err => console.log(err));
}

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);
// Change location event
document.querySelector('#w-change-btn').addEventListener('click', e => {
	const city = document.querySelector('#city').value;
	const state = document.querySelector('#state').value;

	weather.changeLocation(city, state);

	// Set location in local storage
	storage.setLocationData(city, state);

	// Get and display weather
	getWeather();

	// Close modal
	$('#locModal').modal('hide');
});
