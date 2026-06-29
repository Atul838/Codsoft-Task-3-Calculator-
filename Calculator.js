const display = document.getElementById("display");
const historyList = document.getElementById("historyList");

function appendValue(value){
display.value += value;
}

function clearDisplay(){
display.value = "";
}

function backspace(){
display.value = display.value.slice(0,-1);
}

function calculate(){
try{
let expression = display.value;
let result = eval(expression);

let li = document.createElement("li");
li.textContent = expression + " = " + result;
historyList.prepend(li);

display.value = result;
}
catch{
display.value = "Error";
}
}

document.getElementById("themeBtn").addEventListener("click",()=>{
document.body.classList.toggle("dark");
});

function updateClock(){
let now = new Date();
document.getElementById("clock").innerHTML =
now.toLocaleTimeString();
}

setInterval(updateClock,1000);
updateClock();

document.addEventListener("keydown",(e)=>{
if(!isNaN(e.key) || "+-*/.%".includes(e.key)){
appendValue(e.key);
}
else if(e.key==="Enter"){
calculate();
}
else if(e.key==="Backspace"){
backspace();
}
});