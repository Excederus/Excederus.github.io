var doc = document.querySelector(':root');
let ominAmount = 0;
var ominAmountString = "0";

var intervalId = window.setInterval(function(){
    getominAmount();
    ominAmountString = ominAmount.toString();

    doc.style.setProperty('--ominAmountPercentage', ominAmountString + "%");
    document.getElementById("omin-number").textContent = ominAmountString;
}, 1000);

function getominAmount() {
    fetch(
        'omin.txt', {
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
            ominAmount = text;
        }
    );
}