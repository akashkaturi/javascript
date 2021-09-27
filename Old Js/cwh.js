// console.time('Your code took')
// console.log("Ak codes");
// console.table({'name':'akash','marks':200});
// console.assert(150<100,'is not possible')
// console.timeEnd('Your code took');

// const name='akash'
// var marks=34
// const name2=`kirs`
// const marks2=`fail`
// marks=0
// console.log(`${name} got ${marks} marks`)

// const ownersName='boss kutty' // cannot change after assigning
//use of const and let has increased in the modern javascript
// ownersName[3] == 't';
// console.log(ownersName)
/*
let will be used in a block
*/
// const arr=[1,2,3,4,5,6,7,8,9]
// arr.push(54222222223333225)
// console.log(arr)

/**
 * variables names are
 * camelCase
 * kebab-case
 * snake_case
 * PascalCase
 */

/**datatypes in js
 * Primitive datatypes -strings, numbers, boolean , null, undefined, symbol
 * Reference datatypes - arrays, object literals, functions, dates.
 *
 */

let a = 'akash';
// console.log(typeof a);
//object literal
let ar = [1, 2, 3, 4, 'string', 'hello'];
// console.log(typeof ar);
// console.log(ar);
let b = null;
// console.log(typeof b);
let stMarks = {
	akash: 95,
	kirs: 92,
	Sahika: 90,
};

//Strings
// console.log(stMarks);
// console.log(a);
// console.log(a.indexOf('k'));
// console.log(a.lastIndexOf('a'));
// console.log(a.charAt(2));
// console.log(a.endsWith('sh'));
// console.log(a.substring(0, 3));
// console.log(a.slice(-4));
// console.log(a.split(''));
// console.log(a.replace('k', 'a'));
k = Object.keys(stMarks);
myHTML = `<h1> ${k[0]} got ${stMarks[k[0]]} marks in the exam while ${k[1]} got ${stMarks[k[1]]} </h1>`;
// document.body.innerHTML = myHTML;

//arrays
let arr = new Array(1, 2, 3, 4, 'akash');
console.log(arr);

console.log(arr.length);
console.log(Array.isArray(arr));
arr[0] = 'akash';
console.log(arr);
console.log(arr.lastIndexOf('akash'));
arr.push(10); // at the end of array
arr.unshift(20); // at the begining of the array
console.log(arr);
k = arr.pop(); // to remove the last element
j = arr.shift(); // to remove the first element

console.log(k, j);

arr.splice(1, 3); // will remove elements from 1 to 3, it will change the array
arr.reverse(); //reverse an array..it will change the array
let ko = [9, 8, 7, 6, 5];
arr = arr.concat(ko);
console.log(arr);

/**
 * if-else
 * == checks only the value
 * === checks both type and value
 * != checks the value
 * !==checks both type and value
 * || or operator
 * && and operator
 *condition ? operation 1 : operation 2
 */
let no = 20;
no > 18 ? console.log('Eligible for license') : console.log('Not eligible for license');

/**
 * While Loops and Do while loops
 *
 *
 */
for (let i = 0; i < arr.length; i++) {
	const j = arr[i];
	console.log(j)
}

/**
 * Functions 
 * 
 */
function greet(name,friendName){
	let wishes = `${name}, wishes you a very happy birthday ${friendName}`;
	console.log(wishes);
}
greet('Akash','Kirs')
const friends = {
	name:'Kirs',
	name2:'Sahika',
	relation: function rel(a,b) {
		console.log(`${a} and ${b} are my friends`)
	}
}
console.log(friends.relation(friends.name,friends.name2))
arr.forEach(function (element,index) {
	console.log(index,element)
})