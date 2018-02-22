(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

function test() {
console.log("hello from fire.js");
}


module.exports={ test};
},{}],2:[function(require,module,exports){
"use strict";

let testGrab = require("./fire");
let testingGrab = require("./map");
let moreGrab = require("./parse");

testGrab.test();
testingGrab.testing();
moreGrab.moreTest();
},{"./fire":1,"./map":3,"./parse":4}],3:[function(require,module,exports){
"use strict";

    console.log("hello from map.js");

// INSTRUCTIONS

let instructions = document.getElementById("instructions");
let mapAreas = document.getElementsByClassName("map_class");
let emptyCells = document.getElementById("empty");
let defaultInstructionText = "new instructions";



//AREA DISPLAYS
    function displayArea(e) {
        console.log("Hello", e.target.id);  
        // PROMISE GOES IN HERE
        instructions.innerHTML = defaultInstructionText;
        e.stopPropagation(); // stop any other listeners from hearing this event
    }

    window.addEventListener("click", displayArea);

    function setdefaultInstructionsText() {
        // instructions to equal default instructions 
    }


    for (let i = 0; i < mapAreas.length; i++){
        mapAreas[i].addEventListener("click", displayArea);
    }

    // for loop for the empty cells to add event listener to change content to default instructions

    console.log("mapAreas", mapAreas);
// module.exports = {testing};



// use an overlay with a grid, each cell would have its own class name or id
// string manipulation: each cell that links to something (attractions), will have a class name
// add event listener to those classes, to call the function

// first part of function will be to know which cell was clicked
// second - ask firebase for the information, which is where the promise comes from
// third - return what firebase information was called, and display

// add separate class name to any cells that are empty, which would call to the default instructions id

// create an empty div


// TO TEST - create one id for the entire map image, then break it out to the different cells
// for all of these cells, find the differences


},{}],4:[function(require,module,exports){
"use strict";

function moreTest() {
    console.log("hello from parse.js");
}

module.exports = {moreTest};
},{}]},{},[2]);
