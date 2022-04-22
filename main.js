alert('Hello World!')
console.error("This is an error")
console.warn('This is a warning')
// var, let, const

const name = 'Ruhi'
const age = 26
console.log(typeof age)
console.log(typeof name)

//concatination
//console.log('My name is '+ name +' and I am '+ age);

const hello = ('My name is ' + name + ' and I am ' + age);
console.log(hello)

const s = "Hello World";
console.log(s.length);

console.log(s.toLowerCase());
console.log(s.toUpperCase());
console.log(s.toUpperCase());
console.log(s.substring(0, 5));

//Arrays
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ['apples', 'orange', 'mango', 'coconut'];
fruits[4] = 'banana';
console.log(fruits[1]);
fruits.push('kiwi');
fruits.unshift('starwberry');
fruits.pop();
console.log(Array.isArray('hello'));
console.log(fruits.indexOf('coconut'));
console.log(fruits);

//object

const todos = [
    {
        id: 1,
        text: 'take out trash',
        iscompleted: true,
    },

    {
        id: 2,
        text: 'Meeting with boss',
        iscompleted: true,
    },

    {
        id: 3,
        text: 'Doctor appointment',
        iscompleted: false,
    }
];
const todoJson = JSON.stringify(todos);
console.log(todoJson);

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

const x = 10;
const color = x > 10 ? 'red' : 'blue';
console.log(color);

switch (color) {
    case 'red':
        console.log('colr is red');
        break;
    case 'blue':
        console.log('color id blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}

//function

function addNum(num1, num2) {
    console.log(num1 + num2);

}
addNum(5, 2);

function addNums(num1, num2) {
    return (num1 + num2)
}
console.log(addNums(5, 5));


const addNumber = (num3 = 2, num4 = 4) => { return num3 + num4 };
console.log(addNumber());


const addNumber1 = (num5 = 6,) => num5 + 4;
console.log(addNumber1());

//object oriented

// function person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = dob;
//     this.dob = new Date(dob);
// /* this.getBirthYear = function () {
//      return this.dob.getFullYear();
//  }
//  this.getFullName = function () {
//      return `my name is ${this.firstName} ${this.lastName}`;
//  }*/


// person.prototype.getFullYear = function () {
//     return this.getFullYear();
// }
// const person1 = new person('ruhi', 'tamanna', '1-2-2022');
// const person2 = new person('ashik', 'mahmud', '1-4-2022');
// console.log(person1);
// console.log(person2);
// console.log(person2.lastName);
// //console.log(person2.dob.getFullYear());
// //console.log(person1.getBirthYear());
// //console.log(person1.getFullName());
// console.log(person1.dob.getFullYear());


class person {

    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getbirthYear() {
        return this.dob.getFullYear();
    }
    getfullName() {
        return `${this.firstName} ${this.lastName}`;
    }



}
const person1 = new person('ruhi', 'tamanna', '1-2-2022');
const person2 = new person('ashik', 'mahmud', '1-4-2022');

console.log(person1.dob.getFullYear());
console.log(person2.getfullName());









