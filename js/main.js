"use strict";
console.log("hello MAIN js");

let testGrab = require("./fire");
let testingGrab = require("./map");
let moreGrab = require("./parse");


testGrab.test();
moreGrab.moreTest();

testGrab.dataArea()
.then((result) => {
    console.log(result);
});

testGrab.area1(1)
.then((result) => {
    console.log(result);
});

//FUNCTIONS TO POST DATA TO DOM BY ID ///////////////////////


//Copyright//
var currentDate = new Date();
var monthIndex = new Array();
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
};
showCopyright();