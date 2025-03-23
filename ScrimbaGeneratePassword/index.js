const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const alphabetNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const alphabetSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

const numbersSymbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];


let passEl1 = document.getElementById("firstPassword");
let passEl2 = document.getElementById("secondPassword");

function generatePass(){
    let alphabetEl = document.getElementById("alphabetBox").checked;
    let numberEl = document.getElementById("numberBox").checked;
    let symbolEl = document.getElementById("symbolBox").checked;
 
    if (alphabetEl && numberEl && symbolEl){
        let passwordOne = [];
        let passwordTwo = [];
        
        for (let i = 0; i < 15; i++){
            passwordOne.push(characters[Math.floor(Math.random() * characters.length)]);
            passwordTwo.push(characters[Math.floor(Math.random() * characters.length)]);
        }
        passEl1.textContent = passwordOne.join("");
        passEl2.textContent = passwordTwo.join("");
    } else if (alphabetEl && numberEl){
        let passwordOne = [];
        let passwordTwo = [];
        
        for (let i = 0; i < 15; i++){
            passwordOne.push(alphabetNumbers[Math.floor(Math.random() * alphabetNumbers.length)]);
            passwordTwo.push(alphabetNumbers[Math.floor(Math.random() * alphabetNumbers.length)]);
        }
        passEl1.textContent = passwordOne.join("");
        passEl2.textContent = passwordTwo.join("");
    } else if (alphabetEl && symbolEl){
        let passwordOne = [];
        let passwordTwo = [];
        
        for (let i = 0; i < 15; i++){
            passwordOne.push(alphabetSymbols[Math.floor(Math.random() * alphabetSymbols.length)]);
            passwordTwo.push(alphabetSymbols[Math.floor(Math.random() * alphabetSymbols.length)]);
        }
        passEl1.textContent = passwordOne.join("");
        passEl2.textContent = passwordTwo.join("");
    } else if (numberEl && symbolEl){
        let passwordOne = [];
        let passwordTwo = [];
        
        for (let i = 0; i < 15; i++){
            passwordOne.push(numbersSymbols[Math.floor(Math.random() * numbersSymbols.length)]);
            passwordTwo.push(numbersSymbols[Math.floor(Math.random() * numbersSymbols.length)]);
        }
        passEl1.textContent = passwordOne.join("");
        passEl2.textContent = passwordTwo.join("");
    } else if (alphabetEl){
        let passwordOne = [];
        let passwordTwo = [];
        
        for (let i = 0; i < 15; i++){
            passwordOne.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
            passwordTwo.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
        }
        passEl1.textContent = passwordOne.join("");
        passEl2.textContent = passwordTwo.join("");
    } else if (numberEl){
        let passwordOne = [];
        let passwordTwo = [];
        
        for (let i = 0; i < 15; i++){
            passwordOne.push(numbers[Math.floor(Math.random() * numbers.length)]);
            passwordTwo.push(numbers[Math.floor(Math.random() * numbers.length)]);
        }
        passEl1.textContent = passwordOne.join("");
        passEl2.textContent = passwordTwo.join("");
    }  else if (symbolEl){
        let passwordOne = [];
        let passwordTwo = [];
        
        for (let i = 0; i < 15; i++){
            passwordOne.push(symbols[Math.floor(Math.random() * symbols.length)]);
            passwordTwo.push(symbols[Math.floor(Math.random() * symbols.length)]);
        }
        passEl1.textContent = passwordOne.join("");
        passEl2.textContent = passwordTwo.join("");
    }
}

function copy1() {
    let copyText = document.getElementById("firstPassword").textContent;
    navigator.clipboard.writeText(copyText);
    alert("Password Copied!");
}

function copy2() {
    let copyText = document.getElementById("secondPassword").textContent;
    navigator.clipboard.writeText(copyText);
    alert("Password Copied!");
}