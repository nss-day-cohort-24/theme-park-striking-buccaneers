"use strict";


///////////  FUNCTION TO FETCH AREA DATA   /////////////
function dataArea(areaId) {
    return new Promise((resolve,reject) => {
        var loader = new XMLHttpRequest();
        loader.open("GET", `https://buccaneers-theme-park.firebaseio.com/areas/${areaId}.json`);
        loader.send(); 
        loader.addEventListener('load', function(){
            resolve(JSON.parse(this.responseText));
        });
        loader.addEventListener('error', function(){
            reject(console.log("you suck"));
        });
    });
}

//// Getter for all AREAS ////
function grabArea(id){
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


function attractionByType(id){
    console.log("fetching attractions by type id");
    return new Promise((resolve,reject) => {
        var loader = new XMLHttpRequest();

    loader.addEventListener('load', function(){
        var listArea = JSON.parse(this.responseText);
        resolve(listArea);    //Carry out the listArea on a resolve
    });
    loader.addEventListener('error', function(){
        reject();
    });
    loader.open("GET", `https://buccaneers-theme-park.firebaseio.com/attractions.json?orderBy="type_id"&equalTo=${id}`);
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
//  }
// }

module.exports={dataArea, grabArea};