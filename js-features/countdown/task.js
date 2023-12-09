function countdownTimer() {
	let counter = document.querySelector('#timer');
	 
	if (counter.textContent >= 1) {
		counter.textContent -= 1;
	} else if (counter.textContent < 1) {
		alert('Вы победили в конкурсе!');
		clearInterval(timerId);
	}
}
let timerId = setInterval(countdownTimer, 1000);
