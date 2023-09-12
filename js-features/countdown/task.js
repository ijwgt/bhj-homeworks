function timer() {
	let numberOfSeconds = `${hours}:${minutes}:${seconds}`;
	
	  seconds -= 1;
//Формат 00
	if (seconds < 9) {
		seconds.innerText = "0" + seconds;
	}
	if (minutes < 9) {
		minutes.innerText = "0" + minutes;
	}
	if (hours < 9) {
		hours.innerText = "0" + hours;
	}
//Формат 0
	if (seconds > 9) {
		seconds.innerText = seconds;
	}
	if (minutes > 9) {
		minutes.innerText = minutes;
	}
	if (hours > 9) {
		hours.innerText = hours;
	}
//Seconds
	if (seconds === 0 && minutes > 0)  {
		minutes -= 1;
		seconds = 59;
	} 
//Minutes
	if (minutes === 0 && hours > 0)  {
		hours -= 1;
		minutes = 59;
	}

//clear
	if (hours === 0 && minutes === 0 && seconds === 0) {
		clearInterval(intervalId);
		alert("Вы победили в конкурсе!");
	}
}

let hours = 0;
let minutes = 0;
let seconds = 59;

const intervalId = setInterval(timer, 1000);




