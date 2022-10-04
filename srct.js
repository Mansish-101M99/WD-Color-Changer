
const body = document.querySelector("body");
const bgCol = ["red", "yellow", "green", "blue", "orange", "pink", "purple", "violet"];

function changeColor() {
    let num = Math.random();
    console.log("A random number ", num);

    let ln = bgCol.length;
    console.log("Colors list length ", ln);

    let idx = num * ln;
    console.log("Multiplied a random number with the length of colors list ", idx);
    
    let intIdx = parseInt(idx);
    console.log("Rounded the decimal value to integer ", intIdx);
    
    body.style.backgroundColor = bgCol[intIdx];
}

const textCol = ["white","red", "yellow", "green", "blue", "orange", "pink", "purple", "violet", "black"];

function changeTextColor() {
    const text = document.getElementById("text");
    const colIdx = parseInt(Math.random() * textCol.length);
    console.log("Multiplied a random number with the length of colors list and rounded it ", colIdx);
    text.style.color = textCol[colIdx];
}