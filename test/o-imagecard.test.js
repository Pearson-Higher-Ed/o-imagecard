/* jshint globalstrict: true */
/* global require, describe, it */

"use strict";

var assert = require("assert");
var ImageCard = require("../src/js/o-imagecard.js");

describe("Image Card", function () {
	describe("New Object Instance", function(){
			it("should be created with just a data src element in the json payload.", function() {
				var json = { src:"http://imageurl" };
				var sut = new ImageCard(document.createElement("div"), json);
				assert.notEqual(sut.card, undefined);
				assert.equal(sut.card instanceof HTMLElement, true);
			});
	});
});
