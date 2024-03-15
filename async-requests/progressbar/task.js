const progress = document.getElementById('progress');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    const formData = new FormData(document.forms.form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.upload.onprogress = function () {
        progress.value += 0.7;
    }

    xhr.send(formData);
    e.preventDefault();
})