/* jshint globalstrict: true */
/* global require, describe, it */

"use strict";

var assert = require("assert");
var ImageCard = require("../src/js/o-imagecard.js");

describe("Percent Card", function () {
	describe("New Object Instance", function(){
			it("should be created with just a data element in the json payload.", function() {
				var json = { data:"http://imageurl" };
				var sut = new ImageCard(json);
				assert.equal(sut._data instanceof HTMLElement, true);
				assert.equal(sut._data.src, "http://imageurl/");
			});
	});
});
