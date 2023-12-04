const lostMole = document.querySelector('#lost');
const deadMole = document.querySelector('#dead');

getHole = index => document.getElementById(`hole${index}`);

let deadCounter = 0;
let lostCounter = 0;

for (holeIndex = 1; holeIndex < 10; holeIndex++) {
	let hole = getHole(holeIndex);
    hole.addEventListener('click', function () {
        if (hole.classList.contains('hole_has-mole')) {
            deadCounter++;
            dead.textContent = deadCounter;
        } else {
            lostCounter++;
            lost.textContent = lostCounter;
        }
        if (deadCounter === 10) {
            alert('Вы победили!');
            deadCounter = 0;
            lostCounter = 0;
            dead.textContent = deadCounter;
            lost.textContent = lostCounter;
        }
        if (lostCounter === 5) {
            alert('Вы проиграли!');
            deadCounter = 0;
            lostCounter = 0;
            dead.textContent = deadCounter;
            lost.textContent = lostCounter;
		}
    })
}