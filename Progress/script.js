var doc = document.querySelector(':root');

var jsDeboAmount = localStorage.getItem("lsDeboAmount");
if(jsDeboAmount == null) {
    jsDeboAmount = 0;
}
var jsDeboAmountString = jsDeboAmount.toString();
doc.style.setProperty('--deboamountpercentage', jsDeboAmountString + "%");

document.getElementById("debo-number").textContent = jsDeboAmountString;

function incDebo() {
    jsDeboAmount++;
    
    jsDeboAmountString = jsDeboAmount.toString();
    localStorage.setItem("lsDeboAmount", jsDeboAmount);
    doc.style.setProperty('--deboamountpercentage', jsDeboAmountString + "%");

    document.getElementById("debo-number").textContent = jsDeboAmountString;
}
function decDebo() {
    jsDeboAmount--;
    
    jsDeboAmountString = jsDeboAmount.toString();
    localStorage.setItem("lsDeboAmount", jsDeboAmount);
    doc.style.setProperty('--deboamountpercentage', jsDeboAmountString + "%");

    document.getElementById("debo-number").textContent = jsDeboAmountString;
}
function resDebo() {
    jsDeboAmount = 0;
    
    jsDeboAmountString = jsDeboAmount.toString();
    localStorage.setItem("lsDeboAmount", jsDeboAmount);
    doc.style.setProperty('--deboamountpercentage', jsDeboAmountString + "%");

    document.getElementById("debo-number").textContent = jsDeboAmountString;
}