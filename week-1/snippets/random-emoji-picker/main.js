const h1 = document.querySelector('h1');
const button = document.querySelector('button');
const emojis = ['😃', '🙁', '🐭', '🍪', '🎱', '📊'];

button.addEventListener('click', pickEmoji);

function pickEmoji() {
	h1.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
}

pickEmoji();