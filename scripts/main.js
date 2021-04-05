//############################SHOW MENU########################################

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

//############################BANNER ANIMATION########################################

const bannerText = document.getElementById('bannerText');
const bannerImg = document.getElementById('bannerImg');

const bannerText3 = document.getElementById('bannerText3');
const bannerImg3 = document.getElementById('bannerImg3');

window.addEventListener('load', () => {

    bannerText.classList.toggle('show-banner-text');
    bannerText.style.top = '190px';
})

window.addEventListener('scroll', () => {

    let value = window.scrollY + 380;
    let valueBanner = window.scrollY - 1690;

    bannerText.style.top = `${value * 0.5}px`;
    bannerImg.style.top = `${window.scrollY * 0.4}px`;

    if(window.innerWidth > 1024) {
        bannerText3.style.top = `${valueBanner * 0.6}px`;
        bannerImg3.style.top = `${valueBanner * 0.4}px`;
       // console.log(window.scrollY)
    } else {
        bannerText3.style.top = '0';
        bannerImg3.style.top = '0';
    }
})

//############################MENU ANIMATION########################################


let ubicacion = window.pageYOffset;

const menuAnimation = () => {

    let menu = document.getElementById('menu');

    if (window.innerWidth < 1024) {

        //    console.log(window.pageYOffset);
        
            let currentScroll = window.pageYOffset;
            if(ubicacion >= currentScroll) {
                menu.style.top = '0';
            } else {
                menu.style.top = '-70px';
            }
            ubicacion = currentScroll;
        
            if (window.pageYOffset <= 70) {
                menu.style.top = '0';
        //        console.log('something')
            }

    } else {

        menu.style.top = '0';

    }

}

window.addEventListener('scroll', menuAnimation)

//############################SHOW PRODUCT LIST########################################

const productList = document.getElementById('productList');
const showProductList = document.getElementById('showProductList');

showProductList.addEventListener('click', () => {
    productList.classList.toggle('show-product-list');
    showProductList.classList.toggle('rotate');
})


//####################################################################

