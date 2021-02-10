const menuButtons = document.querySelectorAll('.menu-btn');
const menu = document.querySelector('#menu');

menuButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        menu.classList.toggle('menu-opened')
    })
})