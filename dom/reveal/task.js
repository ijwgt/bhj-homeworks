const reveal = Array.from(document.querySelectorAll('.reveal'));

addEventListener('scroll', () => {
	for (let i = 0; i < reveal.length; i++) {
        const {
            top,
            bottom,
        } = reveal[i].getBoundingClientRect();

	console.log({top, bottom,});
	console.log(window.innerHeight);

		if((bottom > 0) && (top < window.innerHeight)) {
			reveal[i].classList.add('reveal_active');
		} else {
			reveal[i].classList.remove('reveal_active');
		}
	}
})

