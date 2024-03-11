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
        'https://onedrive.live.com/?cid=238013CBA7EA1909&id=238013CBA7EA1909%21s9f169b0d831d4418be3bf09ac20a7712&parId=238013CBA7EA1909%21s6e7aaa7a5c63487691d6d7b650377b8b&o=OneUp', {
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
            console.log(deboAmount);
        }
    );
}

getDeboAmount();