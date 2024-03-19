const textArea = document.querySelector('#editor');
const clearBtn = document.querySelector('.button');
const storedText = localStorage.getItem('text');

textArea.value = storedText;

textArea.addEventListener('change', () => {
	localStorage.setItem('text', textArea.value);
})

clearBtn.addEventListener('click', () => {
	textArea.value = '';
	localStorage.removeItem("dataText");
})