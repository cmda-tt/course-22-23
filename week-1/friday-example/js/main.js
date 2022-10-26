import CONFIG from './config.js';
import request from './request.js';

const data = await request(CONFIG.url);

let amount = 0;

const cleanData = data
	.map(item => item['Kies zelf of je deze vraag beantwoord.'])
	.filter(item => item.length > 2)
	.reduce((acc, curr) => {
		return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
	}, [])

console.log(cleanData);