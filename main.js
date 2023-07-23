import './src/scss/style.scss';

const navigation = document.querySelector('.header-right');
const hamburger = document.querySelector('.hamburger-menu');
const toggleMenu = hamburger.firstElementChild;
const blurBg = document.querySelector('.blur-bg');
const searchBox = document.querySelector('.search-box');
const links = document.querySelectorAll('.primary-navigation li');
const linksDeep = document.querySelectorAll('.primary-navigation li a');
const shopIcon = document.querySelector('.shopIcon');
const buyBtn = document.querySelector('.buyBtn');
console.log(linksDeep);
hamburger.addEventListener('click', (e) => {
    navigation.classList.toggle('active');
    toggleMenu.classList.toggle('active');
    blurBg.classList.toggle('active');
    searchBox.classList.toggle('disabled');
    linksDeep.forEach((linkDeep) => {
        linkDeep.classList.toggle('activeColor')
    })
})

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        if(link.classList.contains('active')) {
            return;
        } else {
            link.parentElement.querySelector('.active').classList.remove('active');
            link.classList.add('active');
        }
    }) 
})

let count = 0;

buyBtn.addEventListener("click", (e) => {
    count++;
    buyBtn.classList.add('active');
    buyBtn.querySelector('span').textContent = "Add"
    shopIcon.innerHTML = `<div class="text-primary">${count}</div>`
})
