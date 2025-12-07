const coffeeData = [
    {
        id: 1,
        name: 'Классический Капучино',
        type: 'cappuccino',
        description: 'Идеальное соотношение эспрессо, горячего молока и молочной пены (1:1:1). Традиционный итальянский напиток с глубоким вкусом и нежной текстурой.',
        image: 'images/cappuccino-classic.jpg',
        basePrice: 150
    },
    {
        id: 2,
        name: 'Капучино с корицей',
        type: 'cappuccino',
        description: 'Традиционный капучино с добавлением молотой корицы поверх пены. Коричневый цвет и пряный аромат придают напитку уютный, теплый характер.',
        image: 'images/cappuccino-cinnamon.jpg',
        basePrice: 155
    },
    {
        id: 3,
        name: 'Капучино с какао',
        type: 'cappuccino',
        description: 'Капучино с добавлением натурального какао-порошка. Сочетание шоколадных нот с кофейной горечью создает насыщенный вкус.',
        image: 'images/cappuccino-cocoa.jpg',
        basePrice: 160
    },
    {
        id: 4,
        name: 'Капучино Мока',
        type: 'cappuccino',
        description: 'Капучино с добавлением мокко-сиропа и какао. Это гибрид капучино и мокко, где кофе и шоколад создают гармоничный вкусовой профиль.',
        image: 'images/cappuccino-mocha.jpg',
        basePrice: 170
    },
    {
        id: 5,
        name: 'Классический Латте',
        type: 'latte',
        description: 'Нежный и кремовый напиток с соотношением 1 часть эспрессо на 3 части молока. Мягкий кофейный вкус переходит в сливочное послевкусие.',
        image: 'images/latte-classic.jpg',
        basePrice: 140
    },
    {
        id: 6,
        name: 'Латте Макиато',
        type: 'latte',
        description: 'Визуально слоистый латте с четкими слоями: молоко, молочная пена и эспрессо. Вкус нежный, молоко доминирует.',
        image: 'images/latte-macchiato.jpg',
        basePrice: 145
    },
    {
        id: 7,
        name: 'Латте Ванильный',
        type: 'latte',
        description: 'Классический латте с добавлением ванильного сиропа. Нежная ваниль подчеркивает кремовость молока и создает сладкий вкус.',
        image: 'images/latte-vanilla.jpg',
        basePrice: 155
    },
    {
        id: 8,
        name: 'Латте Карамель',
        type: 'latte',
        description: 'Латте с сиропом карамели и карамельным соусом. Сладкий, но сбалансированный вкус. Карамель придает напитку глубину.',
        image: 'images/latte-caramel.jpg',
        basePrice: 160
    },
    {
        id: 9,
        name: 'Латте Медовый',
        type: 'latte',
        description: 'Нежный латте с добавлением натурального меда. Медовая сладость естественная и легкая. Полезный и вкусный выбор.',
        image: 'images/latte-honey.jpg',
        basePrice: 165
    },
    {
        id: 10,
        name: 'Классический Американо',
        type: 'americano',
        description: 'Два шота эспрессо, разведенные горячей водой. Крепкий, но не такой интенсивный как эспрессо. Идеален для любителей крепкого кофе.',
        image: 'images/americano-classic.jpg',
        basePrice: 120
    },
    {
        id: 11,
        name: 'Американо с молоком',
        type: 'americano',
        description: 'Крепкий американо с добавлением молока. Молоко смягчает горечь, создавая более мягкий профиль.',
        image: 'images/americano-milk.jpg',
        basePrice: 130
    },
    {
        id: 12,
        name: 'Долгий Американо',
        type: 'americano',
        description: 'Американо с большим количеством горячей воды. Более мягкий и менее крепкий напиток. Идеален для длительного потягивания.',
        image: 'images/americano-long.jpg',
        basePrice: 125
    },
    {
        id: 13,
        name: 'Эспрессо Одинарный',
        type: 'espresso',
        description: 'Один шот высокого качества эспрессо. Интенсивный, крепкий напиток с полным вкусовым профилем.',
        image: 'images/espresso-single.jpg',
        basePrice: 80
    },
    {
        id: 14,
        name: 'Эспрессо Двойной',
        type: 'espresso',
        description: 'Два шота эспрессо в одной чашке. Максимальная интенсивность и крепость. Для истинных ценителей кофе.',
        image: 'images/espresso-double.jpg',
        basePrice: 100
    },
    {
        id: 15,
        name: 'Эспрессо Макиато',
        type: 'espresso',
        description: 'Эспрессо с небольшой шапкой молочной пены. Молоко смягчает интенсивность, но кофе остается в центре вкусового профиля.',
        image: 'images/espresso-macchiato.jpg',
        basePrice: 110
    },
    {
        id: 16,
        name: 'Классический Флэт Уайт',
        type: 'flatwhite',
        description: 'Австралийский напиток с двумя шотами эспрессо и молоком с микропеной. Гладкая, кремовая текстура. Баланс между эспрессо и молоком.',
        image: 'images/flatwhite-classic.jpg',
        basePrice: 160
    },
    {
        id: 17,
        name: 'Флэт Уайт Интенсивный',
        type: 'flatwhite',
        description: 'Флэт Уайт с дополнительным шотом эспрессо. Более крепкий и интенсивный, чем классический.',
        image: 'images/flatwhite-intense.jpg',
        basePrice: 175
    },
    {
        id: 18,
        name: 'Флэт Уайт Медовый',
        type: 'flatwhite',
        description: 'Флэт Уайт с добавлением меда в молочную микропену. Нежная сладость меда дополняет кремовость молока.',
        image: 'images/flatwhite-honey.jpg',
        basePrice: 180
    }
];

const sizes = [
    { name: 'SHORT', label: 'Маленький', price: 0 },
    { name: 'TALL', label: 'Средний', price: 20 },
    { name: 'GRANDE', label: 'Большой', price: 40 },
    { name: 'VENTI', label: 'Очень большой', price: 60 }
];

const milks = [
    { name: 'REGULAR', label: 'Обычное молоко', price: 0 },
    { name: 'SOY', label: 'Соевое молоко', price: 30 },
    { name: 'ALMOND', label: 'Миндальное молоко', price: 40 },
    { name: 'OAT', label: 'Овсяное молоко', price: 35 }
];