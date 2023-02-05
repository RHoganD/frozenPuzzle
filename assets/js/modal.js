
let modal = document.getElementById("modalbox");
let btn = document.getElementById("rule");
let span = document.getElementsByClassName("close")[0];


// When clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "flex";
}

// When  clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}


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
    ' <H1>Completed Puzzle Image.</H1>' + ' Click the button below to close the window.<br />' +
    '<INPUT TYPE="button" VALUE="OK"onClick="window.close();"></FORM></BODY></HTML>');
}


