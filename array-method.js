const products = [
    { name: 'Laptop', price: 10003, brand: 'lenovo', color: 'silver' },
    { name: 'smartphone', price: 2300, brand: 'iphone', color: 'black' },
    { name: 'watch', price: 5300, brand: 'casio', color: 'golden' },
    { name: 'sunglass', price: 4300, brand: 'ray', color: 'yellow' },
    { name: 'phone', price: 3300, brand: 'oneplus', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' },
]
/* Map method */
const brand = products.map(product => product.brand);
const price = products.map(product => product.price);
// console.log(price)

/* For each method */
// products.forEach(product => console.log(product));
// products.forEach(product => console.log(product.color));

/* Filter method */
const cheap = products.filter(product => product.price < 5000);
// console.log(cheap);

const specificName = products.filter(product => product.name.includes('s'));
// console.log(specificName);

/* Find method */
const special = products.find(product => product.name.includes('s'));
console.log(special);