// variables for html elements
var btn9Am = document.getElementById("btn9Am");
var btn10Am = document.getElementById("btn10Am");
var btn11Am = document.getElementById("btn11Am");
var btn12Pm = document.getElementById("btn12Pm");
var btn1Pm = document.getElementById("btn1Pm");
var btn2Pm = document.getElementById("btn2Pm");
var btn3Pm = document.getElementById("btn3Pm");
var btn4Pm = document.getElementById("btn4Pm");
var btn5Pm = document.getElementById("btn5Pm");
var text9Am = document.getElementById("text9Am");
var text10Am = document.getElementById("text10Am");
var text11Am = document.getElementById("text11Am");
var text12Pm = document.getElementById("text12Pm");
var text1Pm = document.getElementById("text1Pm");
var text2Pm = document.getElementById("text2Pm");
var text3Pm = document.getElementById("text3Pm");
var text4Pm = document.getElementById("text4Pm");
var text5Pm = document.getElementById("text5Pm");
var time9Am = document.getElementById("time9Am")
var currentDay = document.getElementById("currentDay");
var currentTime = moment().format("h a");
console.log(currentTime);
var date = moment().format("dddd, MMMM Do");

time9Am.value = moment().hour(9);
console.log(time9Am)

// displays current date in header
currentDay.textContent = date;

moment(time9Am).hour(9);
console.log(moment(time9Am));

// listeners to save text to local storage
btn9Am.addEventListener("click", function(){
    localStorage.setItem("9AM", text9Am.value)
});

btn10Am.addEventListener("click", function(){
    localStorage.setItem("10AM", text10Am.value)
});

btn11Am.addEventListener("click", function(){
    localStorage.setItem("11AM", text11Am.value)
});

btn12Pm.addEventListener("click", function(){
    localStorage.setItem("12PM", text12Pm.value)
});

btn1Pm.addEventListener("click", function(){
    localStorage.setItem("1PM", text1Pm.value)
});

btn2Pm.addEventListener("click", function(){
    localStorage.setItem("2PM", text2Pm.value)
});

btn2Pm.addEventListener("click", function(){
    localStorage.setItem("3PM", text3Pm.value)
});

btn4Pm.addEventListener("click", function(){
    localStorage.setItem("4PM", text4Pm.value)
});

btn5Pm.addEventListener("click", function(){
    localStorage.setItem("5PM", text5Pm.value)
});
// funtion to load text from local storage
var saveText = function() {
    text9Am.textContent = localStorage.getItem("9AM");
    text10Am.textContent = localStorage.getItem("10AM");
    text11Am.textContent = localStorage.getItem("11AM");
    text12Pm.textContent = localStorage.getItem("12PM");
    text1Pm.textContent = localStorage.getItem("1PM");
    text2Pm.textContent = localStorage.getItem("2PM");
    text3Pm.textContent = localStorage.getItem("3PM");
    text4Pm.textContent = localStorage.getItem("4PM");
    text5Pm.textContent = localStorage.getItem("5PM");
};

// if statement to check current time vs time block and display accordingly
// if ( = currentTime) {
//     .setItem("style", "background-color: #ff6961; color: white;")
// } else if ( > currentTime) {
//     .setItem("stlye", "background-color: #77dd77; color: white;")
// } else {
//     .setItem("style", "background-color: #d3d3d3; color: white;")
// };

// save function call
saveText();