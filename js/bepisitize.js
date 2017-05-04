var allElements = document.getElementsByTagName('*');

var imgElements = document.getElementsByTagName("img");

function bepisitize() {
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
	// for (var l = 0; l < imgElements.length; i++) {
	// 	var img = imgElements[l];
	// 		console.log('old src ' + img.src);
	// 	if (img.src != " ") {
	// 		img.src = 'ABSOLUTE PATH';
	// 	}
	// 	console.log('new src ' + img.src);
	// }
}

document.addEventListener('DOMContentLoaded', function() {
	var bepis = document.getElementById('bepis');
	var normal = document.getElementById('normal');

	normal.addEventListener('click', function(normal) {
		document.getElementById("info").textContent= "off";
	});

	bepis.addEventListener('click', function(bepis) {
		bepisitize();
		document.getElementById("info").textContent = 'on';
	});
});