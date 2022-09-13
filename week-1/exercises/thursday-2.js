/* Before we start, please use the following HTML in your codepen or
   environment of your choice to continue this assignment

   <!-- We start by creating the basics for a table -->

	<table>
		<thead>
			<tr>
			</tr>
		</thead>
		<tbody>
		</tbody>
	</table>
*/

/* Assume we have a non-normalized dataset to start with */

const data = [
	{
		id: 1,
		name: 'ROBERT',
		kaas: false,
		coords: {
			lat: "52.3676",
			long: "4.9041"
		}
	},
	{
		id: "2",
		name: 'viNcent',
		kaas: "true",
		coords: {
			lat: "52.3676",
			long: "4.9041"
		}
	},
	{
		id: 3,
		name: 'laura',
		kaas: true,
		coords: {
			lat: "52.3676",
			long: "4.9041"
		}
	},
]

/* This assignment builds on the earlier assignment we did today. Create a table
   containing the above dataset, this time though, the dataset is a bit scuffed.
   We need to normalize the data by addressing the following issues:

   1) The id is not always a number, convert it to an integer / number first.
   2) The name isn't normalized, random capitals appear. Change this string in a
   first letter capital and lowercase after that
   3) "kaas" is not always a boolean. Convert it to a string so we can print it in HTML
   4) "coords" is an object. If you try and print this, you'll get [object Object] or something.
   We'll have to loop over the object and print a custom string using template literals.
*/

function generateTable() {
	/* Continue using the code from thursday-1.js */
}

generateTable()