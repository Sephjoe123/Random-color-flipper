let button = document.getElementsByClassName("btn")[0]
let hexNames = document.getElementsByClassName("color-names")[0]
let result = "";
var hexValue;

let letters = "ABCDEF";
let numbers = "0123456789";

function randomLetters(){
return letters[Math.floor(Math.random() * letters.length)]
}

function randomNumbers(){
 return  numbers[Math.floor(Math.random() * numbers.length)]
}

let colorResult;


function randomColor(){

    let checkValue = Math.random()
    if(checkValue < 0.333){
        return randomLetters() + randomNumbers() + randomLetters() + randomNumbers() + randomLetters() + randomNumbers();
    }
    else if(checkValue < 0.666){
      return  randomNumbers() + randomLetters() + randomNumbers() + randomLetters() + randomNumbers() + randomLetters();
    }
    else if(checkValue > 0.666){
        return randomLetters() + randomLetters() + randomNumbers() + randomLetters() + randomNumbers() + randomNumbers();
    }
    }


button.addEventListener("click", () =>{
  let result;
  result =  randomColor();
  let finalResult =  `#${result}`;
  hexNames.style.display = "inline";
  document.body.style.backgroundColor = finalResult;
  hexNames.innerText = finalResult;
 })
   
