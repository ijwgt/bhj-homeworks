'use strict';

const text = document.querySelectorAll('.has-tooltip');

text.forEach((item) => {
	const tooltipElement = document.createElement('div');
	tooltipElement.textContent = item.title;
	tooltipElement.classList.add('tooltip');
	
	item.addEventListener('click', (event) => {
		event.preventDefault();

		tooltipElement.classList.toggle('tooltip_active');
		item.appendChild(tooltipElement);
		tooltipElement.style.top = `${item.getBoundingClientRect().bottom}px`;
		tooltipElement.style.left = `${item.getBoundingClientRect().left}px`;
	})
})


