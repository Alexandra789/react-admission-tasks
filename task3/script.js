const root = document.querySelector('.button-container');

class PoemButton {
    constructor(buttonCaption, alertText) {
        this.buttonCaption = buttonCaption;
        this.alertText = alertText;
    }

    buttonPressed() {
        alert(this.alertText);
    }

    buttonCreate() {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.textContent = this.buttonCaption;
        button.onclick = () => this.buttonPressed();
        root.appendChild(button);
    }
}

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://fe.it-academy.by/Examples/test_JSE.json");
xhr.send();
xhr.onload = function () {
    if (xhr.status !== 200) {
        console.error(`Error loading file, ${xhr.status}: ${xhr.statusText}`);
    } else {
        const responseArray = JSON.parse(xhr.response);
        responseArray.forEach(item => {
            new PoemButton(item.buttonCaption, item.alertText).buttonCreate();
        });
    }
};