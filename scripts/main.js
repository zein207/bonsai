const navbar = document.getElementById('navbar');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const mask = document.getElementById('mask');
const itemsNavbar = document.querySelectorAll('.navbar__item__link');

const showMenu = () => {
    navbar.classList.toggle('show');
    mask.classList.toggle('hidde');
}

itemsNavbar.forEach(element => {
    element.addEventListener('click', showMenu);
});

menuIcon.addEventListener('click', showMenu);

closeIcon.addEventListener('click', showMenu);

mask.addEventListener('click', showMenu);

//####################################################################

const bannerText = document.getElementById('bannerText');

window.addEventListener('load', () => {
    bannerText.classList.toggle('show-banner-text');
})

//####################################################################


let ubicacion = window.pageYOffset;

const menuAnimation = () => {

    let menu = document.getElementById('menu');

    if (window.pageYOffset == 0) {
        menu.style.top = '0';
    }

    let currentScroll = window.pageYOffset;
    if(ubicacion >= currentScroll) {
        menu.style.top = '0';
    } else {
        menu.style.top = '-70px';
    }
    ubicacion = currentScroll;
}

window.addEventListener('scroll', menuAnimation)

//####################################################################

const productList = document.getElementById('productList');
const showProductList = document.getElementById('showProductList');

showProductList.addEventListener('click', () => {
    productList.classList.toggle('show-product-list');
    showProductList.classList.toggle('rotate');
})
