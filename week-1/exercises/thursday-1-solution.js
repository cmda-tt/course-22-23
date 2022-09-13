const data = [
	{
		id: 1,
		name: 'Robert',
		kaas: true,
	},
	{
		id: 2,
		name: 'Vincent',
		kaas: false,
	},
	{
		id: 3,
		name: 'Laura',
		kaas: true,
	},
]

function generateTable() {
	/* Always define variables at the top of your scope! */

	let table = document.querySelector('table'); // Grab the entire table
	let theading = document.querySelector('thead tr'); // Grab the row in the thead
	let tbody = document.querySelector('tbody') // Grab the body
	/* We start by taking the property _keys_ instead of the values, we can do this 
		when we are sure the array has normalized data, so all objects are identical in structure
	*/

	/* This looks like magic, but when we dissect it, it's actually quite simple,
		We call on the Object.keys() method with as parameter, the first object in our data array.
		Next, we loop over this using forEach, which yields the 'key' parameter (we can name this whatever
		we want, but key is the most descriptive). Now we have a loop over all object property names / keys!
	*/

	Object.keys(data[0]).forEach(key => {

		/* We have three operations, let's go over them in detail:
			First, we generate a new HTML element, a <th> or table heading. For every entry in the forEach loop
			After that, we insert the name of the key with .textContent, so the <th> has some actual content
			Finally, we append the <th> to the heading, appendChild() will automatically append it to the bottom
		*/

		let newElement = document.createElement('th');
		newElement.textContent = key;
		theading.appendChild(newElement);
	})

	/* This gives us the headings for our table, great! Now for the content... 
		As you can see, I name the parameter "obj", short for Object, this time,
		this is because every individual item in the loop now is an object, not the key of an object
	*/

	data.forEach(obj => {

		/* First, for every object in the array, we need a new <tr> or table row, let's make it. */

		let tr = document.createElement('tr');
		tbody.appendChild(tr);

		/* The next part is what we call a for...in loop, fed by Object.entries(), you can read more about
			this here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
		*/

		for (const [key, value] of Object.entries(obj)) {
			/* If you were to console.log() key and value here, you could see the actual data being
				presented here, we're not going to do so, and rather immediately show it in the HTML
			*/

			let td = document.createElement('td');
			td.textContent = value; // Use the value, not the property / key!
			tr.appendChild(td) // And append it to the row we just made.

		}

	})

}

generateTable();