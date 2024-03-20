const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

modal.classList.add('modal_active');

modalClose.addEventListener('click', () => {
	modal.classList.remove('modal_active');
	setCookie('showSubscribe', 'false');
})

console.log(document.cookie);

function setCookie(name, value) {
	document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie(name) {
	const pairs = document.cookie.split('; ');
	const cookie = pairs.find(p => p.startsWith(name + '='))
	return cookie.substr(name.length + 1);
}

