let currentCoffee = null;
let currentSize = 'TALL';
let currentMilk = 'REGULAR';
let currentQuantity = 1;
let currentExtras = { sugar: false, cinnamon: false };
let order = [];
let selectedType = 'all';

function saveOrderToStorage() {
    localStorage.setItem('coffeeOrder', JSON.stringify(order));
}

function loadOrderFromStorage() {
    const saved = localStorage.getItem('coffeeOrder');
    if (saved) {
        order = JSON.parse(saved);
    }
}

function closeDetail() {
    document.getElementById('detailPage').classList.remove('active');
    document.body.classList.remove('modal-open');
}

function toggleOrderPanel() {
    document.getElementById('orderPanel').classList.toggle('active');
}

function toggleBurgerMenu() {
    const burgerMenu = document.getElementById('burgerMenu');
    const coffeeTypesNav = document.getElementById('coffeeTypesNav');
    burgerMenu.classList.toggle('active');
    coffeeTypesNav.classList.toggle('active');
}
