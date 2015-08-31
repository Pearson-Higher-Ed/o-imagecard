"use strict";

function ImageCard(element, params) {
	if (!(this instanceof ImageCard)) {
		throw new TypeError("Constructor ImageCard requires \"new\"");
	}
	if (!element) {
		throw new TypeError("missing required argument: element");
	}
	if (typeof element === "string") {
		element = document.querySelector(element);
	}
	if (!element) {
		return;
	}

	if(!params.src) {
		throw "No data provided. Please provide a src to fetch the image to be displayed";
	}

	var img = document.createElement("img");
	img.src = params.src;
	img.className = "o-imageclass";

	this.card = document.createElement("div");
	this.card.appendChild(img);
	this.card.className = "o-card o-card--" + params.size + " o-imagecard";

	element.appendChild(this.card);

}

module.exports = ImageCard;
