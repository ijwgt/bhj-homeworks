const form = document.querySelector('.tasks__control');
const tasksList = document.querySelector('.tasks__list');
const tasksInput = document.querySelector('.tasks__input');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	if (tasksInput.value.trim() !== '') {
		createItems(form.elements.task__input.value);

		const removeTask = document.querySelector('.task__remove');
		removeTask.addEventListener('click', () => {
			event.target.parentElement.querySelector('.task').remove();
		})
	}

	event.currentTarget.reset();
})

function createItems(value) {
	const newTask = document.createElement('div');
	tasksList.appendChild(newTask);
	newTask.outerHTML = `<div class="task"><div class="task__title">${value}</div><a href="#" class="task__remove">&times;</a></div>`;
}





// localStorage.setItem('task', tasksList.querySelector('.task__title').textContent);
// console.log(localStorage.getItem('task'));