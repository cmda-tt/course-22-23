function makeHtml(obj, src) {
	createHeaders(Object.keys(obj), src);
	createContent(Object.entries(obj), src);
}

function createHeaders(th, src) {
	let rowEl = document.createElement('tr');
	let htmlRow = src.appendChild(rowEl);

	th.forEach(heading => {
		let headingEl = document.createElement('th');
		headingEl.innerHTML = heading;
		htmlRow.appendChild(headingEl);
	})
}

function createContent(tr, src) {
	let rowEl = document.createElement('tr');
	let htmlRow = src.appendChild(rowEl);

	tr.forEach(entry => {
		let headingEl = document.createElement('td');
		headingEl.innerHTML = entry[1];
		htmlRow.appendChild(headingEl);
	})

}

export default makeHtml;