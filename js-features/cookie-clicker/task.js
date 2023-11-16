const image = document.querySelector('.clicker__cookie');
const counter = document.querySelector('#clicker__counter');
const speed = document.querySelector('#clicker__speed');
let time = Date.now();
let previousClicks = 0;


function change() {
	image.width += 10;

	let currentClicks = Number.parseInt(counter.textContent);
	counter.textContent ++;

	speed.textContent = (((Date.now() - time) / 1000) / (currentClicks - previousClicks)).toFixed(2);
	previousClicks = currentClicks;
}

image.onclick = change;









