"use strict";

//Declare Variables//
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
}

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