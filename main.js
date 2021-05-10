
const container = document.getElementById("container");
let rows = 16;
let cols = 16;
let color = "black";



document.getElementById("red").addEventListener('click', () => {
    color = "red";
});
document.getElementById("orange").addEventListener('click', () => {
    color = "orange";
});
document.getElementById("yellow").addEventListener('click', () => {
    color = "yellow";
});
document.getElementById("green").addEventListener('click', () => {
    color = "green";
});
document.getElementById("blue").addEventListener('click', () => {
    color = "blue";

});document.getElementById("indigo").addEventListener('click', () => {
    color = "indigo";
});

document.getElementById("violet").addEventListener('click', () => {
    color = "violet";
});
// document.getElementById("orange").addEventListener('click', colorChange("orange"));
// document.getElementById("yellow").addEventListener('click', colorChange("yellow"));

function red() {
    color="red"
    cell.style.setProperty('--backgroundColor', color);
};
function orange() {
    color="orange"
    cell.style.setProperty('--backgroundColor', color);
}
// function yellow() {color="yellow"
// cell.style
// .setProperty('--backgroundColor', 'yellow');};
// function green() {color="green"
// cell.style
//     .setProperty('--backgroundColor', 'green');};
// function blue() {color="blue"
// cell.style
//     .setProperty('--backgroundColor', 'blue');};
// function indigo() {color="indigo"
// cell.style
//     .setProperty('--backgroundColor', 'indigo');};
// function violet() {color="violet"

// cell.style
//     .setProperty('--backgroundColor', 'violet');};



function changeRowsCols(){
 let rows = prompt("how many rows?");
 let cols = prompt("how many colomns?");
makeGrid(rows,cols);};
function makeGrid(rows, cols) {
   for(let j = 0; j <rows;j++){
       let rowContainer = document.createElement("div");
       rowContainer.classList.add("row-container");
       for (let i = 0; i < cols; i++) {
           let cell = document.createElement("div");
           cell.classList.add("cell");
           cell.innerText = ("|_|");
           cell.style.color = "white";
           rowContainer.appendChild(cell);
           //cell.addEventListener("keydown",  () =>{
            cell.addEventListener('mouseover', () => {
                cell.style.color = color;
                cell.style.backgroundColor = color;
                // cell.classList.add('moused-over')
            });
    //});
           
       };
       container.appendChild(rowContainer);
   };
  };
 

  


