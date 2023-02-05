//variables

const rows = 4;
const columns = 4;

let currentTile;
let otherTile;  

let turns = 0;

let imgOrder = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16"];
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

//TEST CODE TO RANDON IMG
//  imgOrder.reverse();
//  for (let i =0; i < imgOrder.length; i++) {
//  let j = Math.floor(Math.random() * imgOrder.length);

//         //swap
//         let tmp = imgOrder[i];
//         imgOrder[i] = imgOrder[j];
//         imgOrder[j] = tmp;
//   }
  // END OF CODE TO RANDON IMG EXAMPLE 1


// TEST CODE EXAMPLE 2

function randomize(values) {
    let index = values.length,
      randomIndex;
  
    // While there remain elements to shuffle.
    while (index != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * index);
      index--;
  
      // And swap it with the current element.
      [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
    }
  
    return values;
  }
  
  randomize(imgOrder);

// END OF CODE EXAMPLE 2





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
        if (!otherTile.src.includes("16.jpg")) {   //check if swap with blank tile
            return;
        }
         //get the coordenate of the image and split
        let currentCoords = currentTile.id.split("-"); 
        let cord = parseInt(currentCoords[0]);  
        let cord1 = parseInt(currentCoords[1]); 
    
        let otherCoords = otherTile.id.split("-");
        let othcord = parseInt(otherCoords[0]);   
        let othcord1 = parseInt(otherCoords[1]); 
    
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
