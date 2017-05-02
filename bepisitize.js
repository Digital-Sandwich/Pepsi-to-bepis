var textElements = document.getElementsByTagName('*');

for (var i = 0; i < textElements.length; i++) {
	var element = textElements[i];

	for (var j = 0; j < textElement.childNodes.length; j++) {
		var node = textElement.childNodes[j];

		if (node.nodeType === 3) {
			var text = node.nodeValue;
			var replacedText = text.replace(/Pepsi/gi, 'bepis');

			if (replacedText !== text) {
				textElement.replaceChild(document.createTextNode(replacedText), node);
			}
		}
	}
}

// var imgElements = document.getElementsByTagName("img");

// for (var i = 0; i < imgElements.length; i++) {
// 	var imgs = imgElements[i];
// 	imgs[i].src = "";
// }
