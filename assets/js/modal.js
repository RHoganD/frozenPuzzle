// variables
let modal = document.getElementById("modalbox");
let rule = document.getElementById("rule");
let span = document.getElementsByClassName("close")[0];


// When open the modal Rules 
rule.onclick = function() { 
modal.style.display = "flex";
}

// When close the modal Rules
span.onclick = function() {
modal.style.display = "none";
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


