//**CALCULATOR**

const display = document.getElementById("display");

function appendToDisplay(input){
    display.textContent += input;
}

function calculate(){
    try{
        display.textContent =eval(display.textContent);
    }
    catch(error){
        display.textContent = "Error"
    }
}

function clearDisplay(){
    display.textContent = "0"
}

document.addEventListener('keydown', (event)=>{
    console.log(event)
});