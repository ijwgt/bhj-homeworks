const rotatorCases = document.querySelectorAll('.rotator__case');
let countCase = 0;

function showCases() {
	rotatorCases.forEach((item) => {
		item.classList.remove('rotator__case_active');
		item.style.color = item.dataset.color;
	})
	rotatorCases[countCase].classList.add('rotator__case_active');
    if (countCase == rotatorCases.length - 1) {
        countCase = 0;
    } else {
        countCase++
    }
	

}

setInterval(showCases, 1000);