// Task 1/2
const input = [
    {name: 'Ivan', strength: 90000, sex: 'm'},
    {name: 'Nazar', strength: 100000, sex: 'm'},
    {name: 'Alina', strength: 136, sex: 'f'}
];

function stronger(obj) {
    return obj.strength >= 500;
}

function isFemale(obj) {
    return obj.sex == 'f';
}

function myFilter(data, f) {
    let output = [];
    for (obj of data) {
        if(f(obj)) {
            let newObj = obj;
            output.push(newObj);
        }
    }
    return output;
}

let arr = myFilter(input, stronger);
let arr2 = myFilter(input, isFemale);

console.log(arr);
console.log(arr2);


// Task 3
var name = 'nazar kovtun';

function makeFirstLetterUpper(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function upper(string, func) {
    let output = '';
    let words = string.split(' ');
    for (let word of words) {
        output += func(word) + ' ';
    }
    return output;
}

console.log( upper(name, makeFirstLetterUpper) );


// Task 4. Use only one line create array [1,2,3,4,5]
function createArrNumbers(num) {
    return new Array(num).fill().map(() => num--).reverse();
}
console.log( createArrNumbers(15) );


// Task 5
let person  = {
    name: 'nazar-kovtun'
};

function toUpper(obj) {
    let newStr = obj.name.replace('-', ' ');
    let result = newStr.toUpperCase();
    return result;
}
console.log( toUpper(person) );
