const navBtn = document.getElementById('nav-btn');
const navBar = document.getElementById('navbar');
const navClose = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav-link');

navBtn.addEventListener('click', () => {
    navBar.classList.toggle('nav-active')
})

navClose.addEventListener('click', () => {
    navBar.classList.toggle('nav-active')
})
navLink.forEach(link => {
    link.addEventListener('click', () => {
        navBar.classList.toggle('nav-active')

    })

})