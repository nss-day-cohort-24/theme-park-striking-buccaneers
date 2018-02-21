(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

function test() {
console.log("hello from fire.js");
}


module.exports={ test};
},{}],2:[function(require,module,exports){
"use strict";

let testGrab = require("./fire");
let testingGrab = require("./map");
let moreGrab = require("./parse");

testGrab.test();
testingGrab.testing();
moreGrab.moreTest();
},{"./fire":1,"./map":3,"./parse":4}],3:[function(require,module,exports){
"use strict";

function testing() {
    console.log("hello from map.js");
    }

module.exports = {testing};
},{}],4:[function(require,module,exports){
"use strict";

function moreTest() {
    console.log("hello from parse.js");
}

module.exports = {moreTest};
},{}]},{},[2]);
