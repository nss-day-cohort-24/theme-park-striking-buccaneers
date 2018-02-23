"use strict";

function test() {
console.log("hello from fire.js");
}

// var attractions = {};

// let attractionItems = [];

//       let parseData = (data) => {
//           data.attractionItems
      //}

let fireFetcher;
let fireData;


///////////  FUNCTION TO FETCH AREA DATA   /////////////
function dataArea(areaId) {

    console.log("fetching");
    return new Promise((resolve,reject) => {
        var loader = new XMLHttpRequest();
        console.log("before load");
        console.log("before open");
        loader.open("GET", `https://buccaneers-theme-park.firebaseio.com/areas/${areaId}.json`);
        console.log("before send");
        loader.send();
        loader.addEventListener('load', function(){
            console.log("hey", JSON.parse(this.responseText));
            resolve(JSON.parse(this.responseText));
            // console.log()    //Carry out the listArea on a resolve
        });
        console.log("before error");
        loader.addEventListener('error', function(){
            reject(console.log("you suck"));
        });
    });
}

//// Getter for all AREAS ////
function grabArea(id){
    console.log("fetching any specified area");
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

///Setter for all areas to 


   



    //        var sendTo = document.getElementById("areaList");
//    var outputString ="";
// );


// function listAttractions(attractions) {
//     var list = document.getElementById("areaList");
//     var outputString = "";

//     console.log("setting to DOM");
// for (var i = 0; i < attractions.lenght; i++) {
//     var currentAttractions = attractions[i];
//     // build up DOM string
// }
// }

module.exports={ test, dataArea, grabArea};