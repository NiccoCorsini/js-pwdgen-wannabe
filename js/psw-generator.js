// PASSWORD GENERATOR 0.1.0

/*
1 Ask name [X]
2 Ask surname [X]
3 Ask favourite color [X]
4 Generate password (insicure) [X]
5 Print a success state message [X]
6 Copy to clipboard password [X]
*/

function startPrompt(){
    
var userName = prompt("Whats' your name?");

var userSurname = prompt("Whats's your surname?");

var favouriteColor = prompt("What's your favourite colour?");

var success = "Success! Your password has been generated";

// SUCCESS MESSAGE
document.getElementById("comment").innerHTML = success;

// PASSWORD GENERATED
document.getElementById("psw").value = (userName + userSurname + favouriteColor);
}

// console.log(userName + userSurname + favouriteColor);

// COPY TO CLIPBOARD
function toClipboard(){

    var copyText = document.getElementById("psw");

    copyText.select();

    copyText.setSelectionRange(0, 99999);

    document.execCommand("copy");

    alert("Copied to the clipboard:" + " " + copyText.value);

}