const loader = document.querySelector('.loader');
const items = document.querySelector('#items');
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
	if (xhr.readyState === xhr.DONE) {
		loader.classList.remove('loader_active');
		const currency = JSON.parse(xhr.responseText).response.Valute;
		for (let key in currency) {
			items.insertAdjacentHTML('beforeEnd',`<div class="item__code">${currency[key].CharCode}</div><div class="item__value">${currency[key].Value}</div><div class="item__currency">руб.</div>`);
		}
	}
}

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();