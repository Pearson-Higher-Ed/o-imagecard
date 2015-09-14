# Image Card [![Build Status](https://travis-ci.org/Pearson-Higher-Ed/o-imagecard.svg)](https://travis-ci.org/Pearson-Higher-Ed/o-imagecard)

A simple card that places an image div

## Use

To use, create a new instance of the ImageCard with a JSON configuration payload with the location of where the image lives.

The JSON parameters are as follows:

	element (required): the dom element to attach the newly created image card
	data (required): The string for src of the image


### Example HTML
    <style>
        #cardDiv {height:90px; width:80px;}
    </style>
	<div id="cardDiv"></div>
	<script>
	   	var json = { "src" : "../src/small.png", "size": "small" };
		new ImageCard("#cardDiv1", json);
	</script>


## To Run Tests
From the repository root:

  	npm install
	./node_modules/karma/bin/karma start

