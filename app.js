const navBtn = document.getElementById('nav-btn');
const navBar = document.getElementById('navbar');
const navClose = document.getElementById('nav-close');
navBtn.addEventListener('click', () => {
    navBar.classList.add('nav-active')
})

navBtn.addEventListener('click', () => {
    navClose.classList.remove('nav-active')
})