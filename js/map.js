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

