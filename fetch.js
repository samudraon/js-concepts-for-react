// JSON=> stringify, parse
const student = {
    name: 'Shakib Khan',
    age: 32,
    movies: ['King khan', 'Dhakat Mastan']
}

const studentJSON = JSON.stringify(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// 2. fetch
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));

// keys, values
const keys = Object.keys(student);
const values = Object.values(student);

// for
const numbers = [334, 31, 61, 94];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of- on array like object
// loop on an object using for in

const products = [
    { name: 'Laptop', price: 10003, brand: 'lenovo', color: 'silver' },
    { name: 'smartphone', price: 2300, brand: 'iphone', color: 'black' },
    { name: 'watch', price: 5300, brand: 'casio', color: 'golden' },
    { name: 'sunglass', price: 4300, brand: 'ray', color: 'yellow' },
    { name: 'phone', price: 3300, brand: 'oneplus', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' },
]

const newProduct = { name: 'webcam', price: 700, brand: 'Lal' };

// copy products array and then add newProduct
const newProducts = [...products, newProduct];

// create a new array without one specific item
const remaining = products.filter(p => p.name !== 'phone');