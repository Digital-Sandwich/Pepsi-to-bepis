var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/pepsi/gi, 'bepis');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

// var imgElements = document.getElementsByTagName("img");

// for (var i = 0; i < imgElements.length; i++) {
// 	var imgs = imgElements[i];
// 	imgs[i].src = "";
// }
