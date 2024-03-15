var doc = document.querySelector(':root');
let turoAmount = 0;
var turoAmountString = "0";

var intervalId = window.setInterval(function(){
    getturoAmount();
    turoAmountString = turoAmount.toString();

    doc.style.setProperty('--turoAmountPercentage', turoAmountString + "%");
    document.getElementById("turo-number").textContent = turoAmountString;
}, 1000);

function getturoAmount() {
    fetch(
        'turo.txt', {
            method: "GET",
            mode: "no-cors",
            headers: {
                "Content-Type": "text/plain"
            }
        }
    ).then(
        (response) => response.text()
    ).then(
        (text) => {
            turoAmount = text;
        }
    );
}