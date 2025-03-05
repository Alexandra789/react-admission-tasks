const root = document.querySelector('.button-container');

function PoemButton(buttonCaption, alertText) {
    this.buttonCaption = buttonCaption;
    this.alertText = alertText;
}

PoemButton.prototype.buttonPressed = function () {
    alert(this.alertText);
}

PoemButton.prototype.buttonCreate = function () {
    const button = document.createElement('button');
    button.classList.add('btn');
    button.textContent = this.buttonCaption;
    button.onclick = () => this.buttonPressed();
    root.appendChild(button);
}

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://fe.it-academy.by/Examples/test_JSE.json");
xhr.send();
xhr.onload = function () {
    if (xhr.status != 200) {
        console.error(`Error loading file, ${xhr.status}: ${xhr.statusText}`);
    } else {
        let responseArray = JSON.parse(xhr.response);;
        for (let i = 0; i < responseArray.length; i++) {
            new PoemButton(responseArray[i].buttonCaption, responseArray[i].alertText).buttonCreate();
        }
    }
};

