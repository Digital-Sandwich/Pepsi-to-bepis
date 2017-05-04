var allElements = document.getElementsByTagName('*');

var imgElements = document.getElementsByTagName("img");

function bepisitize() {
	for (var i = 0; i < allElements.length; i++) {
		var textElement = allElements[i];

		for (var j = 0; j < textElement.childNodes.length; j++) {
			var node = textElement.childNodes[j];

			if (node.nodeType === 3) {

				var text = node.nodeValue;

				var whichCase = 'lower';
				
				if (text[0] == /[A-Z]/g) {
					whichCase = 'upper';
				}

				if (text[0] == /[a-z]/g) {
					whichCase = 'lower';
				}

				var replacedTextCaps = text.replace(/(Pepsi)/g, 'bepis\u200b');
				var replacedTextLower = text.replace(/(pepsi)/g, 'bepis');

				if (replacedText !== text && whichCase === 'upper') {
					textElement.replaceChild(document.createTextNode(replacedTextCaps), node);
				}
				if (replacedText !== text && whichCase === 'lower') {
					textElement.replaceChild(document.createTextNode(replacedTextLower), node);
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

bepisitize();
