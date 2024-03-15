'use strict';

const links = document.querySelectorAll('.has-tooltip');

links.forEach((item) => {
	item.insertAdjacentHTML('afterend', '<div class="tooltip" style="left: 0; top: 0"></div>');
	item.addEventListener('click', (event) => {
		event.preventDefault();

		item.nextSibling.classList.toggle('tooltip_active');
        item.nextSibling.textContent = item.title;
        item.nextSibling.style.top = `${item.getBoundingClientRect().bottom}px`;
        item.nextSibling.style.left = `${item.getBoundingClientRect().left}px`;
	})
})


