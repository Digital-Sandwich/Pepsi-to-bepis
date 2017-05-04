var allElements = document.getElementsByTagName('*');

var imgElements = document.getElementsByTagName("img");

var pageModified = false;

function normalize() {

	pageModified = false;

	for (var i = 0; i < allElements.length; i++) {
		var textElement = allElements[i];

		for (var j = 0; j < textElement.childNodes.length; j++) {
			var node = textElement.childNodes[j];

			if (node.nodeType === 3) {

				var text = node.nodeValue;
				var replacedText = text.replace(/bepis/gi, 'Pepsi');

				if (replacedText !== text) {
					textElement.replaceChild(document.createTextNode(replacedText), node);
				}
			}
		}
	}
}

function bepisitize() {

	pageModified = true;

	for (var i = 0; i < allElements.length; i++) {
		var textElement = allElements[i];

		for (var j = 0; j < textElement.childNodes.length; j++) {
			var node = textElement.childNodes[j];

			if (node.nodeType === 3) {

				var text = node.nodeValue;
				var replacedText = text.replace(/pepsi/gi, 'bepis');

				if (replacedText !== text) {
					textElement.replaceChild(document.createTextNode(replacedText), node);
				}
			}
		}
	}
	for (var l = 0; l < imgElements.length; i++) {
		var img = imgElements[l];
			console.log('old src ' + img.src);
		if (img.src != " ") {
			img.src = 'ABSOLUTE PATH';
		}
		console.log('new src ' + img.src);
	}
}

document.addEventListener('DOMContentLoaded', function() {
	var normal = document.getElementById('normal');
	var bepis = document.getElementById('bepis');

	var allTabs = chrome.tabs.query({}, function(tabs) {
		tabs.forEach(function(tab) {
			console.log(tab);
		});
		// console.log(tabs);
		// for (var tab in tabs) {
		// 	console.log(tab.id);
		// }
	} );

	// var tabsString = allTabs.toString();
	// onClick's logic below:
	normal.addEventListener('click', function(info, normal) {
		chrome.tabs.executeScript(null, {file: "main.js"});
		normalize();
		document.getElementById("info").textContent= "normal";
	});
	bepis.addEventListener('click', function(info, bepis) {
		bepisitize();
		document.getElementById("info").textContent = 'on';
	});
});