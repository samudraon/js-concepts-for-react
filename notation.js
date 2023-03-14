const person = {
    name: 'Lal nil holud',
    profession: 'Traffic Surgeon',
    age: 48,
    address: 'Shahabagh',
    24: 'Summer',
    'son-name': 'Raja'
};
// dot notation
const prof1 = person.profession;

// bracket notation
const prof2 = person['profession']
const pName = 'profession';
const prof3 = person[pName];
// console.log(prof3)

const season = person[24];
console.log(season);

const son = person['son-name'];
console.log(son);