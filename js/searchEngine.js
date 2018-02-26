"use strict";
console.log("searchengine.js is here!");

//// REQUIRES ///
let {dataArea, grabArea} = require('./fire');
let map = require('./map');
let printJS = require('./print');


//// VARIABLES ////
let searchBar = document.getElementById("searchBar");
let searchBtn = document.getElementById("search-btn");
let areaList = document.getElementById("areaList");
let input = searchBar.value;
let attractionNames = [];
let printFire = document.getElementById("areaList");
let searchName;
let keys = [];
let ids = [];



//// EVENT LISTENERS ////
searchBar.addEventListener("keydown", pressEnter);

//// FUNCTIONS ////

function pressEnter(clickEvent){
    if(clickEvent.keyCode === 13){
        searchAttractions(clickEvent);
    }
}

// function searchAttractions() {
//     grabArea(1, 2, 3, 4, 5, 6, 7)
// .then(function(response){
//         keys.push(Object.keys(response));
//         keys.prototype.search = function(input){
//         if(keys.isArray(this) && input){
//             for(var i =0; i < this.length; i++ ){
//                 if(this[i].toLowercase() == input){
//                     return `found ${input} at ${i}.`;
//                 }
//             }console.log(`Sorry. ${this[i]} was not found.`);
//         }else{console.log("Please enter a search term.");}
//     };
// });
// }


function searchAttractions() {
    grabArea(1)
.then(function(response){
    console.log("attraction results coming right up");
    // console.log("response: ", response);
    let keys = Object.keys(response);
    console.log("keys", keys);
    let attractionResults = "";
    keys.forEach(function(item){
        // console.log("item", response[item]);
        let possibleNames = response[item].name;
        attractionNames.push(possibleNames);
        console.log("attractionNames: ", attractionNames);
        console.log(attractionNames.includes(input));
        if(attractionNames.includes(input)){
            // console.log("we want this attractionName ");
        printFire.innerHTML = `<p>${input} can be found in in ${response[item].area_id}</p>`;
        }else if(undefined){
            printFire.innerHTML = `<p>No search results.</p>`;
        }
// printFire.innerHTML = attractionResults;
});
});
}

 


// 1. make your call to FB to get all attractions DONE
// 2. grabArea().then ((response) =>{
    // let keys = Object.keys(response)
    // keys.forEach((item) => {
        //let name = response[item].name;
        // if(name.includes?(input)){
            //RETURN A BOOLEAN 
            // PRINT TO DOM
        // }
    // })
// } 

// input = searchBarInput.value.toLowerCase();




// function fillDataInventory(e) {
//     console.log("MERP HERP DERP FILL DATA");
//     map.displayAttraction(e.target.id)
//         .then(function (data){
//             console.log("data here here here", data);
//         let keys = Object.keys(data);
//          keys.forEach( function(item){
//          console.log("keys: ", keys);
//          data[item].firebaseID = item;
//           searchResults.push(data[item]);
//      });
//     console.log("inventory after fill: ", searchResults);
// });
// }
// fillDataInventory();




//create a function that searches the jSON object in information
// function search() {
//     console.log('search call');
//     // searchBar.value
// }
// search();


//create a function that will allow the user to press enter and show an area with a border around it which holds that attraction
// function enter(){
//     var searchForAttraction = searchBar.value;
    
//     search()
//     .then( function(json) {
//             let userSearch;
//             let userSearchTerm;
//             let searchEngine;
//             for (var i = 0; i < json.attractions.length; i++){
//                 userSearch = json.attractions[i].name;
//                 userSearchTerm = json.attractions[i].id;  
//                 searchEngine = json.attractions[i].area_id;
//                 if (userSearch.includes(entry)){
//                     console.log("match", userSearch);
//                 }
//             }
//         },
//         (reject) => {
//             console.log("SOMETHING WENT REALLY WRONG");
//         }
//     );
// }

// function printSearchData() {
//     printDiv.innerHTML = `${searchHead}`;
// }

module.exports={searchAttractions};