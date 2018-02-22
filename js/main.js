"use strict";
console.log("hello MAIN js");

let fetchFire = require("./fire");
let testingGrab = require("./map");
let moreGrab = require("./parse");
let newPrint = require("./print");

fetchFire.test();
moreGrab.moreTest();

fetchFire.dataArea()
.then((result) => {
    console.log(result);
});

fetchFire.grabArea(1)
.then((result) => {
    fetchFirePrint();
    console.log("YOOOOO");
});

fetchFire.grabArea(2)
.then((result) => {
    console.log(result);
});

fetchFire.grabArea(3)
.then((result) => {
    console.log(result);
});

//FUNCTIONS TO POST DATA TO DOM BY ID ///////////////////////




// function populatePage(attractions){
//     let sendTo = document.createElement("div");
//     console.log("attractions", attractions);
//     sendTo.innerHTML = attractions.map(fetchFire.dataArea);
//     document.getElementById("areaList").append(sendTo);

// }

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

