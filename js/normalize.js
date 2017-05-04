var allElements = document.getElementsByTagName('*');

var imgElements = document.getElementsByTagName("img");

function normalize() {
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
	// for (var l = 0; l < imgElements.length; i++) {
	// 	var img = imgElements[l];
	// 		console.log('old src ' + img.src);
	// 	if (img.src != " ") {
	// 		img.src = 'ABSOLUTE PATH';
	// 	}
	// 	console.log('new src ' + img.src);
	// }
	//throw new Error("my error message");

}

normalize();
