"use strict";

let {dataArea, grabArea} = require('./fire');

    console.log("hello from map.js");

// INSTRUCTIONS

//var myImage = new Image();
//myImage.src = 'images/map_PiratesCove.jpg';
//document.body.appendChild(myImage);

let instructions = document.getElementById("instructions");
let mapAreas = document.getElementsByClassName("map_class");
let emptyCells = document.getElementById("empty");
let defaultInstructionText = "<h3>Welcome to the Pirate's Cove Interactive Map!</h3><br><h4>Instructions on how to use this map:</h4><br><ul><li>Click on a section of the map with a number to see that area of Pirate's Cove</li><li>View and read about all of the attractions and areas to visit in that area of the park.</li><li>To view another area of the park, click on another number on the Pirate's Cove Map</li><li>Have fun!</li>";
let printFire = document.getElementById("areaList");
let printAreaName = document.getElementById("areaName");


// AREA DISPLAY
// function displayArea(f) {
//     console.log("Hello DISPLAY AREA: ", f.target.name);  
//     dataArea(f.target.name)
// .then(function(response){
// // console.log("response: ", response);
// let keys = Object.keys(response);
//     let areaNameTemp = "";
// keys.forEach(function(item){
//     areaNameTemp = `<h3>${response[item].name}</h3>`;
//     console.log("showing area name temp: ", areaNameTemp);
//  });
//     printAreaName.innerHTML = areaNameTemp;
// });
// } 

// displayArea();


//ATTRACTION DISPLAY
function displayAttraction(e) {
        console.log("Hello", e.target.id);  
        grabArea(e.target.id)
.then(function(response){
    // console.log("response: ", response);
    let keys = Object.keys(response);
    // console.log("keys", keys);
    let listofAttractions = "";
    keys.forEach(function(item){
        // console.log("attraction names: ", response[item].name, "description: ", response[item].description);  
        // console.log("response item: ", response[item]);
        // console.log("e target", e.target.getAttribute("id"));
        if(response[item].area_id == e.target.getAttribute("id")){ 
        //listofAttractions += `<section id="sideList"><p><a href="#">${response[item].name}</a>&nbsp;(${response[item].type_id})</p></section>`;
        listofAttractions += `<div id="accordion">
        <div class="card">
          <div class="card-header">
            <a class="collapsed card-link" data-toggle="collapse" data-parent="#accordion" href="#${response[item].id}">
            ${response[item].name}&nbsp;(${response[item].type_id})
            </a>
          </div>
          <div id="${response[item].id}" class="collapse show">
            <div class="card-body">
            <p>${response[item].description}</p>
            </div>
          </div>
        </div></div>`;
        
    }else{console.log("error!!!");
        }
    });
    printFire.innerHTML = listofAttractions;
});
} 

for (let i = 0; i < mapAreas.length; i++){
    mapAreas[i].addEventListener("click", displayAttraction);
    
}
//ATTEMPTED: function to display the description of the attraction when the user clicks on
// let highLight = document.getElementById('divOfMap').getElementsByTagName('DIV').addEventListener("click", keepHighligthed);
// function keepHighligthed(){
//     highLight.classList.toggle("mystyle");
// };
// keepHighligthed();


console.log("mapAreas", mapAreas);

module.exports = {displayAttraction, keepHighligthed};


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

