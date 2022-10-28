const seconds = 10;

function getData() {
	console.log('Grabbing new userdata...');
	
	fetch('https://opensheet.elk.sh/1tO9SS1f9RQZ0Ay0BmkczJVkCxWcAhzGtcSDpzheKTZI/responses')
		.then(res => res.json())
		.then(data => {
			const cleanData = data.map(item => {
				let newItem = {
					huisdier: item["Wat is je favoriete soort huisdier?"],
					oog: item["Wat is je oogkleur?"],
					wind: item["Wat is je favoriete windrichting?"],
					motivatie: parseInt(item["Op een schaal van 1 tot 10, hoeveel zin heb je in de Tech Track?"], 10),
					zin: item["Op een schaal van 1 tot 10, hoeveel zin heb je in de Tech Track?"],
					kies: item["Kies zelf of je deze vraag beantwoord."],
					favdatum: item["Wat is je favoriete datum?"],
					favdatum2: item["Wat is je favoriete datum, maar nu in tekst!"],
					zuivel: item["Wat is je favoriete zuivelproduct?"],
					naam: item["Wat is je voornaam?"],
					kleur: item["Welke kleur kledingstukken heb je aan vandaag? (Meerdere antwoorden mogelijk natuurlijk...)"].split(',').map(item => item.trim()),
					verdieping: item["Op welke verdieping van het TTH studeer je het liefst?"],
					groot: item["Wat wil je worden als je groot bent?"],
					groot2: item["Wat wilde je later worden als je groot bent, maar nu toen je zelf 8 jaar was."],
					kaas: item["Kaas is ook een zoogdier?"],
					auto: item["Als je later een auto zou kopen, van welk merk zou deze dan zijn?"],
				}
				
				return newItem
			})
			
			console.log(cleanData);
		});
	}


getData();