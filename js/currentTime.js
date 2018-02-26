"use strict";

//Declare Variables//
let fireGrab = require("./fire");
let printDiv = document.getElementById("printTime");
let hour;
let number = 1;
let selectedTime = "";
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

let timeDropdown = `
<select class="form-control btn-danger" id="timeDropdown">
        <option>Select time</option>
        <option value="a" id="s1">9:00am - 10:00am</option>
        <option value="b" id="s2">10:00am - 11:00am</option>
        <option value="c" id="s3">11:00am - 12:00pm</option>
        <option value="d" id="s4">12:00pm - 1:00pm</option>
        <option value="e" id="s5">1:00pm - 2:00pm</option>
        <option value="f" id="s6">2:00pm - 3:00pm</option>
        <option value="g" id="s7">3:00pm - 4:00pm</option>
        <option value="h" id="s8">4:00pm - 5:00pm</option>
        <option value="i" id="s9">5:00pm - 6:00pm</option>
        <option value="j" id="s10">6:00pm - 7:00pm</option>
        <option value="k" id="s11">7:00pm - 8:00pm</option>
        <option value="l" id="s12">8:00pm - 9:00pm</option>
        <option value="m" id="s13">9:00pm - 10:00pm</option>
                </select>`;

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
        getArea();
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
function getArea(){
    for(let i=0; i<arrayLocation.length; i++){
        let currentArea = arrayLocation[i].id;
        if(newLoc == currentArea){
            locTime = arrayLocation[i].name;
        }
    }
}
//function to get current time

function getTimeDropdown() {
    document.getElementById("timeDropdown").addEventListener("change", function(){
        console.log("Getting time from input");
        fireGrab.grabArea(number)
        .then((resolve)=>{
            console.log("successfull Resolve");
            printDiv.innerHTML = "";
            let container = resolve;
            let keys = Object.keys(container);
            console.log("resolve has worked");
            let selectedTimesList = sortByAttractionTime(container, keys);
        
        },
        (reject)=>{}
    );

    });
}

function sortByAttractionTime(collection, keys){
    let allItems = [];
    keys.forEach(function(item){
        collection[item].times.forEach(function(time){
            if(time.includes(selectedTime))
            allItems.shift(item);
        });
    });
    return allItems;
}
module.exports={test1, timeNow, attractionTimes, getTimeDropdown};