// declares variables for each save button
var btn9Am = document.getElementById("btn9Am");
var btn10Am = document.getElementById("btn10Am");
var btn11Am = document.getElementById("btn11Am");
var btn12Pm = document.getElementById("btn12Pm");
var btn1Pm = document.getElementById("btn1Pm");
var btn2Pm = document.getElementById("btn2Pm");
var btn3Pm = document.getElementById("btn3Pm");
var btn4Pm = document.getElementById("btn4Pm");
var btn5Pm = document.getElementById("btn5Pm");

// declares variables for each textarea
var text9Am = $("#text9Am");
var text10Am = $("#text10Am");
var text11Am = $("#text11Am");
var text12Pm = $("#text12Pm");
var text1Pm = $("#text1Pm");
var text2Pm = $("#text2Pm");
var text3Pm = $("#text3Pm");
var text4Pm = $("#text4Pm");
var text5Pm = $("#text5Pm");

// declare variables for each time display div
var time9Am = document.getElementById("time9Am");
var time10Am = document.getElementById("time10Am")
var time11Am = document.getElementById("time11Am")
var time12Pm = document.getElementById("time12Pm")
var time1Pm = document.getElementById("time1Pm")
var time2Pm = document.getElementById("time2Pm")
var time3Pm = document.getElementById("time3Pm")
var time4Pm = document.getElementById("time4Pm")
var time5Pm = document.getElementById("time5Pm")
var currentDay = document.getElementById("currentDay");
var currentTime = moment().format("H");
console.log(currentTime);
var date = moment().format("dddd, MMMM Do");

// set time display div value
time9Am.value = 9;
console.log(time9Am.value);
time10Am.value = 10;
time11Am.value = 11;
time12Pm.value = 12;
time1Pm.value = 13;
time2Pm.value = 14;
time3Pm.value = 15;
time4Pm.value = 16;
time5Pm.value = 17;

// displays current date in header
currentDay.textContent = date;
console.log(text9Am.value)


// listeners to save text to local storage
btn9Am.addEventListener("click", function(){
    localStorage.setItem("9AM", text9Am.val)
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
    $("#text9Am").text(localStorage.getItem("9AM"));
    text10Am.textContent = localStorage.getItem("10AM");
    text11Am.textContent = localStorage.getItem("11AM");
    text12Pm.textContent = localStorage.getItem("12PM");
    text1Pm.textContent = localStorage.getItem("1PM");
    text2Pm.textContent = localStorage.getItem("2PM");
    text3Pm.textContent = localStorage.getItem("3PM");
    text4Pm.textContent = localStorage.getItem("4PM");
    text5Pm.textContent = localStorage.getItem("5PM");
};



saveText();

// if statement's to check current time vs time block and display accordingly
if ( time9Am.value == currentTime) {
    text9Am.removeClass("future")
    text9Am.removeClass("past")
    text9Am.addClass("present")
} else if ( time9Am.value > currentTime) {
    text9Am.removeClass("past")
    text9Am.removeClass("present")
    text9Am.addClass("future")
} else {
    text9Am.removeClass("present")
    text9Am.removeClass("future")
    text9Am.addClass("past")
};

if ( time10Am.value == currentTime) {
    text10Am.removeClass("future")
    text10Am.removeClass("past")
    text10Am.addClass("present")
} else if ( time10Am.value > currentTime) {
    text10Am.removeClass("past")
    text10Am.removeClass("present")
    text10Am.addClass("future")
} else {
    text10Am.removeClass("present")
    text10Am.removeClass("future")
    text10Am.addClass("past")
};

if ( time11Am.value == currentTime) {
    text11Am.removeClass("future")
    text11Am.removeClass("past")
    text11Am.addClass("present")
} else if ( time11Am.value > currentTime) {
    text11Am.removeClass("past")
    text11Am.removeClass("present")
    text11Am.addClass("future")
} else {
    text11Am.removeClass("present")
    text11Am.removeClass("future")
    text11Am.addClass("past")
};

if ( time12Pm.value == currentTime) {
    text12Pm.removeClass("future")
    text12Pm.removeClass("past")
    text12Pm.addClass("present")
} else if ( time12Pm.value > currentTime) {
    text12Pm.removeClass("past")
    text12Pm.removeClass("present")
    text12Pm.addClass("future")
} else {
    text12Pm.removeClass("present")
    text12Pm.removeClass("future")
    text12Pm.addClass("past")
};

if ( time1Pm.value == currentTime) {
    text1Pm.removeClass("future")
    text1Pm.removeClass("past")
    text1Pm.addClass("present")
} else if ( time1Pm.value > currentTime) {
    text1Pm.removeClass("past")
    text1Pm.removeClass("present")
    text1Pm.addClass("future")
} else {
    text1Pm.removeClass("present")
    text1Pm.removeClass("future")
    text1Pm.addClass("past")
};

if ( time2Pm.value == currentTime) {
    text2Pm.removeClass("future")
    text2Pm.removeClass("past")
    text2Pm.addClass("present")
} else if ( time2Pm.value > currentTime) {
    text2Pm.removeClass("past")
    text2Pm.removeClass("present")
    text2Pm.addClass("future")
} else {
    text2Pm.removeClass("present")
    text2Pm.removeClass("future")
    text2Pm.addClass("past")
};

if ( time3Pm.value == currentTime) {
    text3Pm.removeClass("future")
    text3Pm.removeClass("past")
    text3Pm.addClass("present")
} else if ( time3Pm.value > currentTime) {
    text3Pm.removeClass("past")
    text3Pm.removeClass("present")
    text3Pm.addClass("future")
} else {
    text3Pm.removeClass("present")
    text3Pm.removeClass("future")
    text3Pm.addClass("past")
};

if ( time4Pm.value == currentTime) {
    text4Pm.removeClass("future")
    text4Pm.removeClass("past")
    text4Pm.addClass("present")
} else if ( time4Pm.value > currentTime) {
    text4Pm.removeClass("past")
    text4Pm.removeClass("present")
    text4Pm.addClass("future")
} else {
    text4Pm.removeClass("present")
    text4Pm.removeClass("future")
    text4Pm.addClass("past")
};

if ( time5Pm.value == currentTime) {
    text5Pm.removeClass("future")
    text5Pm.removeClass("past")
    text5Pm.addClass("present")
} else if ( time5Pm.value > currentTime) {
    text5Pm.removeClass("past")
    text5Pm.removeClass("present")
    text5Pm.addClass("future")
} else {
    text5Pm.removeClass("present")
    text5Pm.removeClass("future")
    text5Pm.addClass("past")
};

// save function call
saveText();