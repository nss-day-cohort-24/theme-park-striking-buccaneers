"use strict";
let newAreaData = fetchFire.grabArea;
let printFire = document.getElementById("areaList");


function fetchFirePrint(id){     //wrapped in function so .then doesn't fire on its own
    newAreaData(id)
    .then(
        (data) => {
           printFire.innerHTML = `<h2>AREA${id}</h2>`;
        console.log("attraction data", data);
        Object.keys(data).forEach((item) => {   //Mike showed me this and i dont understand
            var index = (data[item]);
            console.log(index);
            if(index.area_id === id){      // No longer need an if statement
                printFire.innerHTML += `<div class=areaAttractions${id} id=${index.id}><h3>${index.name}</div>;`; 
            }else if(index.area_id === id){
                printFire.innerHTML += `<div class="newArea" id=${index.id}><h3>${index.name}</h3></div>`;
            }
        });
        }
    );
}

module.exports= {fetchFirePrint};