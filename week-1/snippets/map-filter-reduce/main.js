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

// console.log(data);

const newArray = data.map(item => {
	let lowerCase = item.name.toLowerCase();
	
	console.log(item.name === "Robert")
	
	return {
		id: parseInt(item.id),
		name: lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1),
		kaas: Boolean(item.kaas)
	}
}).filter(item => {
	return item.name !== "Robert" //
})

console.log(newArray);