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