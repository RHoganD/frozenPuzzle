//variables

const rows = 3;
const columns = 5;

let currentTile;
let otherTile;  

let turns = 0;

let imgOrder = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15"];
// let imgOrder = ["01", "02", "04", "05", "03", "16", "06", "07", "08", "10", "09", "11", "12", "14", "13", "15" ]; //name of the pictures

// Populate image in the board
window.onload = function() {
    for (let r=0; r < rows; r++) {
        for (let c=0; c < columns; c++) {

            //<img id="0-0" src="1.jpg">
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "./assets/images/" + imgOrder.shift() + ".jpg"; 

             //EventListener Drag Funcionality
             tile.addEventListener("dragstart", dragStart);  
             tile.addEventListener("dragover", dragOver);    
             tile.addEventListener("dragenter", dragEnter);  
             tile.addEventListener("dragleave", dragLeave);  
             tile.addEventListener("drop", dragDrop);        
             tile.addEventListener("dragend", dragEnd);      

            document.getElementById("board").append(tile);
    }
}

}

//functions

function dragStart() {
    currentTile = this; //this refers to the img tile being dragged
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this; //this refers to the img tile being dropped on
}


function dragEnd() {
        if (!otherTile.src.includes("01.jpg")) {   //check if swap with blank tile
            return;
        }
         //get the coordenate of the image and split
        let currentCoords = currentTile.id.split("-"); //ex) "0-0" -> ["0", "0"]
        let cord = parseInt(currentCoords[0]);  //r
        let cord1 = parseInt(currentCoords[1]); //c
    
        let otherCoords = otherTile.id.split("-");
        let othcord = parseInt(otherCoords[0]);   //r2
        let othcord1 = parseInt(otherCoords[1]); //c2
    
         //cheking for adjecency
        let moveLeft = cord == othcord && othcord1 == cord1-1;
        let moveRight = cord == othcord && othcord1 == cord1+1;
    
        let moveUp = cord1 == othcord1 && othcord == cord-1;
        let moveDown = cord1 == othcord1 && othcord == cord+1;
    
        let isAdjacent = moveLeft || moveRight || moveUp || moveDown;
    
    
       if (isAdjacent){
            let currentImg = currentTile.src; //swaping image
            let otherImg = otherTile.src;
    
            currentTile.src = otherImg;
            otherTile.src = currentImg;
    
            turns +=1;
            document.getElementById("turns").innerText = turns;
       }
    }

    // game board Section
// let board = document.querySelector("#board");
// let title = document.querySelector("#title");
// let mov = document.querySelector(".mov");

// //board seciton
// let menu = document.querySelector(".header");
// let menu2 =document.querySelector(".header")

// //what happen when 'menu' Button will Click
// menu.addEventListener("click" , () => {
// menu.style.display = "block";
// title.style.display = "none";
// board.style.display = "none";
// mov.style.display = "none";



