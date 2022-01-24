let messageInput = document.querySelector("#message-input");

let shiftInput = document.querySelector("#shift");

let messageOutput = document.querySelector("#message-output");

let message = messageInput.value;

let encodeBtn = document.querySelector("#encode");

let decodeBtn = document.querySelector("#decode");

messageInput.addEventListener("input", characterInput, false);

messageOutput.addEventListener("input", characterInput, false);

function characterInput(e) {
    message = e.target.value;
    message = message.toLowerCase();
    message = message.replace(/[^a-z]/, '');

    e.target.value = message;
    encode();
    decode();
}

function encode() {
    let encodeMessage = "";
    let shift = shiftInput.value ? Number(shiftInput.value) : 0;
    console.log(shift);

    if (encodeBtn.checked = true) {
        for (letter of message) {
            encodeMessage += shiftLetter(letter, shift);
        }
        console.log(encodeMessage);
        messageOutput.value = encodeMessage;
    }


}

encode();

function decode() {
    let decodeMessage = "";
    let shift = shiftInput.value ? Number(shiftInput.value) : 0;
    console.log(shift);

    if (decodeBtn.checked = true) {
        for (letter of message) {
            decodeMessage -= shiftLetter(letter, shift);
        }
        console.log(decodeMessage);
        messageInput.value = decodeMessage;
    }

}

decode();


function shiftLetter(letter, shift) {

    let newLetter = "";
    
    let letterCode = letter.charCodeAt(0);
    
    let newLetterCode = letterCode + (shift % 26);

    if (newLetterCode < 97) {

        newLetterCode += 26;

    } else if (newLetterCode > 122) {

        newLetterCode -= 26;
    }

    newLetter = String.fromCharCode(newLetterCode);

    return newLetter;
}