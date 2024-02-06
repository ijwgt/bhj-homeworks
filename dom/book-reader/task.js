const fontSizes = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');

function changingTheFront() {
	fontSizes.forEach((item) => {
    	item.addEventListener('click', () => {
			if (event.target.dataset.size === 'small') {
				book.classList.remove('font-size_big');
				book.classList.add('font-size_small');
			} else if (event.target.dataset.size === 'big') {
				book.classList.remove('font-size_small');
				book.classList.add('font-size_big');
			} else {
				book.classList.remove('font-size_big');
				book.classList.remove('font-size_small');
			}

        	fontSizes.forEach((item) => item.classList.remove('font-size_active'));
		
        	let i = fontSizes.indexOf(item);
        	fontSizes[i].classList.add('font-size_active');

			event.preventDefault();
		})
	})
}