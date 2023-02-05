//variables

const rows = 3;
const columns = 5;

let currentTile;
let otherTile;  

let turns = 0;

let imgOrder = ["02", "07", "03", "04", "05", "06", "08", "01", "14", "10", "11", "12", "09", "13", "15"];

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


     // Validate if complete puzzle

     let completeimgOrder = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15"];  
      if (imgOrder === completeimgOrder.sort)  {
        
      }
    
      



        
            






    
// When click to reveal puzzle img
function openWindow(){
    if (document.getElementById) {
       w = screen.availWidth;
       h = screen.availHeight;
    }  
    
    let popW = 540, popH = 540;
    
    let leftPos = (w-popW)/3;
    let topPos = (h-popH)/3;
    
    gsWindow = window.open('','popup','width=' + popW + ',height=' + popH + 
                             ',top=' + topPos + ',left=' + leftPos + ', ');
    
    gsWindow.document.write 
        ('<HTML><HEAD><TITLE>Reveal Puzzle</TITLE></HEAD><BODY><FORM  NAME="form1">' +
        '<img src="./assets/images/elsa_and_anna_frozen.jpg" alt="frozen" class="responsive"/>'+
        ' <h1>Completed Puzzle Image.</h1>' + ' Click the button below or top to close the window.<br />' +
        '<INPUT TYPE="button" VALUE="OK"onClick="window.close();"></FORM></BODY></HTML>');
    }
    