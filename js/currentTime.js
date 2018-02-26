"use strict";

//Declare Variables//
let printDiv = document.getElementById("printTime");
let hour;
let userHour = "c";
let arrayNames = [];
let arrayLocation = [];
let arrayIndexId = [];
let arrayIndexLoc = [];
let newNames;
let aId;
let newLoc;
let locTime;
let locationTime;


function test1() {
    console.log("good day sir");
}

function timeNow() {
    let day = new Date();
    let current = day.toLocaleTimeString();
    console.log("current time", current);
    hour = day.getHours();
}
timeNow();

function attractionTimes(){
    console.log('attraction time');
    
    return new Promise((resolve, reject) => {
        var loader = new XMLHttpRequest();
        loader.addEventListener('load', function(){
            var listArea = JSON.parse(this.responseText);
            resolve(listArea);
        });
        loader.addEventListener('error', function(){
            reject();
        });
        loader.open("GET", `https://buccaneers-theme-park.firebaseio.com/attractions.json`);
        loader.send();
    });
}

function getTime(taco){
    if(userHour !== "c"){
        hour = userHour;
    }
    console.log(hour);
    if (hour== taco){
        matchArea();
        console.log("working");

        arrayNames.push(newNames);
        arrayIndexLoc.push(locationTime);
        arrayIndexId.push(aId);
    
    
    }
    showTimeData();
}


////// PRINT TIME //////
function showTimeData() {
    hour = parseInt(hour);

    let hour2 = hour+1;
  let hdisp = hour;
  let h2disp = hour2;
  let pm ="am";
  if (hour>12){
      hdisp = hdisp- 12;
  }
  if (hour2>12){
      h2disp = h2disp - 12;
      pm = "pm";
}
printDiv.innerHTML += `<h2>${hdisp}-${h2disp+pm}</h2>`;
for (let i=0; i <arrayNames.length;i++){
    let name = arrayNames[i];
    let location = arrayIndexLoc[i];
    let id = arrayIndexId[i];

    printDiv.innerHTML += `<h3> class="attraction-time" id="${id}">${name}<br>`;
    printDiv.innerHTML += `(${location}</h3>)<br>`;
}
}
function matchArea(){
    for(let i=0; i<arrayLocation.length; i++){
        let currentArea = arrayLocation[i].id;
        if(newLoc == currentArea){
            locTime = arrayLocation[i].name;
        }
    }
}
module.exports={test1, timeNow, attractionTimes};