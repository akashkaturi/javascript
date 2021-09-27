// let a=prompt(`What's your age?`);
// if(a>18){
//     document.body.innerHTML=`You are eligible to drive`;
// }
// else{
//     document.body.innerHTML=`You are not eligible`;
//     a=confirm('You should exit from the website')
// }
// let k=window.document;
// h=window.innerHeight;
// w=window.innerWidth;
// x=scrollX;
// y=scrollY;
// console.log(x,y);
// let b=document.all;
// Array.from(b).forEach(function (element) {
//     console.log(element);
// })
// //document.querySelectorAll(".child").style.color="red";
// let a = document.scripts;

// Array.from(a).forEach(function (element) {
// 	document.write(element.text);
// });
// console.log(`Exercise 1 Solution`);

let a = document.links[0].href;
console.log(a)
// let myText = 'harry';

// Array.from(a).forEach(function (element) {
// 	if (String(element).includes(myText)) {
// 		console.log(element);
// 	}1
// });

let elems=document.getElementsByClassName('child');
console.log(elems[0])
console.log(elems); 
Array.from(elems).forEach(e => {
    console.log(e);
    e.style.color='red';
})

a=[1,2,3,4,5]
// a.forEach(e => {
//     e=e+2;
//     console.log(e);
// })
a.forEach(sum)

function sum(e) {
    e=e+2
    console.log(e)
}