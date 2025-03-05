const terminalBody = document.querySelector('.terminal__body');

function logMessage(firstLetter, lastLetter) {
    const firstLetterCode = firstLetter.charCodeAt(0);
    const lastLetterCode = lastLetter.charCodeAt(0) + 1;
    let currentCode = firstLetterCode;

    function logCharactersWithDelay() {
        if (currentCode < lastLetterCode) {
            console.log(String.fromCharCode(currentCode));
            terminalBody.innerHTML += `<p>${String.fromCharCode(currentCode)}</p>`;
            currentCode++;
            setTimeout(() => logCharactersWithDelay(), 1000);
        }

    }
    logCharactersWithDelay();
}

logMessage('A', 'F');