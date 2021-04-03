const navbar = document.getElementById('navbar');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const mask = document.getElementById('mask')

const showMenu = () => {
    navbar.classList.toggle('show');
    mask.classList.toggle('hidde');
}

menuIcon.addEventListener('click', showMenu)

closeIcon.addEventListener('click', showMenu)

mask.addEventListener('click', showMenu)



const productList = document.getElementById('productList');
const showProductList = document.getElementById('showProductList');

showProductList.addEventListener('click', () => {
    productList.classList.toggle('show-product-list');
    showProductList.classList.toggle('rotate');
})
