"use strict";
console.log("PRINTjs HAS ARRIVED!");
//REQUIRES
// let {grabArea, dataArea} = require('./fire');
let fetchFire = require('./fire');
let displayArea = require('./map');

//EMPTY ARRAYS
let areaArray = [];
let attractionsArray = [];
let timesArray = [];
let attractionsInfo = [];

//VARIABLES
let printFire = document.getElementById("areaList");
var attractionData;


//FUNCTIONS
function printAttractions(){
    // console.log("SHOW UP printAttractions function");
    printFire.innerHTML = `<h2>AREA${displayArea()}</h2>`;
} 

printAttractions();

// function fetchFirePrint(id){     //wrapped in function so .then doesn't fire on its own
// grabArea(id)
//     .then(
//         (data) => {
//            printFire.innerHTML = `<h2>AREA${id}</h2>`;
//         console.log("attraction data", data);
//         Object.keys(data).forEach((item) => {   //Mike showed me this and i dont understand
//             var index = (data[item]);
//             console.log(index);
//             if(index.area_id === id){      // No longer need an if statement
//                 printFire.innerHTML += `<div class=areaAttractions${id} id=${index.id}><h3>${index.name}</div>;`; 
//             }else if(index.area_id === id){
//                 printFire.innerHTML += `<div class="newArea" id=${index.id}><h3>${index.name}</h3></div>`;
//             }
//         });
//         }
//     );
// }

module.exports= {printAttractions};