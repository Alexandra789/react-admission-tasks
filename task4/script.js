const terminalBody = document.querySelector('.terminal__body');

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://fe.it-academy.by/Examples/test_JSE.txt");
xhr.send();
xhr.onload = function () {
    if (xhr.status !== 200) {
        console.error(`Error loading file, ${xhr.status}: ${xhr.statusText}`);
    } else {
        const text = xhr.response;

        const regex = /(['"])(.*?)\1/g;
        const matches = text.match(regex);

        if (matches) {
            matches.forEach(match => {
                terminalBody.innerHTML += `<p>${match}</p>`;
                console.log(match);
            });
        }
    }
};