# Image Card

A simple card that places an image div 

## Use

To use, create a new instance of the ImageCard with a JSON configuration payload with the location of where the image lives.  
Next, use webpack to pull in the CSS and js. Simply calling the card directly with vanilla JS will not work.  See the demo for an example of use.

The JSON parameters are as follows:

	data (required): The string for src of the image

This card works by building the card in a DOM node and then returning that node when .getDomNode() is called.

### Example HTML
    <style>
        #cardDiv {height:90px; width:80px;}
    </style>
	<div id="cardDiv"></div>
	<script>
	    var json = { "data" : "http://images.google.com/image1234" };
        var cardInstance = new ImageCard(json);
        var targetElement = document.querySelector("#cardDiv");
        targetElement.appendChild(cardInstance.getDomNode());
	</script>

Webpack is needed to bundle the js and to pull the CSS into the hosting web page.
Size of the image card is inherited down.  

## To Run Demo
  
Then open the demo page in a browser window, no server needed. (/demos/src/ImageCardDemo.html)

## To Run Tests
From the repository root:

  npm install
	cd ./test/ImageCard
	webpack
	webpack-dev-server

browse to: http://localhost:8080/webpack-dev-server/imagecard-testBundle
