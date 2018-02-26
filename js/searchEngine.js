"use strict";
console.log("searchengine.js is here!");

//// REQUIRES ///
let fire = require('./fire');
let map = require('./map');
let printJS = require('./print');


//// VARIABLES ////
let searchBar = document.getElementById("searchBar");
let searchBtn = document.getElementById("search-btn");
let searchResults = [];
let searchString = "";

//// FUNCTIONS ////



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



function search() {
    console.log("search function is working");
    let attractionValue = map.displayAttraction.value;
    console.log("ATTRACTION VALUE: ", attractionValue);
}
search();

function enter() {
    console.log("enter function is working");
    searchBtn.addEventListener("click", function enterForAttractions(results){
        console.log("SEARCH BUTTON ENGAGED");
        fire.dataArea();
    });

}
enter();



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

module.exports = {search, enter};