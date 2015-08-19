"use strict";

var ImageCard = require("../../main.js");


// From the README to make sure the example works
var json = { "data" : "../src/img.jpg" };
var cardInstance = new ImageCard(json);
var targetElement = document.querySelector("#cardDiv");
targetElement.appendChild(cardInstance.getDomNode());
