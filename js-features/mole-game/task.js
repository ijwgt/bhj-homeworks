const stars = document.querySelectorAll('.star');

stars.forEach((starsItem, index) => {
	starsItem.addEventListener('click', () => {
		stars.forEach((star) => star.classList.remove('star_active'))
		const activeStars = [...stars].slice(0, index + 1);
		activeStars.forEach((star) => star.classList.add('star_active'));
	})
});


