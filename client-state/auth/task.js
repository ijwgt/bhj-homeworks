'use strict';

const signinForm = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');

async function authorizeUser(formData) {
    try {
        const response = await fetch('https://students.netoservices.ru/nestjs-backend/auth', {
            method: 'POST',
            body: formData
        })

        const result = await response.json();

        if (result.success) {
            localStorage.setItem('id', result.user_id);
            welcome.textContent = `Добро пожаловать, ${result.user_id}!`;
            welcome.classList.add('welcome_active');

            document.getElementById('signin').classList.remove('signin_active');
        } else {
            alert('Неверный логин/пароль');
        }
    } catch (error) {
        console.error('Ошибка при отправке запроса:', error);
    }
}

window.addEventListener('load', () => {
    const storedUserId = localStorage.getItem('id');
    if (storedUserId) {
        welcome.textContent = `Добро пожаловать, #${storedUserId}!`;
        welcome.classList.add('welcome_active');
        document.getElementById('signin').classList.remove('signin_active');
    }
});

signinForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(signinForm);
    await authorizeUser(formData); 
});