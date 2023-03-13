// 6. Object
// 3 ways to access property by name
const student = {
    name: 'Shakib Khan',
    age: 32,
    movies: ['King khan', 'Dhakat Mastan']
}

const myVariable = 'age';

console.log(student.age); //direct by property
console.log(student['age']) //access by property name string
console.log(student[myVariable]) //access via property name in a variable