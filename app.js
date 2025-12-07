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

function filterAndRenderCoffee(searchTerm = '') {
    let filtered = coffeeData;

    if (selectedType !== 'all') {
        filtered = filtered.filter(c => c.type === selectedType);
    }

    if (searchTerm) {
        const q = searchTerm.toLowerCase();
        filtered = filtered.filter(c =>
            c.name.toLowerCase().includes(q)
        );
    }

    renderCoffeeCards(filtered);
}

function renderCoffeeCards(coffees) {
    const grid = document.getElementById('coffeeGrid');
    grid.innerHTML = '';

    if (coffees.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:2rem;color:#999;">Кофе не найден</div>';
        return;
    }

    coffees.forEach(coffee => {
        const card = document.createElement('div');
        card.className = 'coffee-card';
        card.innerHTML = `
            <img src="${coffee.image}" alt="${coffee.name}" class="coffee-card-image"
                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22280%22 height=%22250%22%3E%3Crect fill=%22%23ddd%22 width=%22280%22 height=%22250%22/%3E%3C/svg%3E'">
            <div class="coffee-card-body">
                <h3 class="coffee-card-title">${coffee.name}</h3>
                <p class="coffee-card-desc">${coffee.description}</p>
                <div class="coffee-card-footer">
                    <span class="coffee-price">${coffee.basePrice} ₽</span>
                    <button class="coffee-card-btn" data-coffee-id="${coffee.id}">Добавить</button>
                </div>
            </div>
        `;

        card.querySelector('.coffee-card-btn').addEventListener('click', () => {
            openDetail(coffee);
        });

        grid.appendChild(card);
    });
}
