// Show Errors
function showError(msg) {
	// Get Elements
	const card = document.querySelector('.card');
	const heading = document.querySelector('.heading');
	// Create div
	const errorDiv = document.createElement('div');
	// Add class
	errorDiv.className = 'alert alert-danger';
	// Create text node and append to div
	errorDiv.appendChild(document.createTextNode(msg));
	// Insert error above heading
	card.insertBefore(errorDiv, heading);

	// Clear error after 3 seconds
	setTimeout(() => {
		document.querySelector('.alert').remove();
	}, 3000);
}

// Calculate Results
function calculateResults(e) {
	e.preventDefault();
	
	// UI Variables
	const $amount = document.querySelector('#amount').value;
	const $interest = document.querySelector('#interest').value;
	const $years = document.querySelector('#years').value;
	const $monthlyPayment = document.querySelector('#monthly-payment');
	const $totalPayment = document.querySelector('#total-payment');
	const $totalInterest = document.querySelector('#total-interest');

	const principal = parseFloat($amount);
	const calculatedInterest = parseFloat($interest) / 100 / 12;
	const calculatedPayment = parseFloat($years) * 12;

	// Monthly Payment
	const m = Math.pow(1 + calculatedInterest, calculatedPayment);
	const monthly = (principal * m * calculatedInterest) / (m - 1);

	if(isFinite(monthly)) {
		$monthlyPayment.value = monthly.toFixed(2);
		$totalPayment.value = (monthly * calculatedPayment).toFixed(2);
		$totalInterest.value = ((monthly * calculatedPayment) - principal).toFixed(2);
	} else {
		showError('Please, check your numbers');
	}

}

// Listen for submit
document.querySelector('#loan-form').addEventListener('submit', calculateResults);
