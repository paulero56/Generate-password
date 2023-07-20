// Declare variables
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
let renderPass = document.getElementById("render-pass")
let buttonEl = document.getElementById("button-el")

// Generate random pass thru the Math.floor function
function generateRandomPass() {
    let randomCharacter = Math.floor(Math.random() * characters.length)
    return  characters[randomCharacter]
}

// Loop counter - random characters - array
function characterCounter() {
    for (let i = 0; i < 11; i++) {  
            renderPass.textContent += generateRandomPass()
        }
    }
    // Event listener to render new password and run characterCounter function,
buttonEl.addEventListener("click", function(){
    renderPass.textContent = " "
    return characterCounter()
})


