let messageInput = document.querySelector("#message-input");

let shiftInput = document.querySelector("#shift");

let messageOutput = document.querySelector("#message-output");

let message = messageInput.value;

messageInput.addEventListener("input", characterInput, false);

function characterInput(e) {
    message = e.target.value;
    message = message.toLowerCase();
    message = message.replace(/[^a-z]/, '');

    e.target.value = message;
    encode();
}

function encode(){
    let encodeMessage = "";
    let shift = shiftInput.value ? Number(shiftInput.value) : 0;
    console.log(shift);

    for (letter of message) {
        encodeMessage += shiftLetter(letter, shift);
    }
    console.log(encodeMessage);
    messageOutput.value = encodeMessage;
}

encode();

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