document.addEventListener('click', change)
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
var btn = document.querySelector("#btn")
var color = document.querySelector(".color")

function generaterandomnumber() {
    return Math.floor(Math.random() * hex.length)
}


function change() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++)
        hexColor += hex[generaterandomnumber()];

    document.querySelector(".color").innerHTML = hexColor;
    document.body.style.backgroundColor = hexColor;



}