import CONFIG from './config.js';
import request from './request.js';
import makeHtml from './make.js';

const data = await request(CONFIG.url);

let amount = 0;

console.log(data);

makeHtml(data
	.map(item => item['Welke kleur kledingstukken heb je aan vandaag? (Meerdere antwoorden mogelijk natuurlijk...)'])
	.map(item => item.split(',').map(color => color.trim())).flat()
	// .filter(item => item == 'Zwart' || item === 'Wit') // Zwart en wit zijn awesome!;
	.reduce((acc, curr) => {
		return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
	}, {}), document.querySelector('table'))

