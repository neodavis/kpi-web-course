const burgerToggle = document.querySelector('.burger-toggle')
const listItem = document.querySelectorAll('.aside-link-list-item');
const main = document.querySelector('.main');

burgerToggle.addEventListener('click', () => {
    listItem.forEach(listItem => listItem.classList.toggle('aside-link-list-item-hidden'))
    main.classList.toggle('presentation-mode');
})