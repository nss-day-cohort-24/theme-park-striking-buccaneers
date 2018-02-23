"use strict";
console.log("hello MAIN js");

let fire = require("./fire"); //destructure, to allow me to use what I need in this js file
console.log("here");
let map = require("./map");
console.log("there");
// let parse = require("./parse");
// console.log("everywhere");
// let printAttractions = require("./print");


//Copyright//
var currentDate = new Date();
var monthIndex = new Array([]);
    monthIndex[0] = "January";
    monthIndex[1] = "February";
    monthIndex[2] = "March";
    monthIndex[3] = "April";
    monthIndex[4] = "May";
    monthIndex[5] = "June";
    monthIndex[6] = "July";
    monthIndex[7] = "August";
    monthIndex[8] = "September";
    monthIndex[9] = "October";
    monthIndex[10] = "November";
    monthIndex[11] = "December";
var month = monthIndex[currentDate.getMonth()];
var year = currentDate.getFullYear();
var copyright = document.getElementById("copyright");
function showCopyright(){
    copyright.innerHTML = `&copy; ${month} ${year}. Unitainment Corp. <br />All rights reserved.`;
}
showCopyright();
