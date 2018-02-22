"use strict";

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
