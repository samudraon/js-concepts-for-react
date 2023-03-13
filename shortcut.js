let myVar = 5;
// check any truthy
if (myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0;
}

let myMoney = 50;
// you check negative or falsy anything
if (!myMoney) {

}


const money = 800;

let food1 = money > 100 ? 'biriyani' : 'cha biscuit';
// console.log(food1);

let drink = money > 100 && money > 100 ? 'coke' : 'filter';
// console.log(drink);

// number to string
const num1 = 52;
const numStr = num1 + '';
// console.log(numStr);

// string to number
const num2 = '53'
const result = +num1;
// console.log(result);

// 
let isActive = true;
const showUser = () => console.log('Display user');
const hideUser = () => console.log('hide user');
// isActive ? showUser() : hideUser();
// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right will be executed
isActive || hideUser();

// toggle boolean
isActive = !isActive;