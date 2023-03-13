const numbers = [89, 35, 97, 12];
const student = {
    name: 'Shakib Khan',
    age: 32,
    movies: ['King khan', 'Dhakat Mastan']
}

// 1.template string
const about = `My name is ${student.name} age of${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`
console.log(about);

// 2. arrow function
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 === 0;
const addThree = (x, y, z) => {
    x + y + z;
}

