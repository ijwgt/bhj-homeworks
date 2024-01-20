










const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContent = document.querySelectorAll('.tab__content');

tabs.forEach((item) => {
    item.addEventListener('click', () => {
        tabs.forEach((item) => item.classList.remove('tab_active'));
        tabContent.forEach((item) => item.classList.remove('tab__content_active'));

        let i = tabs.indexOf(item);
        tabs[i].classList.add('tab_active');
        tabContent[i].classList.add('tab__content_active');
    })
})