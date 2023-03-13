// 1. array destructuring
const numbers = [42, 65]
// const x = numbers[0]
// const y = numbers[1];

const [x, y] = numbers;
console.log(x, y);

const employee = {
    ide: 'VS code',
    designation: 'Developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 55,
        weight: 67,
        address: 'Kumarkhali',
        drink: 'water',
        watch: {
            color: black,
            price: 500,
            brand: 'garmin'
        }
    }
}

const { machine, ide } = employee;
const { brand } = employee?.specification?.watch;