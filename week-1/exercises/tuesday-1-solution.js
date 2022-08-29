const data = [
	1,
	2,
	"3",
	"4",
	5
]

function convertArrayStringsToNumbers() {
	/*  Please note, this is just one solution, there are at least 5 available I can think of without Googling.
		If you're using a different one, good for you! */
	let newData = data.map(item => {
		 return parseInt(item, 10);
	})

	console.log(newData);
}

convertArrayStringsToNumbers();