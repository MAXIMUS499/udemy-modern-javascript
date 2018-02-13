function loadCustomer() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);
  xhr.onload = function() {
    if (this.status === 200) {
      const user = JSON.parse(this.responseText);
      const output = `
				<ul>
					<li> ID: ${user.id} </li>
					<li> ID: ${user.name} </li>
					<li> ID: ${user.company} </li>
					<li> ID: ${user.phone} </li>
					</ul>
			`;

			document.querySelector('#customer'). innerHTML = output;
    }
  };
  xhr.send();
}

function loadCustomers() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);
  xhr.onload = function() {
    if (this.status === 200) {
			const customers = JSON.parse(this.responseText);
			
			let output = '';

			customers.forEach(customer => {
				output += `
				<ul>
					<li> ID: ${customer.id} </li>
					<li> ID: ${customer.name} </li>
					<li> ID: ${customer.company} </li>
					<li> ID: ${customer.phone} </li>
					</ul>
			`;
			});

			document.querySelector('#customers'). innerHTML = output;
    }
  };
  xhr.send();
}

document.querySelector('#button1').addEventListener('click', loadCustomer);
document.querySelector('#button2').addEventListener('click', loadCustomers);
