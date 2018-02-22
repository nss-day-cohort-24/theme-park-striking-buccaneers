"use strict";

function test() {
console.log("hello from fire.js");
}

// var attractions = {};

// let attractionItems = [];

//       let parseData = (data) => {
//           data.attractionItems
      //}

let fetchFire;
let fireData;


///////////  FUNCTION TO FETCH AREA DATA   /////////////
function dataArea(){
    console.log("fetching");
    return new Promise((resolve,reject) => {
        var loader = new XMLHttpRequest();

    loader.addEventListener('load', function(){
        var listArea = JSON.parse(this.responseText);
        resolve(listArea);    //Carry out the listArea on a resolve
    });
    loader.addEventListener('error', function(){
        reject();
    });
    loader.open("GET", `https://buccaneers-theme-park.firebaseio.com/areas.json`);
    loader.send();
    });
}

function area1(id){
    console.log("fetching area 1");
    return new Promise((resolve,reject) => {
        var loader = new XMLHttpRequest();

    loader.addEventListener('load', function(){
        var listArea = JSON.parse(this.responseText);
        resolve(listArea);    //Carry out the listArea on a resolve
    });
    loader.addEventListener('error', function(){
        reject();
    });
    loader.open("GET", `https://buccaneers-theme-park.firebaseio.com/attractions.json?orderBy="area_id"&equalTo=${id}`);
    loader.send();
    });
}


module.exports={ test, dataArea, area1};