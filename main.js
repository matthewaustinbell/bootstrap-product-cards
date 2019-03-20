const products = [{
        title: 'product1',
        description: 'blah blah blah',
        ImageURL: 'https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg',
        size: '4" x 4"',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/01/2016',
    },
    {
        title: 'product2',
        description: 'blah blah blah',
        ImageURL: 'https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg',
        size: '4" x 4"',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/01/2016',
    },
    {
        title: 'product3',
        description: 'blah blah blah',
        ImageURL: 'https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg',
        size: '4" x 4"',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/01/2016',
    },
    {
        title: 'product4',
        description: 'blah blah blah',
        ImageURL: 'https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg',
        size: '4" x 4"',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/01/2016',
    },
    {
        title: 'product5',
        description: 'blah blah blah',
        ImageURL: 'https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg',
        size: '4" x 4"',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/01/2016',
    },
];


const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;

};

const cardBuilder = (productsArray) => {
    let domString = '';
    domString += `<div class="container">`;
    domString += `<div class="row">`;
    productsArray.forEach((product) => {
        domString += `<h3 class="col-4">${product.title}</h3>`

    })
    domString += `</div>`;
    printToDom('some-cards', domString);

};

const init = () => {
    cardBuilder(products);
};

init();