// variables
let modal = document.getElementById("modalbox");
let rule = document.getElementById("rule");
let span = document.getElementsByClassName("close")[0];

// When open the modal Rules 
rule.onclick = function() {
    modal.style.display ="flex";
}

// When close the modal Rules
span.onclick = function() {
    modal.style.display = "none";
}




