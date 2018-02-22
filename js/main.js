"use strict";

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