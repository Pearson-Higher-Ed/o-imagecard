"use strict";

module.exports = function (config) {
	config.set({
		browsers: [ "PhantomJS" ], //run in Chrome
		singleRun: true, //just run once by default
		frameworks: [ "mocha" ], //use the mocha test framework
		files: [
			"o-imagecardTest.js" //just load this file
		],
		preprocessors : {
			"o-imagecardTest.js": ["webpack"]
		},
		webpack: {
			module: {
				loaders: [
					{
						test: /\.css$/,
						loader: "null-loader"
					}
				]
			}
		},
		reporters: [ "dots" ] //report results in this format
	});
};
