const xhr = new XMLHttpRequest();
const pollTitle = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');

xhr.onreadystatechange = function () {
	if (xhr.readyState === xhr.DONE) {
		const text = JSON.parse(xhr.responseText);
		pollTitle.textContent = text.data.title;

		for (let answer of text.data.answers) {
			const button = `<button class="poll__answer" onclick="alert('Спасибо, ваш голос засчитан!');">${answer}</button>`;
			pollAnswers.insertAdjacentHTML('beforeend', button);
		}
	}


}

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();