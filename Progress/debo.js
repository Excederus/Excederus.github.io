var doc = document.querySelector(':root');
let deboAmount = 0;
var deboAmountString = "0";

var intervalId = window.setInterval(function(){
    getDeboAmount();
    deboAmountString = deboAmount.toString();

    doc.style.setProperty('--deboAmountPercentage', deboAmountString + "%");
    document.getElementById("debo-number").textContent = deboAmountString;
}, 5000);

function getDeboAmount() {
    
    fetch(
        'debo.txt', {
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
            deboAmount = text;
        }
    );
}

getDeboAmount();