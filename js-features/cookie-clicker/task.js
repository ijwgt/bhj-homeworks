const image = document.querySelector('.clicker__cookie');
const counter = document.querySelector('#clicker__counter');
const speed = document.querySelector('#clicker__speed');

let time = Date.now();
let imgChangedSize = true;


function change() {
	if (imgChangedSize) {
		image.width = 230;
	} else {
		image.width = 200;
	}

	imgChangedSize = !imgChangedSize;


	counter.textContent ++;


	speed.textContent = ((Date.now() - time) / 1000).toFixed(2);
	speed.textContent = (1 / speed.textContent).toFixed(2);
	time = Date.now();
}

image.onclick = change;











