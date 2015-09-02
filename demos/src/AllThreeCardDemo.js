"use strict";

var ImageCard = require("../../main.js");


// From the README to make sure the example works
var json = { "src" : "../src/small.png", "size": "small" };
new ImageCard("#cardDiv1", json);

// From the README to make sure the example works
var json = { "src" : "../src/medium.png", "size": "medium" };
new ImageCard("#cardDiv2", json);


// From the README to make sure the example works
var json = { "src" : "../src/large.png", "size": "large" };
new ImageCard("#cardDiv3", json);
