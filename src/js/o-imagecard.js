"use strict";

function ImageCard(args) {
	if (!args) {
		throw "A valid JSON object must be provided";
	}

	this.setData(args.data);
	this.setUser(args.user);

	this._imgClass = args.imageClassName;

	this._redrawCard = true;
}

/* Static Methods */

/**
  * Returns an array of sizes supported by this card
  */
ImageCard.getSupportedSizes = function() {
	return ["1:1", "2:1", "2:2", "2:4", "4:1", "4:2", "4:4", "4:8"];
};

/**
  * Returns a friendly name of the card
  */
ImageCard.getName = function() {
	return "ImageCard";
};

/**
  * Returns a discription of the card functionality
  */
ImageCard.getDescription = function() {
	return "A card that will contain an image";
};

/* Instance Methods */

/**
  * Image to be dispalyed.  Since we cannot be sure if the user is going to use a directimage
  * or if the user is going to be using a css sprite we do not want to make the dom so lets
  * just have the user pass in the dom element that want to be held inside the card
  */
ImageCard.prototype.setData = function(data) {
	if (!data) {
		throw "No data provided. Please provide a src to fetch the image to be displayed";
	}
	this._redrawCard = true;
	this._data = document.createElement("img");
	this._data.src = data;
	this._data.className = this._imgClass || "o-imageClass";
};

/**
  * Not implemented
  */
ImageCard.prototype.setUser = function(user) {
	this._redrawCard = true;
	this._user = user ? user : "";
};

/**
* This is where most of the visualisation work happens.
* This is where you should actually build your card.
* Returns a DOM node representation of the card to be appended
* to the implementing page.
*/
ImageCard.prototype._renderCard = function() {
	var newNode = document.createElement("div");
	newNode.appendChild(this._data);
	newNode.className = "o-imagecard";
	return newNode;
};

/**
 * Creates a card if needed and returns the DOM node representation
 */
ImageCard.prototype.getDomNode = function() {
	if (this._redrawCard) {
		this._cardDom = this._renderCard();
		this._redrawCard = false;
	}

	return this._cardDom;
};

module.exports = ImageCard;
