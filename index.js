const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const numbers = "0123456789".split("");
const symbols = "~`!@#$%^&*()_-+={[}],|:;<>.?/".split("");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");

// Helper function: generate a random number within array length
function randomNumber(array) {
    return Math.floor(Math.random() * array.length)
}

function getCharacterSet() {
    let charset = [...letters]  // always include letters

    if (document.getElementById("include-numbers").checked) {
        charset = charset.concat(numbers)
    }

    if (document.getElementById("include-symbols").checked) {
        charset = charset.concat(symbols)
    }

    return charset
}

// Helper function: generate a password of specified length
function getRandomPassword () {
    let length = Number(document.getElementById("password-length").value)
    let password = ""
    let charset = getCharacterSet()
    for (let i=0; i<length; i++) {
        password += charset[randomNumber(charset)]}
        return password
}

// Select the password buttons
let passwordOne = document.querySelector(".btn-password.first")
let passwordTwo = document.querySelector(".btn-password.second")


// Generate and display new passwords
function generatePasswords () {
    passwordOne.textContent = getRandomPassword()
    passwordTwo.textContent = getRandomPassword()
}

function copyPassword(button) {
    navigator.clipboard.writeText(button.textContent);
    alert("Password copied!");
}
    

