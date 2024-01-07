const dropdownList = document.querySelector('.dropdown__list');
const dropdownValue = document.querySelector('.dropdown__value');
const dropdownItem = document.querySelectorAll('.dropdown__item');
const arrOfItems = Array.from(dropdownItem);

dropdownValue.addEventListener('click', () => {
	dropdownList.classList.toggle('dropdown__list_active');
})

arrOfItems.forEach((item, index) => {
	item.addEventListener('click', () => {
		dropdownList.classList.remove('dropdown__list_active');
		dropdownValue.textContent = arrOfItems[index].textContent;
		event.preventDefault();
	})
})
